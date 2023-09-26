import { FormEvent, useState, useRef } from 'react';
import styles from './mailForm.module.css';
import Image from 'next/image';

type ImageItem = {
  preview: string;
  file: File;
};

type ImageState = ImageItem[];

type ErrorState = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  files?: string;
};

const MailForm = () => {
  const [images, setImages] = useState<ImageState>([]);

  const [errors, setErrors] = useState<ErrorState>({});
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | null>(
    null
  );

  const formRef = useRef<HTMLFormElement>(null);

  const allowedFileTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
  ];
  const MAX_SIZE = 18 * 1024 * 1024; // 18MB

  const validateName = (name: string): boolean => {
    if (!name.trim()) {
      setErrors((prev) => ({ ...prev, name: 'Le nom est obligatoire.' }));
      return false;
    } else if (name.length < 3) {
      setErrors((prev) => ({
        ...prev,
        name: 'Le nom doit comporter au moins 3 caractères.',
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, name: undefined }));
      return true;
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "L'email n'est pas valide." }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
      return true;
    }
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone.trim()) {
      setErrors((prev) => ({
        ...prev,
        phone: 'Le numéro de téléphone est obligatoire.',
      }));
      return false;
    }
    const phoneRegex = /^0[1-9]([-. ]?[0-9]{2}){4}$/;
    if (phone && !phoneRegex.test(phone)) {
      setErrors((prev) => ({ ...prev, phone: "Le numéro n'est pas valide." }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, phone: undefined }));
      return true;
    }
  };

  const validateMessage = (message: string): boolean => {
    if (!message.trim()) {
      setErrors((prev) => ({
        ...prev,
        message: 'Le message est obligatoire.',
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, message: undefined }));
      return true;
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const existingFileNames = images.map((imageItem) => imageItem.file.name);
      const newFiles = Array.from(event.target.files).filter(
        (file) => !existingFileNames.includes(file.name)
      );

      const totalSize =
        newFiles.reduce((acc, file) => acc + file.size, 0) +
        images.reduce((acc, imageItem) => acc + imageItem.file.size, 0);
      if (totalSize > MAX_SIZE) {
        setErrors((prev) => ({
          ...prev,
          files: 'La taille totale des fichiers dépasse la limite de 18MB.',
        }));
        return;
      }

      const invalidFileType = newFiles.some(
        (file) => !allowedFileTypes.includes(file.type)
      );
      if (invalidFileType) {
        setErrors((prev) => ({
          ...prev,
          files: 'Un ou plusieurs fichiers ont un type non autorisé.',
        }));
        return;
      } else {
        setErrors((prev) => ({ ...prev, files: undefined }));
      }

      Promise.all(
        newFiles.map((file) => {
          const reader = new FileReader();
          return new Promise<ImageItem>((resolve) => {
            reader.onloadend = () => {
              resolve({
                preview: reader.result as string,
                file: file,
              });
            };
            reader.readAsDataURL(file);
          });
        })
      ).then((newImageItems) => {
        setImages((prevState) => [...prevState, ...newImageItems]);
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    const isNameValid = validateName(event.currentTarget.surName.value);
    const isEmailValid = validateEmail(event.currentTarget.email.value);
    const isPhoneValid = validatePhone(event.currentTarget.phone.value);
    const isMessageValid = validateMessage(event.currentTarget.message.value);

    if (!isNameValid || !isEmailValid || !isMessageValid || !isPhoneValid) {
      setStatus(null);
      return;
    }

    const formData = new FormData();
    images.forEach((image) => {
      formData.append('photos', image.file);
    });
    formData.append('name', event.currentTarget.surName.value);
    formData.append('email', event.currentTarget.email.value);
    formData.append('phone', event.currentTarget.phone.value);
    formData.append('message', event.currentTarget.message.value);

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      body: formData,
    });
    console.log(await response.json());
    // const responseData = await response.json();

    if (response.ok) {
      setStatus('success');
      setImages([]); // Réinitialise les images
      formRef.current?.reset(); // Réinitialise le formulaire
    } else {
      setStatus('error');
    }
    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  return (
    <>
      <header className={styles.headerForm + ' ' + 'sectionContent column'}>
        <h2 className='primaryColor textBold'>
          Envoyez-nous vos photos pour une estimation de devis plus précise!
        </h2>
        <p className='text'>
          Vous pouvez nous envoyer des photos directement via ce formulaire.
          Cela nous permettra de mieux évaluer vos besoins en matière de
          carrosserie automobile et de vous fournir une estimation de devis plus
          précise. Ajoutez simplement vos photos en utilisant le bouton
          ci-dessous avant de soumettre votre formulaire.
        </p>
      </header>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        encType='multipart/form-data'
        className={styles.contactForm + ' ' + 'sectionContent column'}>
        <div className={styles.formGroup + ' ' + 'sectionContent column'}>
          <label
            htmlFor='surName'
            className={
              styles.label +
              ' ' +
              styles.labelName +
              ' ' +
              'primaryColor textBold'
            }>
            Nom/Prénom*
          </label>
          <input
            type='text'
            id='surName'
            name='surName'
            onBlur={(e) => validateName(e.target.value)}
            className={styles.input}
            placeholder='Nom/Prénom'
          />

          <p className={styles.error + ' ' + 'textFooter'}>
            {errors.name ? errors.name : ''}
          </p>
        </div>
        <div className={styles.formGroup + ' ' + 'sectionContent column'}>
          <label
            htmlFor='email'
            className={
              styles.label +
              ' ' +
              styles.labelMail +
              ' ' +
              'primaryColor textBold'
            }>
            Email*
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className={styles.input}
            onBlur={(e) => validateEmail(e.target.value)}
            placeholder='E-mail'
          />

          <p className={styles.error + ' ' + 'textFooter'}>
            {errors.email ? errors.email : ''}
          </p>
        </div>
        <div className={styles.formGroup + ' ' + 'sectionContent column'}>
          <label
            htmlFor='phone'
            className={
              styles.label +
              ' ' +
              styles.labelPhone +
              ' ' +
              'primaryColor textBold'
            }>
            Téléphone*
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            className={styles.input}
            onBlur={(e) => validatePhone(e.target.value)}
            placeholder='Téléphone'
          />

          <p className={styles.error + ' ' + 'textFooter'}>
            {errors.phone ? errors.phone : ''}
          </p>
        </div>
        <div className={styles.formGroup + ' ' + 'sectionContent column'}>
          <label
            htmlFor='message'
            className={
              styles.label +
              ' ' +
              styles.labelMessage +
              ' ' +
              'primaryColor textBold'
            }>
            Message*
          </label>
          <textarea
            id='message'
            name='message'
            className={styles.input}
            onBlur={(e) => validateMessage(e.target.value)}></textarea>
          <p className={styles.error + ' ' + 'textFooter'}>
            {errors.message ? errors.message : ''}
          </p>
        </div>
        <div className={styles.formGroup + ' ' + 'sectionContent column'}>
          <label
            htmlFor='photos'
            className={styles.customFileUpload}>
            Sélectionner des fichiers
          </label>
          <input
            type='file'
            id='photos'
            name='photos'
            multiple
            className={styles.visuallyHidden}
            onChange={handleFileChange}
          />

          {images.length > 0 &&
            images.map((image, index) => (
              <div key={index + image.file.name}>
                <p>{image.file.name}</p>

                <Image
                  src={image.preview}
                  alt='Preview'
                  width={100}
                  height={100}
                />
                <button onClick={() => handleRemoveImage(index)}>
                  Supprimer
                </button>
              </div>
            ))}
        </div>

        <p className={styles.error + ' ' + 'textFooter'}>
          {errors.files ? errors.files : ''}
        </p>

        <div>
          {status === 'loading' && <p>Envoi en cours...</p>}
          {status === 'success' && <p>Email envoyé avec succès!</p>}
          {status === 'error' && (
            <p>Erreur lors de l&apos;envoi de l&apos;email.</p>
          )}
        </div>
        <button
          type='submit'
          disabled={status === 'loading'}>
          Envoyer
        </button>
      </form>
    </>
  );
};

export default MailForm;
