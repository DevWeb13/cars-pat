'use client';

import React, { useEffect, useState } from 'react';
import { useActiveLink } from '../../../contexts/ActiveLinkContext';
import styles from './navigation.module.css';
import Modal from 'react-modal';
import { Link } from 'react-scroll';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2';

const customStyles = {
  overlay: {
    top: 60,
    overflow: 'auto',
  },

  content: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    border: '2px solid #ff8739',
    padding: 0,
    overflow: 'hidden',
    inset: '8%',
  },
};

Modal.setAppElement('#main');

const Navigation = () => {
  const { activeLink } = useActiveLink();
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      id: 'home',
      name: 'Accueil',
      icon: (
        <svg
          width='30px'
          height='100%'
          viewBox='0 0 61 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M4.25 58.7V22.9L30.5 3.8L56.75 22.9V58.7'
            stroke='currentColor'
            strokeWidth='2'
          />
          <path
            d='M18.575 37.225H42.45C43.7164 37.225 44.9309 37.7281 45.8264 38.6236C46.7219 39.5191 47.225 40.7336 47.225 42V51.55H13.8V42C13.8 40.7336 14.3031 39.5191 15.1986 38.6236C16.094 37.7281 17.3086 37.225 18.575 37.225Z'
            stroke='currentColor'
            strokeWidth='2'
          />
          <path
            d='M25.725 44.375H20.95'
            stroke='currentColor'
            strokeWidth='2'
          />
          <path
            d='M40.05 44.375H35.275'
            stroke='currentColor'
            strokeWidth='2'
          />
          <path
            d='M20.95 51.525H18.575V56.3H20.95V51.525Z'
            stroke='currentColor'
            strokeWidth='2'
          />
          <path
            d='M42.425 51.525H40.05V56.3H42.425V51.525Z'
            stroke='currentColor'
            strokeWidth='2'
          />
          <path
            d='M42.425 37.225H18.575L20.05 31.275C20.3072 30.2441 20.9026 29.3293 21.7411 28.6766C22.5795 28.024 23.6125 27.6714 24.675 27.675H36.325C37.3875 27.6714 38.4205 28.024 39.2589 28.6766C40.0974 29.3293 40.6928 30.2441 40.95 31.275L42.425 37.225Z'
            stroke='currentColor'
            strokeWidth='2'
          />
        </svg>
      ),
    },
    {
      id: 'services',
      name: 'Nos services',
      icon: (
        <svg
          fill='currentColor'
          fillOpacity={1}
          width='30px'
          height='100%'
          viewBox='0 0 1024 1024'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M92.16 194.56H256c11.311 0 20.48-9.169 20.48-20.48S267.311 153.6 256 153.6H92.16c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z' />
          <path d='M153.6 92.16V256c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V92.16c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm694.872 298.379h91.75c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48h-91.75c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z' />
          <path d='M873.867 324.184v91.75c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-91.75c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zM204.8 481.28h614.4c45.243 0 81.92 36.677 81.92 81.92v133.12c0 45.243-36.677 81.92-81.92 81.92H204.8c-45.243 0-81.92-36.677-81.92-81.92V563.2c0-45.243 36.677-81.92 81.92-81.92zm0 40.96c-22.622 0-40.96 18.338-40.96 40.96v133.12c0 22.622 18.338 40.96 40.96 40.96h614.4c22.622 0 40.96-18.338 40.96-40.96V563.2c0-22.622-18.338-40.96-40.96-40.96H204.8zm84.327 294.38v55.204c0 19.9-15.918 35.963-35.451 35.963h-5.437c-19.533 0-35.451-16.063-35.451-35.963v-55.439c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v55.439c0 42.439 34.173 76.923 76.411 76.923h5.437c42.238 0 76.411-34.484 76.411-76.923V816.62c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm523.335 0v55.204c0 19.9-15.918 35.963-35.451 35.963h-5.437c-19.533 0-35.451-16.063-35.451-35.963v-55.439c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v55.439c0 42.439 34.173 76.923 76.411 76.923h5.437c42.238 0 76.411-34.484 76.411-76.923V816.62c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z' />
          <path d='M340.125 626.349c0 28.273-22.927 51.2-51.2 51.2s-51.2-22.927-51.2-51.2c0-28.273 22.927-51.2 51.2-51.2s51.2 22.927 51.2 51.2zm447.227 0c0 28.273-22.927 51.2-51.2 51.2s-51.2-22.927-51.2-51.2c0-28.273 22.927-51.2 51.2-51.2s51.2 22.927 51.2 51.2zm-365.246 20.48h180.46c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48h-180.46c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm345.569-150.164H257.877v-163.84c0-56.556 45.844-102.4 102.4-102.4h304.998c56.556 0 102.4 45.844 102.4 102.4v163.84zM358.4 276.48c-33.932 0-61.44 27.508-61.44 61.44v139.284h430.08V337.92c0-33.932-27.508-61.44-61.44-61.44H358.4z' />
        </svg>
      ),
    },
    {
      id: 'gallery',
      name: 'Gallerie photos',
      icon: (
        <svg
          width='30px'
          height='100%'
          viewBox='0 0 60 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M30 40C34.1423 40 37.5 36.6423 37.5 32.5C37.5 28.3577 34.1423 25 30 25C25.8577 25 22.5 28.3577 22.5 32.5C22.5 36.6423 25.8577 40 30 40Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7.5 42V23C7.5 20.1997 7.5 18.7996 8.04497 17.7301C8.52432 16.7892 9.28923 16.0243 10.2301 15.545C11.2996 15 12.6997 15 15.5 15H18.1366C18.444 15 18.5976 15 18.7394 14.9838C19.4791 14.899 20.1426 14.489 20.5492 13.8652C20.6272 13.7457 20.6959 13.6082 20.8333 13.3333C21.1082 12.7836 21.2457 12.5087 21.4016 12.2696C22.2148 11.0221 23.5417 10.2019 25.0213 10.0325C25.3048 10 25.612 10 26.2267 10H33.7733C34.388 10 34.6952 10 34.9787 10.0325C36.4582 10.2019 37.7852 11.0221 38.5985 12.2696C38.7542 12.5086 38.8918 12.7836 39.1668 13.3333C39.304 13.6082 39.3728 13.7457 39.4508 13.8652C39.8575 14.489 40.5207 14.899 41.2605 14.9838C41.4025 15 41.556 15 41.8635 15H44.5C47.3002 15 48.7005 15 49.77 15.545C50.7108 16.0243 51.4757 16.7892 51.955 17.7301C52.5 18.7996 52.5 20.1997 52.5 23V42C52.5 44.8002 52.5 46.2005 51.955 47.27C51.4757 48.2108 50.7108 48.9757 49.77 49.455C48.7005 50 47.3002 50 44.5 50H15.5C12.6997 50 11.2996 50 10.2301 49.455C9.28923 48.9757 8.52432 48.2108 8.04497 47.27C7.5 46.2005 7.5 44.8002 7.5 42Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      id: 'informations',
      name: 'Informations',
      icon: (
        <svg
          width='30px'
          height='100%'
          viewBox='0 0 60 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M30 42.5V27.5'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M30 17.5C31.3807 17.5 32.5 18.6193 32.5 20C32.5 21.3807 31.3807 22.5 30 22.5C28.6193 22.5 27.5 21.3807 27.5 20C27.5 18.6193 28.6193 17.5 30 17.5Z'
            fill='currentColor'
          />
          <path
            d='M55 30C55 41.785 55 47.6777 51.3387 51.3387C47.6777 55 41.785 55 30 55C18.2149 55 12.3223 55 8.66117 51.3387C5 47.6777 5 41.785 5 30C5 18.2149 5 12.3223 8.66117 8.66117C12.3223 5 18.2149 5 30 5C41.785 5 47.6777 5 51.3387 8.66117C53.7732 11.0955 54.589 14.5164 54.8623 20'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
    {
      id: 'contact',
      name: 'Contact',
      nameTwo: 'Devis en ligne',
      icon: (
        <svg
          width='30px'
          height='100%'
          viewBox='0 0 56 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M30.8253 29.843C31.3398 29.7871 31.7116 29.3243 31.6557 28.8098C31.5998 28.2948 31.1384 27.9253 30.6221 27.9789C24.5347 28.6386 21.6403 26.3964 20.2853 24.3974C18.392 21.6037 18.3498 17.5708 20.1782 14.1233C21.9996 10.6897 25.1994 8.72081 28.9585 8.72081H28.9612C31.825 8.72081 34.3939 9.88903 35.8332 11.845C37.3347 13.8853 37.58 16.7212 36.5436 20.0468C36.1371 21.3518 34.8106 23.0639 33.6432 23.4012C33.1671 23.5403 32.7908 23.4892 32.4961 23.2451C32.1564 22.9627 32.0346 22.5242 32.0447 22.3507C32.0466 22.3397 32.0475 22.3296 32.0484 22.3186L33.0756 12.0473C33.1306 11.5323 32.7579 11.0704 32.2434 11.0159C31.7197 10.9587 31.2665 11.3336 31.2116 11.8486L31.1207 12.7004C31.1043 12.6882 31.0908 12.6735 31.0742 12.6616C29.873 11.7978 28.1898 11.7136 26.5698 12.4369C23.8113 13.6664 21.8196 17.5744 22.3071 20.7993C22.6728 23.2181 24.3781 24.7846 26.9868 25.0973C28.1843 25.2397 29.6542 24.8862 30.7446 24.0801C30.903 24.3076 31.0898 24.5145 31.2985 24.6879C32.0712 25.3288 33.0884 25.5124 34.1641 25.2024C36.0473 24.6577 37.763 22.4366 38.3342 20.6042C39.876 15.6548 38.6464 12.5046 37.3437 10.7339C35.552 8.29903 32.4182 6.84563 28.9611 6.84563H28.9584C24.4829 6.84563 20.6789 9.17794 18.5219 13.2443C16.3722 17.2973 16.4551 22.0878 18.7334 25.4492C20.7333 28.4 24.1926 29.9668 28.6082 29.9668C29.3229 29.967 30.0627 29.9258 30.8253 29.843ZM30.731 16.4026L30.1973 21.9727C29.6525 22.8676 28.2234 23.3551 27.209 23.2357C25.4269 23.0219 24.4016 22.1082 24.1612 20.5193C23.8005 18.1329 25.3418 15.037 27.3335 14.149C27.8151 13.9343 28.3022 13.8272 28.7498 13.8272C29.2213 13.8272 29.6498 13.9466 29.9793 14.1838C30.5699 14.6081 30.829 15.3754 30.731 16.4026Z'
            fill='currentColor'
          />
          <path
            d='M53.5991 20.3L46.7894 16.0829V1.875C46.7894 1.35731 46.37 0.9375 45.8519 0.9375H9.69728C9.17959 0.9375 8.75978 1.35731 8.75978 1.875V15.9524C5.50534 18.004 3.31665 19.5006 2.27556 20.3911C0.845494 21.6138 0.0581818 23.3565 0.0581818 25.2974V52.5083C0.058088 56.1223 2.99828 59.0625 6.61187 59.0625H49.3885C51.1545 59.0625 52.7565 58.3571 53.9361 57.2172C53.9383 57.2151 53.9412 57.2144 53.9432 57.2123C53.9443 57.2111 53.9445 57.2097 53.9455 57.2086C55.1743 56.0166 55.9418 54.3516 55.9418 52.5083V25.2974C55.9419 23.6618 55.3285 21.3716 53.5991 20.3ZM46.7894 18.2881L51.5325 21.2254L46.7894 25.3625V18.2881ZM53.11 22.3369C53.7629 23.0865 54.0669 24.2841 54.0669 25.2974V52.5083C54.0669 53.5158 53.7396 54.4441 53.1959 55.2086L35.1166 38.0311L53.11 22.3369ZM10.6348 2.8125H44.9144V26.9971L27.9981 41.7526L10.6347 26.6143L10.6348 2.8125ZM8.75978 18.1726V24.9811L4.35549 21.1416C5.34531 20.4068 6.83256 19.404 8.75978 18.1726ZM1.93309 52.5083V25.2974C1.93309 24.1793 2.28896 23.1969 2.9439 22.3988L21.5545 38.623L3.42006 55.9102C2.51021 55.056 1.93309 53.8518 1.93309 52.5083ZM6.61187 57.1875C6.07524 57.1875 5.56768 57.078 5.08721 56.9109L22.9737 39.8603L27.3819 43.7032C27.5586 43.8571 27.7784 43.934 27.998 43.934C28.2177 43.934 28.4379 43.8571 28.6142 43.7028L33.6975 39.269L51.8192 56.4868C51.1088 56.9228 50.2817 57.1875 49.3886 57.1875H6.61187Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
  ];

  console.log('isOpen', isOpen);

  useEffect(() => {
    // Définir une fonction pour mettre à jour le state
    const updateState = () => {
      if (window.matchMedia('(min-width: 992px)').matches) {
        setIsOpen(false);
      }
    };

    // Mettre à jour le state lors du premier rendu
    updateState();

    // Ajouter un écouteur d'événement pour les changements de taille de la fenêtre
    window.addEventListener('resize', updateState);

    // Supprimer l'écouteur d'événement lors du nettoyage
    return () => {
      window.removeEventListener('resize', updateState);
    };
  }, []);

  return (
    <>
      <UseAnimations
        animation={menu2}
        size={40}
        strokeColor='#ff8739'
        reverse={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        speed={1}
        className={styles.burger}
      />

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel='Modal Nav'>
        <div className={styles.lineUp}>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 1200 201'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1200 0.839966V47.5907L566.833 200.84H0L1200 0.839966Z'
              fill='#FF8739'
            />
            <path
              d='M1200 55V76.473L748.294 200.84H612.212L1200 55Z'
              fill='#FF8739'
            />
          </svg>
        </div>
        <nav
          className={styles.navMobile}
          id='navMobile'>
          {sections.map((section) => (
            <Link
              href='/'
              key={section.id}
              to={section.id}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={() => setIsOpen(false)}
              className={
                activeLink === section.id
                  ? styles.link + ' ' + styles.activeLink
                  : styles.link
              }>
              {section.icon}
              <div className={styles.linkTextWrapper}>
                <p className={styles.linkText}>{section.name}</p>
                {section.nameTwo && <p>{section.nameTwo}</p>}
              </div>
            </Link>
          ))}
        </nav>

        <div className={styles.lineBottom}>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 1200 201'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1200 0.839966V47.5907L566.833 200.84H0L1200 0.839966Z'
              fill='#FF8739'
            />
            <path
              d='M1200 55V76.473L748.294 200.84H612.212L1200 55Z'
              fill='#FF8739'
            />
          </svg>
        </div>
      </Modal>

      <nav
        className={styles.navDesktop}
        id='navDesktop'>
        {sections.map((section) => (
          <Link
            href={`/#${section.id}`}
            key={section.id}
            to={section.id}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={() => setIsOpen(false)}
            className={
              activeLink === section.id
                ? styles.link + ' ' + styles.activeLink
                : styles.link
            }>
            <div className={styles.linkTextWrapper}>
              <p className={styles.linkText}>{section.name}</p>
              {section.nameTwo && <p>{section.nameTwo}</p>}
            </div>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
