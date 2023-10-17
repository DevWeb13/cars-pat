import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

const TiktokEmbed: React.FC = () => {
  return (
    <>
      <blockquote
        className='tiktok-embed'
        data-unique-id='cars_pat'
        data-embed-type='creator'
        style={{ maxWidth: 780, minWidth: 288 }}
        cite={`https://www.tiktok.com/@cars_pat`}>
        <section>
          <Link
            target='_blank'
            href='https://www.tiktok.com/@cars_pat?refer=creator_embed'>
            @cars_pat
          </Link>
        </section>
      </blockquote>
      <Script
        src='https://www.tiktok.com/embed.js'
        strategy='lazyOnload'
      />
    </>
  );
};

export default TiktokEmbed;
