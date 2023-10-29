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
    const photoUrls = formData.getAll('photos'); // Récupère toutes les URL des photos

    console.log('Form data received:', {
      name,
      email,
      phone,
      message,
      photoUrls,
    });

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

    // Créer une liste de liens pour les photos
    const photoLinks = photoUrls
      .map(
        (url: string) => `
      <div style="display: inline-block; margin: 10px; border: 1px solid #ddd; padding: 10px; text-align: center;">
        <a href="${url}" download>
        <img src="${url}" alt="${url}" style="width: 100px; height: 100px; display: block; margin-bottom: 5px;">
        ${url}
        </a>
      </div>`
      )
      .join('');

    const mailOption: SendMailOptions = {
      from: `${email} <${process.env.EMAIL}>`,
      to: process.env.EMAIL, //Changer pour carrosse-pat@hotmail.fr au moment de la mise en ligne.
      replyTo: email,
      subject: `Message from ${name} - ${phone} - ${email}`,
      html: `<p>${message}</p><br><p>Photos:</p><br>${photoLinks}`,
    };

    // Utilisez await ici pour attendre que l'e-mail soit envoyé
    const info = await transporter.sendMail(mailOption);
    console.log('Email sent:', info);

    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (error) {
    console.error(error);
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Email not sent' }, { status: 500 });
  }
}
