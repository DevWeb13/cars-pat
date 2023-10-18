import React, { useState, useEffect, useRef } from 'react';
import styles from './gallery.module.css';
import ImageGallery from 'react-image-gallery';
import { useQuery } from '@tanstack/react-query';

import RadioButtons from '../RadioButtons/RadioButtons';
import Loader from '../Loader/Loader';
interface ExtendedReactImageGallery extends ImageGallery {
  imageGallery: {
    current: {
      clientHeight: number;
      // Et toute autre propriété nécessaire...
    };
  };
}

const Gallery = () => {
  const [vehicleActive, setVehicleActive] = useState('divers');
  const [galleryWrapperHeight, setGalleryWrapperHeight] = useState(0);

  const galleryWrapperRef = useRef<ExtendedReactImageGallery>(null);

  const fetchPhotos = async (vehicleName: string) => {
    try {
      const res = await fetch(`/api/photos/${vehicleName}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data: string[] = await res.json();
      return data;
    } catch (error) {
      console.error('An error occurred while fetching data: ', error);
    }
  };

  const { status, data } = useQuery(
    ['photos', vehicleActive], // Include vehicleActive in the query key
    () => fetchPhotos(vehicleActive)
  );

  useEffect(() => {
    const handleResize = () => {
      if (galleryWrapperRef.current && status === 'success') {
        // Hauteur de l'element
        console.log(
          galleryWrapperRef.current.imageGallery.current.clientHeight
        );
        setGalleryWrapperHeight(
          galleryWrapperRef.current.imageGallery.current.clientHeight
        );
      }
    };

    // Appellez la fonction lorsque le composant est monté
    handleResize();

    // Ajoutez un écouteur d'événement pour le resize
    window.addEventListener('resize', handleResize);

    // Supprimez l'écouteur d'événement lors du nettoyage pour éviter les fuites de mémoire
    return () => window.removeEventListener('resize', handleResize);
  }, [status]);

  console.log({ galleryWrapperHeight });
  return (
    <div className={styles.gallery}>
      <RadioButtons
        vehicleActive={vehicleActive}
        setVehicleActive={setVehicleActive}
      />

      <div
        className={styles.galleryWrapper}
        style={{ height: galleryWrapperHeight, minHeight: '300px' }}>
        {status === 'error' ? (
          <p className={styles.error}>
            Erreur lors de l&apos;affichage de la gallerie
          </p>
        ) : status === 'loading' ? (
          <Loader />
        ) : (
          <ImageGallery
            ref={galleryWrapperRef}
            items={
              data?.map((photo) => ({
                original: `assets/photosWebp750*500/${vehicleActive}/${photo}`,
                thumbnail: `assets/photosWebp750*500/${vehicleActive}/${photo}`,
                originalAlt: vehicleActive,
                thumbnailAlt: vehicleActive,
                originalHeight: 341,
                originalWidth: 512,
                thumbnailHeight: 61,
                thumbnailWidth: 92,
              })) ?? []
            }
            showBullets={false}
            autoPlay={true}
            slideInterval={5000}
            slideDuration={500}
            lazyLoad={true}
          />
        )}
      </div>
      <iframe
        src='/tiktok'
        width='780'
        height='550'
        className={styles.tiktok}
        title='tiktok'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  );
};

export default Gallery;
