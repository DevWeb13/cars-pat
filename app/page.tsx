'use client';

import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useActiveLink } from '@/contexts/ActiveLinkContext';

import Header from '@/components/container/Header/Header';
import Main from '@/components/layout/Main/Main';

import SectionHome from '@/components/container/SectionHome/SectionHome';

import Section from '@/components/layout/Section/Section';
import SectionContentColumn from '@/components/layout/SectionContentColumn/SectionContentColumn';
import SectionHeader from '@/components/container/SectionHeader/SectionHeader';

import Gallery from '@/components/Gallery/Gallery';
import GalleryFooter from '@/components/GalleryFooter/GalleryFooter';
import Reviews from '@/components/Reviews/Reviews';

import SectionContact from '@/components/container/SectionContact/SectionContact';
import PreHeader from '@/components/PreHeader/PreHeader';
import Footer from '@/components/container/Footer/Footer';
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
    const updateURL = (sectionId: string) => {
      const currentURL = window.location.pathname;
      const newURL = `${currentURL}#${sectionId}`;
      window.history.pushState({}, '', newURL);
    };
    if (homeInView) {
      setActiveLink('home');
      updateURL('accueil'); // Change l'URL pour la section home
    }
    if (servicesInView) {
      setActiveLink('services');
      updateURL('services');
    }
    if (galleryInView) {
      setActiveLink('gallery');
      updateURL('gallery');
    }
    if (avisInView) {
      setActiveLink('avis');
      updateURL('avis');
    }
    if (contactInView) {
      setActiveLink('contact');
      updateURL('contact');
    }
  }, [
    homeInView,
    servicesInView,
    galleryInView,
    contactInView,
    avisInView,
    setActiveLink,
  ]);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);

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
          <SectionHeader text='Galerie photos' />
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
