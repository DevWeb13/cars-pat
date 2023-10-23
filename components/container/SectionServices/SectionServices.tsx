import React, { ForwardRefRenderFunction, useState } from 'react';
import styles from './sectionServices.module.css';
import SectionContentWrap from '@/components/layout/SectionContentWrap/SectionContentWrap';
import { Link } from 'react-scroll';

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
  const [services, setServices] = useState([
    {
      type: 'carrosserie',
      title: 'Carrosserie',
      id: 'carrosserie',
      isOpen: false,
      text: (
        <>
          <p>
            Depuis sa fondation en 2001 à Marseille,{' '}
            <span className='span sousTitre'>Cars Pat</span> est devenue une
            figure emblématique de la carrosserie automobile dans le quartier de
            Mazargues. Nos 22 années d&apos;expertise nous permettent de
            restaurer, réparer et personnaliser la carrosserie de votre
            véhicule, garantissant à chaque fois une finition d&apos;exception.
          </p>
          <p>
            Pour une consultation ou un devis, n&apos;hésitez pas à nous
            contacter.
          </p>
        </>
      ),
    },

    {
      type: 'peinture',
      title: 'Peinture',
      id: 'peinture',
      isOpen: false,
      text: (
        <>
          <p>
            La peinture n&apos;est pas seulement une affaire de couleur chez{' '}
            <span className='span sousTitre'>Cars Pat</span>. C&apos;est une
            combinaison de technique, de précision et de passion. Nous offrons
            des prestations qui garantissent une finition impeccable et une
            tenue durable, que vous cherchiez une retouche subtile ou une
            transformation radicale.
          </p>
          <p>
            Des questions sur nos techniques ou nos tarifs ? Contactez-nous dès
            maintenant.
          </p>
        </>
      ),
    },
    {
      type: 'pareBrise',
      title: 'Remplacement pare-brise',
      id: 'pareBrise',
      isOpen: false,
      text: (
        <>
          <p>
            La sécurité est primordiale pour nous. Si votre pare-brise est
            endommagé, <span className='span sousTitre'>Cars Pat</span> se
            charge de le remplacer rapidement et efficacement. Nous nous
            assurons que chaque remplacement répond aux normes de sécurité les
            plus strictes pour que vous puissiez reprendre la route en toute
            confiance.
          </p>
          <p>
            Besoin d&apos;un remplacement urgent ou d&apos;une estimation ?
            Cliquez pour nous joindre.
          </p>
        </>
      ),
    },
    {
      type: 'franchise',
      title: 'Franchise prise en charge*',
      id: 'franchise',
      isOpen: false,
      text: (
        <>
          <p>
            Les réparations automobiles peuvent être coûteuses. Chez{' '}
            <span className='span sousTitre'>Cars Pat</span>, nous souhaitons
            faciliter les choses pour nos clients. C&apos;est pourquoi nous
            offrons de prendre en charge votre franchise*, vous permettant ainsi
            de bénéficier de services de qualité sans vous soucier des coûts
            imprévus.
          </p>
          <p>Pour en savoir plus sur cette offre, contactez-nous.</p>
        </>
      ),
      conditions: (
        <p>
          *Certaines conditions s&apos;appliquent. N&apos;hésitez pas à nous
          contacter pour plus de détails.
        </p>
      ),
    },
    {
      type: 'pret',
      title: 'Prêt de véhicule offert*',
      id: 'pret',
      isOpen: false,
      text: (
        <>
          <p>
            La réparation de votre véhicule ne devrait pas perturber votre
            quotidien. C&apos;est dans cet esprit que{' '}
            <span className='span sousTitre'>Cars Pat</span> propose un service
            de prêt de véhicule*. Tandis que nous prenons soin de votre voiture,
            vous pouvez continuer à vaquer à vos occupations sans interruption.
          </p>
          <p>
            Intéressé par ce service ou d&apos;autres questions ? Nous sommes là
            pour vous répondre.
          </p>
        </>
      ),
      conditions: (
        <p>
          *Certaines conditions s&apos;appliquent. N&apos;hésitez pas à nous
          contacter pour plus de détails.
        </p>
      ),
    },
  ]);

  const onCardClick = (clickedServiceId: string) => {
    setServices((prevServices) =>
      prevServices.map((service) => {
        // Si le service actuellement itéré est celui qui a été cliqué
        if (service.id === clickedServiceId) {
          // Si le service était déjà ouvert, fermez-le. Sinon, ouvrez-le.
          return { ...service, isOpen: !service.isOpen };
        }
        // Fermez tous les autres services
        return { ...service, isOpen: false };
      })
    );
  };

  console.log({ services });
  return (
    <Section
      id={id}
      ref={ref}>
      <SectionHeader text='Nos services' />

      <SectionContentWrap services>
        {services.map((service) => (
          <NewCard
            key={service.id}
            service={service}
            onCardClick={onCardClick} // Pass down the handler
          />
        ))}
      </SectionContentWrap>
    </Section>
  );
};

export default React.forwardRef(SectionServices);

{
  /* <section className={styles.newServices}>
            <article
              className={styles.newService}
              id='carrosserie'>
              <div className={styles.newServiceContent}>
                <h2 className={'title' + ' ' + styles.newSectionTitle}>
                  Carrosserie
                </h2>
                <p className='sousTitre'>
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
                <h2 className={'title' + ' ' + styles.newSectionTitle}>
                  Peinture
                </h2>
                <p className='sousTitre'>
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
                <h2 className={'title' + ' ' + styles.newSectionTitle}>
                  Remplacement pare-brise
                </h2>
                <p className='sousTitre'>
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
          </section> */
}
{
  /* <Card
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
            /> */
}
