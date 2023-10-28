import React, { ForwardRefRenderFunction, useState } from 'react';
import SectionContentWrap from '@/components/layout/SectionContentWrap/SectionContentWrap';

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
            Depuis sa fondation en 1997 à Marseille,{' '}
            <span className='span sousTitre'>Cars Pat</span> est devenue une
            figure emblématique de la carrosserie automobile dans le quartier de
            Mazargues.
            <br />
            Nos années d&apos;expertise nous permettent de restaurer, réparer et
            personnaliser la carrosserie de votre véhicule, garantissant à
            chaque fois une finition d&apos;exception.
          </p>
          <br />
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
            <span className='span sousTitre'>Cars Pat</span>.
            <br />
            C&apos;est une combinaison de technique, de précision et de passion.{' '}
            <br />
            Nous offrons des prestations qui garantissent une finition
            impeccable et une tenue durable, que vous cherchiez une retouche
            subtile ou une transformation radicale.
          </p>
          <br />
          <p className='text'>
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
            charge de le remplacer rapidement et efficacement. <br /> Nous nous
            assurons que chaque remplacement répond aux normes de sécurité les
            plus strictes pour que vous puissiez reprendre la route en toute
            confiance.
          </p>
          <br />
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
            faciliter les choses pour nos clients.
            <br />
            C&apos;est pourquoi nous offrons de prendre en charge votre
            franchise*, vous permettant ainsi de bénéficier de services de
            qualité sans vous soucier des coûts imprévus.
          </p>
          <br />
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
            de prêt de véhicule*.
            <br />
            Tandis que nous prenons soin de votre voiture, vous pouvez continuer
            à vaquer à vos occupations sans interruption.
          </p>
          <br />
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
  const [hasScrolled, setHasScrolled] = useState(false);

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
    setHasScrolled(false);
  };

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
            hasScrolled={hasScrolled}
            setHasScrolled={setHasScrolled}
          />
        ))}
      </SectionContentWrap>
    </Section>
  );
};

export default React.forwardRef(SectionServices);
