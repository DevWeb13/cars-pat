import React, { ReactNode, useEffect } from 'react';
import styles from './newCard.module.css';
import Image from 'next/image';
import Button from '../ui/Button/Button';
import { Link } from 'react-scroll';

interface Service {
  type: string;
  title: string;
  id: string;
  isOpen: boolean;
  text: ReactNode;
  conditions?: ReactNode;
}

interface NewCardProps {
  service: Service;
  onCardClick: (id: string) => void; // Ajout de cette ligne
  hasScrolled: boolean;
  setHasScrolled: (hasScrolled: boolean) => void;
}

const NewCard = ({
  service,
  onCardClick,
  hasScrolled,
  setHasScrolled,
}: NewCardProps) => {
  const { id, type, title, isOpen, text, conditions } = service;

  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  return (
    <button
      className={styles.newCard + ' ' + (isOpen ? styles.open : '')}
      id={id}
      onClick={() => onCardClick(id)}
      ref={(el) => {
        if (el && isOpen && !hasScrolled) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setHasScrolled(true);
          }, 300);
        }
      }}>
      <div className={styles.newCardImageWrapper}>
        <Image
          src={`/assets/photosWebp750*500/${type}.webp`}
          alt={type}
          width={750}
          height={500}
          className={styles.newCardImage}
        />
      </div>
      <div
        className={
          styles.newCardTitleAndTextWrapper +
          ' ' +
          (isOpen ? styles.newCardTitleAndTextWrapperOpen : '')
        }>
        <div className={styles.newCardTitle}>
          <h2 className={'textBold' + ' ' + (isOpen ? styles.primary : '')}>
            {title}
          </h2>
          <div
            className={
              styles.newCardArrow + ' ' + (isOpen ? styles.reverse : '')
            }
          />
        </div>

        {isOpen && (
          <div
            className={
              styles.newCardTextWrapper +
              ' ' +
              (isVisible ? styles.isVisible : '')
            }>
            <p className={styles.newCardText + ' ' + 'text'}>{text}</p>

            {conditions && <p className='textFooter'>{conditions}</p>}

            <div className={styles.newCardButtonWrapper}>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className={styles.newCardButton}>
                <Button text='Nous contacter' />
              </Link>
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default NewCard;
