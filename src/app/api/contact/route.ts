import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${data.name}" <${data.email}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: data.subject,
      text: data.message,
      html: `<p>${data.message}</p><p>De la: ${data.name} (${data.email})</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email trimis cu succes!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Eroare la trimitere email" },
      { status: 500 },
    );
  }
}
