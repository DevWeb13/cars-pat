import { NextResponse } from 'next/server';
import nodemailer, { SendMailOptions } from 'nodemailer';

export async function POST(request: any): Promise<NextResponse> {
  try {
    const formData = await request.formData();

    // Vérification des données du formulaire
    if (!formData) {
      console.error('No form data received');
      return NextResponse.json(
        { message: 'No form data received' },
        { status: 400 }
      );
    }

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const photos = formData.getAll('photos'); // Récupère toutes les photos

    console.log('Form data received:', { name, email, phone, message, photos });

    let transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Serveur SMTP d'Outlook
      port: 587, // Port standard pour le SMTP avec STARTTLS
      secure: false, // Pour STARTTLS, secure doit être défini sur false
      requireTLS: true, // Oblige nodemailer à utiliser STARTTLS
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const attachments = await Promise.all(
      photos.map(async (photo: any) => {
        const buffer = Buffer.from(await photo.arrayBuffer());
        return {
          filename: photo.name,
          content: buffer,
        };
      })
    );

    const mailOption: SendMailOptions = {
      from: `${email} <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `Message from ${name} - ${phone} - ${email}`,
      html: `<p>${message}</p>`,
      attachments: attachments, // Ajoutez les pièces jointes ici
    };

    // Utilisez await ici pour attendre que l'e-mail soit envoyé
    const info = await transporter.sendMail(mailOption);
    console.log('Email sent:', info);
    console.log('Attachments:', mailOption.attachments);

    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (error) {
    console.error(error);
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Email not sent' }, { status: 500 });
  }
}
