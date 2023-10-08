'use client';

import React, { useState, useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './page.module.css';
import { useInView } from 'react-intersection-observer';
import { useActiveLink } from '@/contexts/ActiveLinkContext';
import Image from 'next/image';
import Link from 'next/link';

import Main from '@/components/layout/Main/Main';

import Loader from '@/components/Loader/Loader';
import Button from '@/components/ui/Button/Button';
import Section from '@/components/layout/Section/Section';
import SectionContentColumn from '@/components/layout/SectionContentColumn/SectionContentColumn';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Card from '@/components/Card/Card';
import Gallery from '@/components/Gallery/Gallery';
import GalleryFooter from '@/components/GalleryFooter/GalleryFooter';
import Reviews from '@/components/Reviews/Reviews';
import MailForm from '@/components/MailForm/MailForm';
import HomeAside from '@/components/HomeAside/HomeAside';
import HomeImageWrapper from '@/components/HomeImageWrapper/HomeImageWrapper';
import NewCard from '@/components/NewCard/NewCard';
import InfosContacts from '@/components/sections/InfosContacts/InfosContacts';

const queryClient = new QueryClient();

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
  const [avisRef, avisInView] = useInView({
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
    if (avisInView) {
      setActiveLink('avis');
    }
    if (contactInView) {
      setActiveLink('contact');
    }
  }, [
    homeInView,
    servicesInView,
    galleryInView,
    contactInView,
    avisInView,
    setActiveLink,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Section
          id='home'
          ref={homeRef}>
          <SectionHeader manyWord={['Carrosserie', 'Peinture']} />

          {/* <p className={styles.homeText + ' ' + 'text'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quos, voluptatem, quas, quod quia nesciunt voluptatum
            officia quibusdam quae voluptas. Quisquam voluptatibus, quos,
            voluptatem, quas, quod quia nesciunt voluptatum officia quibusdam
            quae voluptas.
          </p> */}
          <div className={styles.homeImageAndAsideWrapper}>
            <HomeImageWrapper
              photos={[
                '/assets/photos/carrosserie.jpg',
                '/assets/photos/peinture.jpg',
              ]}
            />
            <HomeAside />
          </div>
        </Section>

        <Section
          id='services'
          ref={servicesRef}>
          <SectionHeader text='Nos services' />
          <section className={styles.newServices}>
            <article
              className={styles.newService}
              id='carrosserie'>
              <div className={styles.newServiceContent}>
                <h2 className={'titre' + ' ' + styles.newSectionTitle}>
                  Carrosserie
                </h2>
                <p className='text'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima omnis est, optio magnam dicta corrupti harum
                  praesentium consectetur in amet nostrum cum dolorum vitae
                  doloremque id ducimus adipisci voluptatibu debitis perferendis
                  reprehenderit pariatur rem quo voluptate illo? Delectus
                  blanditiis dicta veritatis quas recusandae odio at fugiat vel
                  velit distinctio sunt sint est officiis quaerat ullam, ipsa
                  omnis praesentium consectetur in amet nostrum cum dolorum
                  vitae doloremque id ducimus adipisci voluptatibu debitis
                  perferendis reprehenderit pariatur rem quo voluptate illo?
                  Delectus blanditiis dicta veritatis quas recusandae odio at
                  fugiat vel velit distinctio sunt sint est officiis quaerat
                  ullam, ipsa omnis
                </p>
              </div>
              <div className={styles.newServicePhoto}>
                <Image
                  src='/assets/photos/carrosserie.jpg'
                  alt='peinture'
                  width={1000}
                  height={667}
                  className={styles.newServiceImage}
                />
              </div>
            </article>
            <article
              className={styles.newService}
              id='peinture'>
              <div className={styles.newServicePhoto}>
                <Image
                  src='/assets/photos/peinture.jpg'
                  alt='peinture'
                  width={1000}
                  height={667}
                  className={styles.newServiceImage}
                />
              </div>
              <div className={styles.newServiceContent}>
                <h2 className={'titre' + ' ' + styles.newSectionTitle}>
                  Peinture
                </h2>
                <p className='text'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima omnis est, optio magnam dicta corrupti harum
                  praesentium consectetur in amet nostrum cum dolorum vitae
                  doloremque id ducimus adipisci voluptatibu debitis perferendis
                  reprehenderit pariatur rem quo voluptate illo? Delectus
                  blanditiis dicta veritatis quas recusandae odio at fugiat vel
                  velit distinctio sunt sint est officiis quaerat ullam, ipsa
                  omnis praesentium consectetur in amet nostrum cum dolorum
                  vitae doloremque id ducimus adipisci voluptatibu debitis
                  perferendis reprehenderit pariatur rem quo voluptate illo?
                  Delectus blanditiis dicta veritatis quas recusandae odio at
                  fugiat vel velit distinctio sunt sint est officiis quaerat
                  ullam, ipsa omnis
                </p>
              </div>
            </article>
          </section>

          <section className='sectionContent wrap'>
            <NewCard type='carrosserie' />
            <Card
              cardData={{
                title: 'Carrosserie',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
                icon: 'portiere',
              }}
            />
            <Card
              cardData={{
                title: 'Peinture',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
                icon: 'peinture',
              }}
            />
            <Card
              cardData={{
                title: 'Remplacement pare-brise',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
                icon: 'windshield',
              }}
            />
            <Card
              cardData={{
                title: 'Franchise prise en charge*',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
                icon: 'franchise',
              }}
            />
            <Card
              cardData={{
                title: 'Prêt de véhicule offert*',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima omnis est, optio magnam dicta corrupti harum praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis praesentium consectetur in amet nostrum cum dolorum vitae doloremque id ducimus adipisci voluptatibu debitis perferendis reprehenderit pariatur rem quo voluptate illo? Delectus blanditiis dicta veritatis quas recusandae odio at fugiat vel velit distinctio sunt sint est officiis quaerat ullam, ipsa omnis',
                icon: 'cars',
              }}
            />
          </section>
        </Section>

        <Section
          id='gallery'
          ref={galleryRef}>
          <SectionHeader text='Gallerie photos' />
          <SectionContentColumn>
            <Gallery />
            <GalleryFooter />
          </SectionContentColumn>
        </Section>

        <Section
          id='avis'
          ref={avisRef}>
          <SectionHeader text='Avis Google' />
          <section className='sectionContent column'>
            <Reviews />
          </section>
        </Section>

        <Section
          id='contact'
          ref={contactRef}>
          <SectionHeader text='Nous contacter' />
          <SectionContentColumn>
            <MailForm />
          </SectionContentColumn>
        </Section>
        <InfosContacts />
      </Main>
    </QueryClientProvider>
  );
}
