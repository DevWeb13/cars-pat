import React, { useEffect, useState, useRef } from 'react';
import styles from './gallery.module.css';
import ImageGallery from 'react-image-gallery';
import { useQuery } from '@tanstack/react-query';

import RadioButtons from '../RadioButtons/RadioButtons';

const Gallery = () => {
  const [vehicleActive, setVehicleActive] = useState('peugeot504');

  const [galleryHeight, setGalleryHeight] = useState(0);

  const imageGalleryRef = useRef<ImageGallery>(null);

  const fetchPhotos = async (vehicleName: string) => {
    try {
      const res = await fetch(`/photos/${vehicleName}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data: string[] = await res.json();
      return data;
    } catch (error) {
      console.error('An error occurred while fetching data: ', error);
    }
  };

  const { isLoading, error, data, isFetching, isPreviousData } = useQuery(
    ['photos', vehicleActive], // Include vehicleActive in the query key
    () => fetchPhotos(vehicleActive)
  );

  return (
    <div className={styles.gallery}>
      <RadioButtons
        vehicleActive={vehicleActive}
        setVehicleActive={setVehicleActive}
      />

      {isLoading ? (
        <div
          className={styles.spinner}
          style={{ minHeight: galleryHeight }}>
          Loading...
        </div>
      ) : (
        <ImageGallery
          ref={imageGalleryRef}
          items={
            data?.map((photo) => {
              return {
                original: `assets/photos/${vehicleActive}/${photo}`,
                thumbnail: `assets/photos/${vehicleActive}/${photo}`,
                originalAlt: vehicleActive,
                thumbnailAlt: vehicleActive,
                originalHeight: 500,
                originalWidth: 750,
                thumbnailHeight: 70,
                thumbnailWidth: 150,
              };
            }) || []
          }
          showBullets={true}
          autoPlay={true}
          slideInterval={5000}
          slideDuration={1000}
          lazyLoad={true}
        />
      )}
    </div>
  );
};

export default Gallery;
