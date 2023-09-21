import React, { useEffect, useState, useRef } from 'react';
import styles from './gallery.module.css';
import ImageGallery from 'react-image-gallery';
import { useQuery } from '@tanstack/react-query';

import RadioButtons from '../RadioButtons/RadioButtons';

const Gallery = () => {
  const [vehicleActive, setVehicleActive] = useState('peugeot504');

  const [galleryWidth, setGalleryWidth] = useState(0);

  const galleryRef = useRef<HTMLDivElement>(null);

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

  const { status, data } = useQuery(
    ['photos', vehicleActive], // Include vehicleActive in the query key
    () => fetchPhotos(vehicleActive)
  );

  useEffect(() => {
    if (galleryRef.current) {
      setGalleryWidth(galleryRef.current.offsetWidth * 0.8);
    }
  }, [galleryRef]);

  return (
    <div
      className={styles.gallery}
      ref={galleryRef}>
      <RadioButtons
        vehicleActive={vehicleActive}
        setVehicleActive={setVehicleActive}
      />

      {status === 'error' && <p>error</p>}

      <ImageGallery
        items={
          data?.map((photo) => {
            return {
              original: `assets/photos/${vehicleActive}/${photo}`,
              thumbnail: `assets/photos/${vehicleActive}/${photo}`,
              originalAlt: vehicleActive,
              thumbnailAlt: vehicleActive,
              originalHeight: galleryWidth || 500,
              originalWidth: galleryWidth || 750,
              thumbnailHeight: 70,
              thumbnailWidth: 150,
            };
          }) || [
            {
              original: 'assets/photos/Harley-removebg-preview.png',
              thumbnail: 'assets/photos/Harley-removebg-preview.png',
              originalAlt: 'harley',
              thumbnailAlt: 'harley',
              originalHeight: galleryWidth || 500,
              originalWidth: galleryWidth || 750,
              thumbnailHeight: 70,
              thumbnailWidth: 90,
            },
          ]
        }
        showBullets={false}
        autoPlay={true}
        slideInterval={5000}
        slideDuration={500}
        lazyLoad={true}
      />
    </div>
  );
};

export default Gallery;
