// testEmail.js
import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: process.env.EMAIL_TO,       // must be your Resend-verified email
  subject: 'Test ✅',
  html: '<p>Resend is working!</p>',
});

if (error) console.error('Error ❌', error);
else console.log('Sent ✅', data);