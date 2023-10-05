import React, { FC, ReactElement } from 'react';
import styles from './infoContact.module.css';
import Image from 'next/image';

interface InfoContactProps {
  logo: string;
  alt: string;
  title: string;
  textLines: string[];
}

const InfoContact: FC<InfoContactProps> = ({
  logo,
  alt,
  title,
  textLines,
}): ReactElement => {
  return (
    <article className={styles.infoContact}>
      <div className={styles.infoContactTitleWrapper}>
        <Image
          src={logo}
          alt={alt}
          width={25}
          height={25}
        />
        <h2 className={`${styles.infoContactTitle} textBold`}>{title}</h2>
      </div>
      <p className='text'>
        {textLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </article>
  );
};

export default InfoContact;
