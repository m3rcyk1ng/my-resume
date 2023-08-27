import React from 'react';
import {
  StyledPopup,
  PopupContainer,
  CloseButton,
  PopupTitle,
  PopupImage,
  PopupSubtitle,
} from './Popup.styles';
import AstronautImg from '../../assets/images/svg/astronaut-rocket.svg';
import { useTranslation } from 'react-i18next';

function Popup({ isPopupOpen, setIsPopupOpen }: any) {
  const { t } = useTranslation();

  function handleClosePopup(evt: any) {
    if (evt.target === evt.currentTarget) {
      setIsPopupOpen(false);
    }
  }

  return (
    <StyledPopup isPopupOpen={isPopupOpen} onClick={handleClosePopup}>
      <PopupContainer isPopupOpen={isPopupOpen}>
        <PopupTitle>{t('SUCCESS')}</PopupTitle>
        <PopupSubtitle>{t('FEEDBACK')}</PopupSubtitle>
        <PopupImage src={AstronautImg} />
        <CloseButton onClick={handleClosePopup} type={'button'}>
          {t('CLOSE')}
        </CloseButton>
      </PopupContainer>
    </StyledPopup>
  );
}

export default Popup;
