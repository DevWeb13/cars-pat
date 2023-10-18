import React, { ForwardRefRenderFunction } from 'react';
import styles from './sectionServices.module.css';
import SectionContentWrap from '@/components/layout/SectionContentWrap/SectionContentWrap';
import SectionContentColumn from '@/components/layout/SectionContentColumn/SectionContentColumn';
import Section from '@/components/layout/Section/Section';
import NewCard from '@/components/NewCard/NewCard';
import SectionHeader from '../SectionHeader/SectionHeader';

interface SectionServicesProps {
  id: string;
  ref: React.RefObject<HTMLElement>;
}

const SectionServices: ForwardRefRenderFunction<
  HTMLElement,
  SectionServicesProps
> = ({ id }, ref) => {
  const services = [
    {
      type: 'carrosserie',
      text: 'Carrosserie',
      id: 'carrosserie',
    },
    {
      type: 'peinture',
      text: 'Peinture',
      id: 'peinture',
    },
    {
      type: 'pareBrise',
      text: 'Remplacement pare-brise',
      id: 'pareBrise',
    },
    {
      type: 'franchise',
      text: 'Franchise prise en charge*',
      id: 'franchise',
    },
    {
      type: 'pret',
      text: 'Prêt de véhicule offert*',
      id: 'pret',
    },
  ];
  return (
    <Section
      id={id}
      ref={ref}>
      <SectionHeader text='Nos services' />

      <SectionContentWrap services>
        {services.map((service) => (
          <NewCard
            key={service.id}
            type={service.type}
            text={service.text}
            id={service.id}
          />
        ))}

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
    </Section>
  );
};

export default React.forwardRef(SectionServices);
