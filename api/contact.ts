import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['nayabnayyer882@gmail.com'],
      subject: subject || `New Portfolio Message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'No subject'}

Message:
${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}