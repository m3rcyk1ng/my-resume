import React from 'react';
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
  PhotoProfile
} from "./Header.styles";
import { text } from "../../utils/Text";
import GithubIcon from '../../assets/images/github.svg';
import TelegramIcon from '../../assets/images/tg.svg'
import InstIcon from '../../assets/images/inst.svg'
import ProfilePhoto from '../../assets/images/profile-photo.png'

const Header = () => {

  return (
    <header>
      <Container>
        <h5>{text.ITS_ME}</h5>
        <h1>{text.NAME}</h1>
        <h5 className="grey-text">{text.FRONTEND_DEV}</h5>
        <ButtonsContainer>
          <ResumeButton>{text.DOWNLOAD_CV}</ResumeButton>
          <ContactButton>{text.CONTACT_ME}</ContactButton>
        </ButtonsContainer>
        <SocialsContainer>
          <SocialButton href="https://github.com/m3rcyk1ng" target="_blank"><SocialButtonImg src={GithubIcon}/></SocialButton>
          <SocialButton href="https://github.com/m3rcyk1ng" target="_blank"><SocialButtonImg src={TelegramIcon}/></SocialButton>
          <SocialButton href="https://github.com/m3rcyk1ng" target="_blank"><SocialButtonImg src={InstIcon}/></SocialButton>
        </SocialsContainer>
      <ProfileContainer>
        <PhotoProfile src={ProfilePhoto} alt="CorgiInSpace" />
      </ProfileContainer>
      <ScrollDown>{text.SCROLL_DOWN}</ScrollDown>
      </Container>
    </header>
  )
}

export default Header;