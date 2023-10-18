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
import PreHeader from '@/components/PreHeader/PreHeader';
import Footer from '@/components/sections/Footer/Footer';
import SectionServices from '@/components/container/SectionServices/SectionServices';

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
      <PreHeader />
      <Header />
      <Main>
        <SectionHome
          id='home'
          ref={homeRef}
        />
        <SectionServices
          id='services'
          ref={servicesRef}
        />
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

          <Reviews />
        </Section>
        <SectionContact
          id='contact'
          ref={contactRef}
        />
      </Main>
      <Footer />
    </QueryClientProvider>
  );
}
