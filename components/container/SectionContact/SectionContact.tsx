import React, { ForwardRefRenderFunction } from 'react';
import MailForm from '@/components/MailForm/MailForm';
import Section from '@/components/layout/Section/Section';
import SectionContentColumn from '@/components/layout/SectionContentColumn/SectionContentColumn';
import SectionContentWrap from '@/components/layout/SectionContentWrap/SectionContentWrap';
import InfosContacts from '@/components/InfosContacts/InfosContacts';
import SectionHeader from '../SectionHeader/SectionHeader';

interface SectionContactProps {
  id: string;
  ref: React.RefObject<HTMLElement>;
}

const SectionContact: ForwardRefRenderFunction<
  HTMLElement,
  SectionContactProps
> = ({ id }, ref) => {
  return (
    <Section
      id={id}
      ref={ref}>
      <SectionHeader text='Nous contacter' />
      <SectionContentWrap contact>
        <SectionContentColumn contact>
          <MailForm />
        </SectionContentColumn>
        <SectionContentColumn contact>
          <InfosContacts />
        </SectionContentColumn>
      </SectionContentWrap>
    </Section>
  );
};

export default React.forwardRef(SectionContact);
