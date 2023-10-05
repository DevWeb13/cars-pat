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
import InfoContact from '@/components/InfoContact/InfoContact';
import Reviews from '@/components/Reviews/Reviews';
import MailForm from '@/components/MailForm/MailForm';
import HomeAside from '@/components/HomeAside/HomeAside';
import HomeImageWrapper from '@/components/HomeImageWrapper/HomeImageWrapper';
import NewCard from '@/components/NewCard/NewCard';

const queryClient = new QueryClient();

export default function Home() {
  const { setActiveLink } = useActiveLink();
  const infosContactsRef = useRef<HTMLDivElement>(null);
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
    if (informationsInView) {
      setActiveLink('informations');
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
    informationsInView,
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
            <p className='textBold'>Choisissez un véhicule:</p>
            <Gallery />
            <GalleryFooter />
          </SectionContentColumn>
        </Section>

        <Section
          id='informations'
          ref={informationsRef}>
          <SectionHeader text='Informations' />
          <SectionContentColumn>
            <div
              className={styles.infosContacts}
              ref={infosContactsRef}>
              <InfoContact
                logo='/assets/clock.svg'
                alt='clock'
                title='HORAIRES'
                textLines={[
                  'Lundi - Vendredi',
                  '08H00 - 12H00',
                  '14H00 - 18H30',
                ]}
              />
              <Link
                target='_blank'
                href='tel:+33491402801'
                className='link'>
                <InfoContact
                  logo='/assets/phone.svg'
                  alt='phone'
                  title='TÉLÉPHONE'
                  textLines={['04-91-40-28-01']}
                />
              </Link>
              <Link
                target='_blank'
                href='mailto:carrosse-pat@hotmail.fr'
                className='link'>
                <InfoContact
                  logo='/assets/mail.svg'
                  alt='mail'
                  title='E-MAIL'
                  textLines={['carrosse-pat@hotmail.fr']}
                />
              </Link>
              <Link
                target='_blank'
                href='https://www.google.fr/maps/place/Cars+Pat/@43.2483917,5.3983134,17z/data=!4m15!1m8!3m7!1s0x12c9b884f41a612d:0x5b0f382c309b6090!2s1+Rue+Denis+Magdelon,+13009+Marseille!3b1!8m2!3d43.2483917!4d5.4008883!16s%2Fg%2F11cs7q5f4j!3m5!1s0x12c9b884f41d09d5:0x967b25d3c34e14c3!8m2!3d43.2483415!4d5.4008017!16s%2Fg%2F1tf20zt9?entry=ttu'
                className='link'>
                <InfoContact
                  logo='/assets/position.svg'
                  alt='address'
                  title='ADRESSE'
                  textLines={['1 Rue Denis Magdelon', '13009 Marseille']}
                />
              </Link>
            </div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14137.182395999138!2d5.400888!3d43.248392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b884f41d09d5%3A0x967b25d3c34e14c3!2sCars%20Pat!5e1!3m2!1sfr!2sfr!4v1695283837705!5m2!1sfr!2sfr'
              width={280}
              height={269}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className={styles.map}></iframe>
            <iframe
              src='https://www.google.com/maps/embed?pb=!4v1695311394340!6m8!1m7!1sW9TDgMNjV8IejcCtJpTTzA!2m2!1d43.24829969231534!2d5.400771836629596!3f26.714348!4f0!5f0.7820865974627469'
              width={280}
              height={269}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className={styles.map}></iframe>
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
          <section className='sectionContent column'>
            {' '}
            <MailForm />
          </section>
        </Section>
      </Main>
    </QueryClientProvider>
  );
}
