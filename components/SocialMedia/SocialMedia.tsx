import React from 'react';
import styles from './socialMedia.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SectionContentWrap from '../layout/SectionContentWrap/SectionContentWrap';
import Button from '@/components/ui/Button/Button';

interface SocialMediaProps {
  // props here
}

const SocialMedia: React.FC<SocialMediaProps> = () => {
  return (
    <SectionContentWrap>
      <Link
        href='https://www.facebook.com/profile.php?id=100057464648961'
        target='_blank'
        rel='noreferrer'
        className={styles.socialMediaLink}>
        <Button text='Facebook'>
          <Image
            src='assets/facebook.svg'
            alt='facebook'
            width={35}
            height={35}
          />
        </Button>
      </Link>
      <Link
        href='https://www.tiktok.com/@cars_pat'
        target='_blank'
        rel='noreferrer'
        className={styles.socialMediaLink}>
        <Button
          text='TikTok'
          color='white'
          animate>
          <Image
            src='assets/tiktok.svg'
            alt='instagram'
            width={35}
            height={35}
          />
        </Button>
      </Link>
    </SectionContentWrap>
  );
};

export default SocialMedia;
