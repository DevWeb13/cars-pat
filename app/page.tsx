'use client';

import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './page.module.css';
import { useInView } from 'react-intersection-observer';
import { useActiveLink } from '@/contexts/ActiveLinkContext';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import Header from '@/components/Header/Header';
import Main from '@/components/layout/Main/Main';

import SectionHome from '@/components/container/SectionHome/SectionHome';

import Loader from '@/components/Loader/Loader';
import Button from '@/components/ui/Button/Button';
import Section from '@/components/layout/Section/Section';
import SectionContentColumn from '@/components/layout/SectionContentColumn/SectionContentColumn';
import SectionHeader from '@/components/container/SectionHeader/SectionHeader';
import Card from '@/components/Card/Card';
import Gallery from '@/components/Gallery/Gallery';
import GalleryFooter from '@/components/GalleryFooter/GalleryFooter';
import Reviews from '@/components/Reviews/Reviews';
import MailForm from '@/components/MailForm/MailForm';
import HomeAside from '@/components/HomeAside/HomeAside';
import HomeImageWrapper from '@/components/HomeImageWrapper/HomeImageWrapper';
import NewCard from '@/components/NewCard/NewCard';
import InfosContacts from '@/components/sections/InfosContacts/InfosContacts';
import SectionContentWrap from '@/components/layout/SectionContentWrap/SectionContentWrap';
import SectionContact from '@/components/container/SectionContact/SectionContact';

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
      <Header />
      <Main>
        <SectionHome
          id='home'
          ref={homeRef}
        />
        <Section
          id='services'
          ref={servicesRef}>
          <SectionHeader text='Nos services' />
          {/* <section className={styles.newServices}>
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
            <article
              className={styles.newService}
              id='pareBrise'>
              <div className={styles.newServicePhoto}>
                <Image
                  src='/assets/photos/pareBrise.jpg'
                  alt='peinture'
                  width={1000}
                  height={667}
                  className={styles.newServiceImage}
                />
              </div>
              <div className={styles.newServiceContent}>
                <h2 className={'titre' + ' ' + styles.newSectionTitle}>
                  Remplacement pare-brise
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
          </section> */}
          <SectionContentColumn>
            <SectionContentWrap>
              <NewCard
                type='carrosserie'
                text='Carrosserie'
                id='carrosserie'
              />
              <NewCard
                type='peinture'
                text='Peinture'
                id='peinture'
              />
              <NewCard
                type='pareBrise'
                text='Remplacement pare-brise'
                id='pareBrise'
              />
              <NewCard
                type='franchise'
                text='Franchise prise en charge*'
                id='franchise'
              />
              <NewCard
                type='pret'
                text='Prêt de véhicule offert*'
                id='pret'
              />
              {/* <Card
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
            /> */}
            </SectionContentWrap>
          </SectionContentColumn>
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
          <SectionContentColumn>
            <Reviews />
          </SectionContentColumn>
        </Section>
        <SectionContact
          id='contact'
          ref={contactRef}
        />
      </Main>
    </QueryClientProvider>
  );
}
