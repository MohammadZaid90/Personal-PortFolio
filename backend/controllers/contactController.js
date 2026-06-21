import nodemailer from 'nodemailer';
import { validationResult } from 'express-validator';
import Contact from '../models/Contact.js';

const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

// POST /api/contact
export const sendMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      ipAddress: req.ip,
    });

    // Send emails without blocking response
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = createTransporter();
      const ownerMail = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Message: ${subject || 'Portfolio Inquiry'} — from ${name}`,
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
            <p style="margin-top:1.5rem;color:#5a5a70;font-size:0.8rem">Received: ${new Date().toLocaleString()}</p>
          </div>`,
      };

      const replyMail = {
        from: `"Mohammad Zaid" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thanks for reaching out, ${name}!`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a10;color:#f0f0f5;padding:2rem;border-radius:12px">
            <h2 style="color:#a78bfa">Hey ${name}, got your message!</h2>
            <p style="color:#9090a8;line-height:1.8">Thanks for reaching out through my portfolio. I will get back to you within 24 to 48 hours.</p>
            <div style="margin:1.5rem 0;padding:1rem;background:#131320;border-radius:8px;border-left:3px solid #38bdf8">
              <p style="margin:0;color:#9090a8;font-size:0.85rem">Your message:</p>
              <p style="margin:0.5rem 0 0;line-height:1.7">${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <p style="color:#5a5a70;font-size:0.8rem;margin-top:2rem">
              Best regards,<br/><strong style="color:#f0f0f5">Mohammad Zaid</strong><br/>
              Software Engineer &bull; UET Lahore
            </p>
          </div>`,
      };

      Promise.all([transporter.sendMail(ownerMail), transporter.sendMail(replyMail)]).catch(
        (err) => console.warn('Email error (message saved):', err.message)
      );
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

// GET /api/contact (admin only)
export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PATCH /api/contact/:id/status (admin only)
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
