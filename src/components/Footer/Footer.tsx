import React, { FunctionComponent } from 'react';
import {
  FooterWrapper,
  FooterLinksRow,
  FooterLink,
  SocialButton,
  SocialButtonImg,
  SocialsContainer,
  StyledCopyright,
} from './Footer.styles';
import { FooterLinks, FooterSocialLinks } from './Footer.constants';
import { useTranslation } from 'react-i18next';

export const Footer: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <FooterLinksRow>
        {FooterLinks.map(({ value }) => (
          <FooterLink key={`link-${value}`} href={`#${t(value)}`}>
            {t(value)}
          </FooterLink>
        ))}
      </FooterLinksRow>
      <SocialsContainer>
        {FooterSocialLinks.map(({ link, icon }) => (
          <SocialButton key={`button-${link}`} href={t(link)} target="_blank">
            <SocialButtonImg src={icon} />
          </SocialButton>
        ))}
      </SocialsContainer>
      <StyledCopyright>&copy; {t('NAME')}</StyledCopyright>
    </FooterWrapper>
  );
};
