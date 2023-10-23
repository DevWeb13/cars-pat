import React from 'react';
import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/container/SectionHeader/SectionHeader';
import SectionContentColumn from '@/components/layout/SectionContentColumn/SectionContentColumn';

export default function legalNoticePage() {
  return (
    <Section>
      <SectionHeader text='Mentions légales' />
      <SectionContentColumn>
        <p className='text'>
          <strong className='textBold'>Propriétaire du site</strong> : Cars Pat
          <br />
          Adresse : 1 Rue Denis Magdelon, 13009 Marseille
          <br />
          Email : carrosse-pat@hotmail.fr
        </p>
        <p className='text'>
          <strong className='textBold'>
            Design, développement et maintenance
          </strong>{' '}
          : LaReponseDev
          <br />
          Représenté par Giuliano Loic, auto-entrepreneur
          <br />
          Adresse : 1 Rue Denis Magdelon, 13009 Marseille
          <br />
          Email : contact@lareponsedev.com
          <br />
          Téléphone : 0678708676
          <br />
          SIRET : 95258866300015
        </p>

        <p className='text'>
          <strong className='textBold'>Responsable publication</strong> :
          Giuliano Loic
        </p>

        <p className='text'>
          <strong className='textBold'>Hébergeur</strong> : Vercel
          <br />
          Adresse : Vercel, Inc., 340 S Lemon Ave #4133, Walnut, CA 91789
        </p>

        <h2 className='sousTitre'>
          2. Conditions générales d&apos;utilisation du site et des services
          proposés.
        </h2>
        <p className='text'>
          L&apos;utilisation du site Cars-Pat implique l&apos;acceptation pleine
          et entière des conditions générales d&apos;utilisation ci-après
          décrites. Ces conditions d&apos;utilisation sont susceptibles
          d&apos;être modifiées ou complétées à tout moment, les utilisateurs du
          site Cars-Pat sont donc invités à les consulter de manière régulière.
        </p>

        <h2 className='sousTitre'>3. Description des services fournis.</h2>
        <p className='text'>
          Le site Cars-Pat a pour objet de fournir une information concernant
          l&apos;ensemble des activités d&apos;une entreprise de carrosserie
          automobile.
        </p>

        <h2 className='sousTitre'>
          4. Limitations contractuelles sur les données techniques.
        </h2>
        <p className='text'>
          Le site utilise la technologie JavaScript. Le site ne pourra être tenu
          responsable de dommages matériels liés à l&apos;utilisation du site.
        </p>

        <h2 className='sousTitre'>
          5. Propriété intellectuelle et contrefaçons.
        </h2>
        <p className='text'>
          Giuliano Loic est propriétaire des droits de propriété intellectuelle
          ou détient les droits d&apos;usage sur tous les éléments accessibles
          sur le site. Toute reproduction, représentation, modification,
          publication, adaptation de tout ou partie des éléments du site, quel
          que soit le moyen ou le procédé utilisé, est interdite.
        </p>

        <h2 className='sousTitre'>6. Limitations de responsabilité.</h2>
        <p className='text'>
          Giuliano Loic ne pourra être tenu responsable des dommages directs et
          indirects causés au matériel de l&apos;utilisateur, lors de
          l&apos;accès au site Cars-Pat.
        </p>

        <h2 className='sousTitre'>7. Gestion des données personnelles.</h2>
        <p className='text'>
          Le site propose un formulaire de contact permettant aux utilisateurs
          d&apos;envoyer un email avec des photos en pièces jointes. Ces données
          sont uniquement utilisées pour répondre à la demande de
          l&apos;utilisateur. Les photos envoyées via le formulaire de contact
          sont stockées temporairement sur le site{' '}
          <a
            href='https://imgbb.com/'
            target='_blank'
            style={{ color: '#0000EE' }}>
            ImgBB
          </a>{' '}
          et sont automatiquement supprimées au bout d&apos;un mois. Ces photos
          ne sont utilisées qu&apos;à des fins de traitement de la demande de
          devis/contact et ne sont pas utilisées à d&apos;autres fins ni
          partagées avec des tiers.
        </p>

        <h2 className='sousTitre'>8. Liens hypertextes et cookies.</h2>
        <p className='text'>
          Bien que le site lui-même n&apos;utilise pas de cookies, il intègre
          des contenus de tiers qui peuvent en utiliser :
        </p>
        <p className='text'>
          Une frame de Google Maps, qui peut utiliser des cookies pour améliorer
          l&apos;expérience utilisateur et mesurer l&apos;audience.
        </p>
        <p className='text'>
          Du contenu de TikTok, une plateforme de partage de vidéos.
          L&apos;intégration de ces vidéos peut entraîner l&apos;utilisation de
          cookies ou d&apos;autres technologies de suivi par TikTok. Nous
          n&apos;avons aucun contrôle sur ces cookies et vous recommandons de
          consulter la politique de confidentialité de TikTok pour plus
          d&apos;informations.
        </p>

        <h2 className='sousTitre'>
          9. Droit applicable et attribution de juridiction.
        </h2>
        <p className='text'>
          Tout litige en relation avec l&apos;utilisation du site Cars-Pat est
          soumis au droit français.
        </p>

        <h2 className='sousTitre'>10. Les principales lois concernées.</h2>
        <p className='text'>
          Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n°
          2004-801 du 6 août 2004 relative à l&apos;informatique, aux fichiers
          et aux libertés. Loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l&apos;économie numérique.
        </p>

        <h2 className='sousTitre'>11. Lexique.</h2>
        <p className='text'>
          Utilisateur : Internaute se connectant, utilisant le site susnommé.
          Informations personnelles : « les informations qui permettent, sous
          quelque forme que ce soit, directement ou non, l&apos;identification
          des personnes physiques auxquelles elles s&apos;appliquent » (article
          4 de la loi n° 78-17 du 6 janvier 1978).
        </p>
      </SectionContentColumn>
    </Section>
  );
}
