import React, { useState, useEffect } from 'react';
import styles from './gallery.module.css';
import ImageGallery from 'react-image-gallery';
import { useQuery } from '@tanstack/react-query';

import RadioButtons from '../RadioButtons/RadioButtons';
import Loader from '../Loader/Loader';

const Gallery = () => {
  const [vehicleActive, setVehicleActive] = useState('peugeot504');

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

  console.log({ data });
  return (
    <div className={styles.gallery}>
      <RadioButtons
        vehicleActive={vehicleActive}
        setVehicleActive={setVehicleActive}
      />

      {status === 'error' && <p className={styles.error}>error</p>}
      <div className={styles.galleryWrapper}>
        {status === 'loading' ? (
          <Loader />
        ) : (
          <ImageGallery
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
      />
    </div>
  );
};

export default Gallery;
