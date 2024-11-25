import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Instancier Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

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
    const matriculation = formData.get('matriculation') as string;
    const message = formData.get('message') as string;
    const photoUrls = formData.getAll('photos'); // Récupère toutes les URL des photos

    console.log('Form data received:', {
      name,
      email,
      phone,
      matriculation,
      message,
      photoUrls,
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

    // Préparer l'email
    const emailOptions = {
      from: 'Cars Pat Contact Site Web <no-reply@cars-pat.fr>', // Utiliser un domaine vérifié avec Resend
      to: 'carrosse-pat@hotmail.fr', // Adresse de destination
      replyTo: email,
      subject: `Message de ${name} - ${phone} - ${email} - ${matriculation}`,
      html: `
        <h1>Message de ${name}</h1>
        <h2>Téléphone: ${phone}</h2>
        <h2>Email: <a href="mailto:${email}">${email}</a></h2>
        <h2>Immatriculation: ${matriculation}</h2>
        <h3>Message:</h3>
        <p>${message}</p>
        <h3>Photos:</h3>
        ${photoLinks}
      `,
    };

    // Envoyer l'email via Resend
    const response = await resend.emails.send(emailOptions);

    console.log('Email sent:', response);

    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Email not sent' }, { status: 500 });
  }
}
