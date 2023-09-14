'use client';

import React, { useEffect } from 'react';
import styles from './page.module.css';
import { useInView } from 'react-intersection-observer';
import { useActiveLink } from '@/contexts/ActiveLinkContext';

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
        services
      </section>
      <section
        id='gallery'
        ref={galleryRef}
        className={styles.section}>
        gallery
      </section>
      <section
        id='informations'
        ref={informationsRef}
        className={styles.section}>
        informations
      </section>
      <section
        id='contact'
        ref={contactRef}
        className={styles.section}>
        contact
      </section>
    </main>
  );
}
