import { FormEvent, useState, useRef } from 'react';
import styles from './mailForm.module.css';
import Image from 'next/image';
import Button from '../ui/Button/Button';

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
  checkbox?: string;
  files?: string;
};

const MailForm = () => {
  const [images, setImages] = useState<ImageState>([]);
  const [totalFileSize, setTotalFileSize] = useState<number>(0);

  const [errors, setErrors] = useState<ErrorState>({});
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | null>(
    null
  );

  const formRef = useRef<HTMLFormElement>(null);
  const fileLabelRef = useRef<HTMLLabelElement>(null);

  const allowedFileTypes = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
  ];

  const MAX_SIZE = 32 * 1024 * 1024;

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

  const validateCheckbox = (isChecked: boolean): boolean => {
    if (!isChecked) {
      setErrors((prev) => ({
        ...prev,
        checkbox: 'Vous devez accepter les conditions.',
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, checkbox: undefined }));
      return true;
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const existingFileNames = images.map((imageItem) => imageItem.file.name);
      const newFiles = Array.from(event.target.files).filter(
        (file) => !existingFileNames.includes(file.name)
      );

      // Filtrer les fichiers qui dépassent la taille maximale et afficher une erreur si nécessaire
      const validFiles = newFiles.filter((file) => {
        if (file.size > MAX_SIZE) {
          setErrors((prev) => ({
            ...prev,
            files: 'Un fichier dépasse la limite de 32MB.',
          }));
          setTimeout(() => {
            setErrors((prev) => ({ ...prev, files: undefined }));
          }, 5000);
          return false;
        }
        return true;
      });

      const invalidFileType = validFiles.some(
        (file) => !allowedFileTypes.includes(file.type)
      );

      if (invalidFileType) {
        setErrors((prev) => ({
          ...prev,
          files: 'Ce type de fichier n’est pas autorisé.',
        }));
        setTimeout(() => {
          setErrors((prev) => ({ ...prev, files: undefined }));
        }, 5000);
        return;
      } else {
        setErrors((prev) => ({ ...prev, files: undefined }));
      }

      const totalImages = images.length + newFiles.length;
      if (totalImages > 9) {
        setErrors((prev) => ({
          ...prev,
          files: 'Vous ne pouvez télécharger que 9 photos au maximum.',
        }));
        setTimeout(() => {
          setErrors((prev) => ({ ...prev, files: undefined }));
        }, 5000);
        return;
      }

      Promise.all(
        validFiles.map((file) => {
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

  async function uploadToImgBB(base64String: string) {
    const formData = new FormData();
    formData.append('key', process.env.NEXT_PUBLIC_IMGBB_API_KEY ?? ''); // Remplacez par votre clé API
    if (base64String) {
      formData.append('image', base64String);
    }

    const response = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to upload image to ImgBB');
    }

    return data.data.url; // Retourne l'URL de l'image téléchargée
  }

  const handleRemoveImage = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.stopPropagation(); // Ajoutez cette ligne pour arrêter la propagation de l'événement
    event.preventDefault(); // Ajoutez cette ligne pour arrêter la propagation de l'événement

    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    const sizeAfterRemoval = totalFileSize - images[index].file.size;
    setTotalFileSize(sizeAfterRemoval);
  };

  const uploadFilesToImgBB = async (files: File[]) => {
    const uploadedUrls = [];

    for (const file of files) {
      const reader = new FileReader();
      const promise = new Promise<string>((resolve, reject) => {
        reader.onloadend = async () => {
          try {
            const base64String = (reader.result as string).split(',')[1];
            const imageUrl = await uploadToImgBB(base64String);
            resolve(imageUrl);
          } catch (error) {
            reject(error);
          }
        };
      });

      reader.readAsDataURL(file);
      uploadedUrls.push(promise);
    }

    return Promise.all(uploadedUrls);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus('loading');
    const name = event.currentTarget.surName.value;
    const email = event.currentTarget.email.value;
    const phone = event.currentTarget.phone.value;
    const message = event.currentTarget.message.value;
    const checkbox = event.currentTarget.consentCheckbox.checked;

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    const isMessageValid = validateMessage(message);
    const isCheckboxValid = validateCheckbox(checkbox);

    if (
      !isNameValid ||
      !isEmailValid ||
      !isMessageValid ||
      !isPhoneValid ||
      !isCheckboxValid
    ) {
      // Supposons que la hauteur de votre en-tête soit de 60px
      const headerHeight = 60;

      if (formRef.current) {
        const yOffset = formRef.current.offsetTop - headerHeight;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }

      setStatus(null);
      return;
    }
    console.log(images);

    try {
      ////////////////// NEW CODE ///////////////////////
      const fileUrls = await uploadFilesToImgBB(images.map((img) => img.file));

      console.log({ fileUrls });

      // Étape 2: Envoyez ces URL de fichier à votre endpoint @/api/sendEmail
      const formData = new FormData();
      console.log(formData);
      fileUrls.forEach((url) => {
        formData.append('photos', url); // Nous envoyons des URL au lieu de fichiers
      });
      console.log(name);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('message', message);

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setImages([]); // Réinitialise les images
        formRef.current?.reset(); // Réinitialise le formulaire
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }

    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files.length) {
      const existingFileNames = images.map((imageItem) => imageItem.file.name);
      const newFiles = Array.from(files).filter(
        (file) => !existingFileNames.includes(file.name)
      );

      const invalidFileType = newFiles.some(
        (file) => !allowedFileTypes.includes(file.type)
      );
      if (invalidFileType) {
        setErrors((prev) => ({
          ...prev,
          files: 'Ce type de fichier n’est pas autorisé.',
        }));
        setTimeout(() => {
          setErrors((prev) => ({ ...prev, files: undefined }));
        }, 5000);
        return;
      } else {
        setErrors((prev) => ({ ...prev, files: undefined }));
      }

      Promise.all(
        newFiles.map((file: File) => {
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

  const handleMouseEnter = () => {
    // Ajoutez une classe pour désactiver l'effet de survol du label
    if (fileLabelRef.current) {
      fileLabelRef.current.classList.add(styles['no-hover']);
    }
  };

  const handleMouseLeave = () => {
    // Retirez la classe pour réactiver l'effet de survol du label
    if (fileLabelRef.current) {
      fileLabelRef.current.classList.remove(styles['no-hover']);
    }
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
        className={styles.contactForm + ' ' + 'sectionContent column'}
        name='contactForm'
        id='contactForm'
        autoComplete='on'>
        <div className={styles.inputWrapper}>
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
              onChange={(e) => validateName(e.target.value)}
              className={`${styles.input} ${
                errors.name ? styles.errorOutline : ''
              }`}
              placeholder='Nom/Prénom'
              autoComplete='name'
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
              className={`${styles.input} ${
                errors.email ? styles.errorOutline : ''
              }`}
              onBlur={(e) => validateEmail(e.target.value)}
              onChange={(e) => validateEmail(e.target.value)}
              placeholder='E-mail'
              autoComplete='email'
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
              className={`${styles.input} ${
                errors.phone ? styles.errorOutline : ''
              }`}
              onBlur={(e) => validatePhone(e.target.value)}
              onChange={(e) => validatePhone(e.target.value)}
              placeholder='Téléphone'
              autoComplete='tel'
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
              className={`${styles.textArea} ${
                errors.message ? styles.errorOutline : ''
              }`}
              onBlur={(e) => validateMessage(e.target.value)}
              onChange={(e) => validateMessage(e.target.value)}
              autoComplete='off'
            />
            <p className={styles.error + ' ' + 'textFooter'}>
              {errors.message ? errors.message : ''}
            </p>
          </div>

          <div
            className={
              styles.formGroup +
              ' ' +
              styles.buttonPhotosWrapper +
              ' ' +
              'sectionContent column'
            }>
            <p
              className={
                styles.label +
                ' ' +
                styles.labelPhotos +
                ' ' +
                'primaryColor textBold'
              }>
              Pieces jointes
            </p>
            <label
              htmlFor='photos'
              className={
                styles.buttonPhotos +
                ' ' +
                'textFooter' +
                ' ' +
                (images.length > 0 ? styles.justifyContentNone : '')
              }
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              ref={fileLabelRef}>
              {images.length === 0 ? (
                <div className={styles.labelPhotosTextWrapper}>
                  <p>Cliquez ou glissez-déposez vos photos ici</p>
                  <p>Types de fichiers autorisé:</p>
                  <p>JPG PNG GIF WEBP</p>
                  <p>Taille maximale d&apos;une fichier: 32MB</p>
                  <p>Nombre de fichiers autorisé: 9</p>
                </div>
              ) : (
                <div className={styles.labelPhotosImagesWrapper}>
                  {images.map((image, index) => (
                    <button
                      key={index + image.file.name}
                      className={styles.buttonDeleteWrapper}
                      onClick={(event) => handleRemoveImage(event, index)}>
                      <div
                        className={styles.imagePreviewCard}
                        onMouseEnter={() => handleMouseEnter()}
                        onMouseLeave={() => handleMouseLeave()}>
                        <div className={styles.imagePreviewContent}>
                          <p className={styles.imagePreviewName}>
                            {image.file.name}
                          </p>
                          <Image
                            src={image.preview}
                            alt='Preview'
                            width={25}
                            height={25}
                            className={styles.imagePreview}
                          />
                          <Image
                            src='/assets/delete.svg'
                            alt='Supprimer'
                            width={20}
                            height={20}
                          />
                          Supprimer
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              <p className={styles.addPhotosText}>Ajouter des photos</p>
            </label>
            <input
              type='file'
              id='photos'
              name='photos'
              multiple
              className={styles.visuallyHidden}
              onChange={handleFileChange}
              accept='.png, .jpg, .jpeg, .gif, .webp'
            />
            <p className={styles.error + ' ' + 'textFooter'} />
          </div>
          <div className={styles.formGroup + ' ' + 'sectionContent column'}>
            <div className={styles.checkbox + ' ' + 'textFooter'}>
              <input
                type='checkbox'
                id='consentCheckbox'
                onChange={(e) => validateCheckbox(e.target.checked)}
              />
              <label htmlFor='consentCheckbox'>
                En soumettant ce formulaire, j&apos;accepte que les informations
                saisies soient exploitées dans le cadre de la demande de contact
                et de la relation commerciale qui peut en découler.
              </label>
            </div>
            <p className={styles.error + ' ' + 'textFooter'}>
              {errors.checkbox ? errors.checkbox : ''}
            </p>
          </div>
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
        <Button
          text='Envoyer'
          type='submit'
          disabled={status === 'loading'}
        />
      </form>
    </>
  );
};

export default MailForm;
