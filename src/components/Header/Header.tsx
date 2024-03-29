import React, {FunctionComponent, useLayoutEffect, useRef, useState} from 'react';
import { Container } from '../../index.styles';
import {
  ButtonsContainer,
  ContactButton,
  ResumeButton,
  SocialButton,
  SocialButtonImg,
  SocialsContainer,
  ProfileContainer,
  ScrollDown,
  PhotoProfile,
  StyledTitle,
  LanguageContainer,
  LanguageIcon,
} from './Header.styles';
import ProfilePhoto from '../../assets/images/profile.png';
import RusIcon from '../../assets/images/svg/rus.svg';
import EngIcon from '../../assets/images/svg/eng.svg';
import { FooterSocialLinks } from '../Footer/Footer.constants';
import { useLocalStorage } from '../../utils';
import i18n from '../../utils/i18';
import { useTranslation } from 'react-i18next';
import { Power3 } from 'gsap';

export const Header: FunctionComponent<any> = ({ timeline }) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [isLangChange , setIsLangChange] = useState(false);
  let profilePhotoRef: any = useRef(null);
  let resumeBtnRef: any = useRef(null);
  let contactBtnRef: any = useRef(null);
  let nameBlockRef1: any = useRef(null);
  let nameBlockRef2: any = useRef(null);
  let nameBlockRef3: any = useRef(null);
  let btnContainerRef: any = useRef(null);
  let scrollDownRef: any = useRef(null);
  let socialsRef: any = useRef(null);
  let languageRef: any = useRef(null);

  useLayoutEffect(() => {
    if (isLangChange) return;
    timeline.from(nameBlockRef1, 2, {
      y: -100,
      ease: Power3.easeOut,
      opacity: 0,
    });

    timeline
      .fromTo(
        btnContainerRef,
        2,
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1 },
        3,
      )
      .fromTo(resumeBtnRef, 0.75, { x: '-2500', opacity: 0 }, { x: 0, opacity: 1 }, 2.5)
      .fromTo(contactBtnRef, 0.75, { x: '2500', opacity: 0 }, { x: 0, opacity: 1 }, 3);

    timeline
      .from(profilePhotoRef, 4, { y: 1500, ease: Power3.easeInOut, opacity: 0 }, 0)
      .from(nameBlockRef2, 1, { y: 1200, ease: Power3.easeOut, opacity: 0 }, 1.25)
      .from(nameBlockRef2, 1.5, { scale: 1.6, ease: Power3.easeOut }, 1)
      .from(nameBlockRef3, 1, { y: 1200, ease: Power3.easeOut, opacity: 0 }, 1.75)
      .from(nameBlockRef3, 1.5, { scale: 1.6, ease: Power3.easeOut }, 1.5)
      .from(languageRef, 1, { opacity: 0, scale: 0.7 }, 4);

    timeline.from(
      [scrollDownRef, socialsRef],
      3,
      { y: 100, ease: Power3.easeOut, opacity: 0 },
      5,
    );
  });

  function handleLanguageChange() {
    setIsLangChange(true);
    if (language === 'en') {
      i18n.changeLanguage('ru').then();
      setLanguage('ru');
    } else if (language === 'ru') {
      i18n.changeLanguage('en').then();
      setLanguage('en');
    }
  }

  return (
    <header id={t('HEADER')}>
      <Container>
        <LanguageContainer onClick={handleLanguageChange} ref={(el) => (languageRef = el)}>
          <LanguageIcon src={language === 'en' ? EngIcon : RusIcon} />
        </LanguageContainer>
        <h5 ref={(el) => (nameBlockRef1 = el)}>{t('ITS_ME')}</h5>
        <h1 ref={(el) => (nameBlockRef2 = el)}>{t('NAME')}</h1>
        <StyledTitle ref={(el) => (nameBlockRef3 = el)}>{t('FRONTEND_DEV')}</StyledTitle>
        <ButtonsContainer ref={(el) => (btnContainerRef = el)}>
          <ResumeButton
            ref={(el) => (resumeBtnRef = el)}
            rel={'noreferrer'}
            target={'_blank'}
            download
            href={'/resume.pdf'}
          >
            {t('DOWNLOAD_CV')}
          </ResumeButton>
          <ContactButton ref={(el) => (contactBtnRef = el)} href={`#${t('CONTACT_ME')}`}>
            {t('CONTACT_ME')}
          </ContactButton>
        </ButtonsContainer>
        <SocialsContainer ref={(el) => (socialsRef = el)}>
          {FooterSocialLinks.map(({ link, icon }) => (
            <SocialButton key={`btn-${link}`} href={t(link)} target="_blank">
              <SocialButtonImg src={icon} />
            </SocialButton>
          ))}
        </SocialsContainer>
        <ProfileContainer>
          <PhotoProfile
            src={ProfilePhoto}
            alt={t('CORGI_ALT')}
            ref={(el) => {
              profilePhotoRef = el;
            }}
          />
        </ProfileContainer>
        <ScrollDown href={`#${t('ABOUT_ME')}`} ref={(el) => (scrollDownRef = el)}>
          {t('SCROLL_DOWN')}
        </ScrollDown>
      </Container>
    </header>
  );
};
