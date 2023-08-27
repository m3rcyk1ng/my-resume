import React, { FunctionComponent } from 'react';
import { Container } from '../../index.styles';
import {
  AboutPhoto,
  Cards,
  Card,
  ContentContainer,
  PhotoBackground,
  CardDescription,
  CardTitle,
  CardIcon,
  AboutDescription,
  FrontEndCircle,
  FrontEndCircleImg,
} from './AboutMe.styles';
import AboutCorgi from '../../assets/images/about-photo.png';
import PCUser from '../../assets/images/pc.png';
import FrontEndCircleIcon from '../../assets/images/svg/frontend.svg';
import { AboutMeCards } from './AboutMe.constants';
import { useTranslation } from 'react-i18next';

export const AboutMe: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section id={t('ABOUT_ME')}>
        <h5>{t('TIME_TO_TELL')}</h5>
        <h2>{t('ABOUT_ME')}</h2>
        <ContentContainer>
          <PhotoBackground>
            <AboutPhoto src={AboutCorgi} alt={t('ABOUT_ALT')} />
            <FrontEndCircle src={FrontEndCircleIcon} alt={t('CIRCLE_ALT')} />
            <FrontEndCircleImg src={PCUser} alt={t('CIRCLE_ALT')} />
          </PhotoBackground>
          <div>
            <Cards>
              {AboutMeCards.map(({ icon, title, description }) => (
                <Card key={`card-${title}`}>
                  <CardIcon src={icon} />
                  <CardTitle>{t(title)}</CardTitle>
                  <CardDescription>{t(description)}</CardDescription>
                </Card>
              ))}
            </Cards>
            <AboutDescription>{t('ABOUT_DESCRIPTION')}</AboutDescription>
          </div>
        </ContentContainer>
      </section>
    </Container>
  );
};
