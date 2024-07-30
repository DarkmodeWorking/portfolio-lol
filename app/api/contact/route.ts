import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const createEmailTemplate = (
  firstname: string,
  lastname: string,
  email: string,
  message: string
) => {
  return `
    <html>
      <body>
        <h2>New Message from ${firstname} ${lastname}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </body>
    </html>
  `;
};

export async function POST(req: NextRequest) {
  const { firstname, lastname, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'tikludas01@gmail.com', // replace with your receiving email address
    subject: `New Message from ${firstname} ${lastname}`,
    html: createEmailTemplate(firstname, lastname, email, message),
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message received successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to submit message.' }, { status: 500 });
  }
}
