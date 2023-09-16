'use client';

import React, { useEffect } from 'react';
import styles from './page.module.css';
import { useInView } from 'react-intersection-observer';
import { useActiveLink } from '@/contexts/ActiveLinkContext';

import SectionHeader from './components/SectionHeader/SectionHeader';
import Card from './components/Card/Card';

export default function Home() {
  const { setActiveLink } = useActiveLink();
  const [homeRef, homeInView] = useInView({
    threshold: 0.1,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.1,
  });
  const [galleryRef, galleryInView] = useInView({
    threshold: 0.1,
  });
  const [informationsRef, informationsInView] = useInView({
    threshold: 0.1,
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (homeInView) {
      setActiveLink('home');
    }
    if (servicesInView) {
      setActiveLink('services');
    }
    if (galleryInView) {
      setActiveLink('gallery');
    }
    if (informationsInView) {
      setActiveLink('informations');
    }
    if (contactInView) {
      setActiveLink('contact');
    }
  }, [
    homeInView,
    servicesInView,
    galleryInView,
    informationsInView,
    contactInView,
    setActiveLink,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main id='main'>
      <section
        id='home'
        ref={homeRef}
        className={styles.section}>
        home
      </section>
      <section
        id='services'
        ref={servicesRef}
        className={styles.section}>
        <SectionHeader text='Nos services' />
        <section className={styles.sectionContent}>
          <Card
            cardData={{
              title: 'Carrosserie',
              text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
              icon: 'portiere',
            }}
          />
          <Card
            cardData={{
              title: 'Peinture',
              text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
              icon: 'peinture',
            }}
          />
          <Card
            cardData={{
              title: 'Remplacement pare-brise',
              text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
              icon: 'windshield',
            }}
          />
          <Card
            cardData={{
              title: 'Franchise prise en charge*',
              text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
              icon: 'franchise',
            }}
          />
          <Card
            cardData={{
              title: 'Prêt de véhicule offert*',
              text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
              icon: 'cars',
            }}
          />
        </section>
      </section>
      <section
        id='gallery'
        ref={galleryRef}
        className={styles.section}>
        <SectionHeader text='Gallerie photos' />
      </section>
      <section
        id='informations'
        ref={informationsRef}
        className={styles.section}>
        <SectionHeader text='Informations' />
      </section>
      <section
        id='contact'
        ref={contactRef}
        className={styles.section}>
        <SectionHeader text='Nous contacter' />
      </section>
    </main>
  );
}
