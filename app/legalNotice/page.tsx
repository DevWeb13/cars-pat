import React from 'react';
import styles from './legalNoticePage.module.css';
import Main from '@/components/layout/Main/Main';
import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import SectionContentColumn from '@/components/layout/SectionContentColumn/SectionContentColumn';

export default function legalNoticePage() {
  return (
    <Section>
      <SectionHeader text='Mentions légales' />
      <SectionContentColumn>
        <p>
          <strong>Propriétaire du site</strong> : Cars Pat
          <br />
          Adresse : 1 Rue Denis Magdelon, 13009 Marseille
          <br />
          Email : carrosse-pat@hotmail.fr
        </p>
        <p>
          <strong>Design, développement et maintenance</strong> : LaReponseDev
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

        <p>
          <strong>Responsable publication</strong> : Giuliano Loic
        </p>

        <p>
          <strong>Hébergeur</strong> : Vercel
          <br />
          Adresse : Vercel, Inc., 340 S Lemon Ave #4133, Walnut, CA 91789
        </p>

        <h2>
          2. Conditions générales d&apos;utilisation du site et des services
          proposés.
        </h2>
        <p>
          L&apos;utilisation du site Cars-Pat implique l&apos;acceptation pleine
          et entière des conditions générales d&apos;utilisation ci-après
          décrites. Ces conditions d&apos;utilisation sont susceptibles
          d&apos;être modifiées ou complétées à tout moment, les utilisateurs du
          site Cars-Pat sont donc invités à les consulter de manière régulière.
        </p>

        <h2>3. Description des services fournis.</h2>
        <p>
          Le site Cars-Pat a pour objet de fournir une information concernant
          l&apos;ensemble des activités d&apos;une entreprise de carrosserie
          automobile.
        </p>

        <h2>4. Limitations contractuelles sur les données techniques.</h2>
        <p>
          Le site utilise la technologie JavaScript. Le site ne pourra être tenu
          responsable de dommages matériels liés à l&apos;utilisation du site.
        </p>

        <h2>5. Propriété intellectuelle et contrefaçons.</h2>
        <p>
          Giuliano Loic est propriétaire des droits de propriété intellectuelle
          ou détient les droits d&apos;usage sur tous les éléments accessibles
          sur le site. Toute reproduction, représentation, modification,
          publication, adaptation de tout ou partie des éléments du site, quel
          que soit le moyen ou le procédé utilisé, est interdite.
        </p>

        <h2>6. Limitations de responsabilité.</h2>
        <p>
          Giuliano Loic ne pourra être tenu responsable des dommages directs et
          indirects causés au matériel de l&apos;utilisateur, lors de
          l&apos;accès au site Cars-Pat.
        </p>

        <h2>7. Gestion des données personnelles.</h2>
        <p>
          Le site propose un formulaire de contact permettant aux utilisateurs
          d&apos;envoyer un email avec des photos en pièces jointes. Ces données
          sont uniquement utilisées pour répondre à la demande de
          l&apos;utilisateur et ne sont pas stockées sur le site ou ailleurs.
        </p>

        <h2>8. Liens hypertextes et cookies.</h2>
        <p>
          Bien que le site lui-même n&apos;utilise pas de cookies, il intègre
          une frame de Google Maps qui peut en utiliser.
        </p>

        <h2>9. Droit applicable et attribution de juridiction.</h2>
        <p>
          Tout litige en relation avec l&apos;utilisation du site Cars-Pat est
          soumis au droit français.
        </p>

        <h2>10. Les principales lois concernées.</h2>
        <p>
          Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n°
          2004-801 du 6 août 2004 relative à l&apos;informatique, aux fichiers
          et aux libertés. Loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l&apos;économie numérique.
        </p>

        <h2>11. Lexique.</h2>
        <p>
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
