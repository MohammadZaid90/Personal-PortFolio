import { Resend } from 'resend';
import { validationResult } from 'express-validator';
import Contact from '../models/Contact.js';

let resend;
const getResend = () => {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
};

export const sendMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ success: false, errors: errors.array() });

  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      ipAddress: req.ip,
    });

    if (process.env.RESEND_API_KEY) {
      // Only send to YOU (owner) — free plan allows this
      // reply_to is set to visitor's email so you can reply directly
      getResend().emails.send({
        from: 'onboarding@resend.dev',
        to: process.env.EMAIL_TO,
        reply_to: email,
        subject: `New Message from ${name}: ${subject || 'Portfolio Inquiry'}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a10;color:#f0f0f5;padding:2rem;border-radius:12px">
            <h2 style="color:#a78bfa">New Portfolio Message</h2>

            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#9090a8;width:80px">Name</td><td style="font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#9090a8">Email</td><td><a href="mailto:${email}" style="color:#38bdf8">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#9090a8">Subject</td><td>${subject || '—'}</td></tr>
            </table>

            <div style="margin-top:1.5rem;padding:1rem;background:#131320;border-radius:8px;border-left:3px solid #6c63ff">
              <p style="margin:0;line-height:1.7">${message.replace(/\n/g, '<br/>')}</p>
            </div>

            <!-- One-click reply button -->
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=Hi ${encodeURIComponent(name)},%0A%0A"
               style="display:inline-block;margin-top:1.5rem;padding:0.75rem 1.5rem;background:#6c63ff;color:#fff;border-radius:8px;text-decoration:none;font-weight:600">
              Reply to ${name}
            </a>

            <p style="margin-top:1.5rem;color:#5a5a70;font-size:0.8rem">
              Received: ${new Date().toLocaleString()}
            </p>
          </div>`,
      }).catch(err => console.warn('Email error (message saved):', err.message));
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      id: contact._id,
    });

  } catch (error) {
    console.error('Contact controller error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const msg = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!msg) return res.status(404).json({ success: false, message: 'Message not found' });
    res.json({ success: true, data: msg });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};