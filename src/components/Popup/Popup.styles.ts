import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const PopupTitle = styled.h2`
  color: ${theme.backgroundColor};
  @media (max-width: 439px) {
    font-size: var(--fs-20);
    line-height: 1;
  }
`;

export const PopupImage = styled.img`
  margin-top: 2rem;
  height: 14rem;
  width: 12rem;
  
  @media (max-width: 1100px) {
    margin-top: 10px;
    height: 195px;
    width: 180px;
  }
  
  @media (max-width: 439px) {
    height: 130px;
    width: 120px;
  }
`;

export const PopupSubtitle = styled.h4`
  color: ${theme.backgroundColor};
  @media (max-width: 439px) {
    font-size: var(--fs-14);
    margin: 0 10px;
  }
`;

export const StyledPopup = styled.div<{ isPopupOpen: boolean }>`
  visibility: ${(props) => (props.isPopupOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isPopupOpen ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s linear;
  background: rgba(0, 0, 0, 0.65);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const PopupContainer = styled.div<{ isPopupOpen: boolean }>`
  transform: ${(props) => (props.isPopupOpen ? 'scale(1)' : 'scale(0)')};
  transition: all 2s ease-in-out;
  width: 600px;
  height: 470px;
  background-color: ${theme.whiteColor};
  padding: 50px 40px;
  box-shadow: 0 0 15px 5px ${theme.blueColor};
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 799px) {
    width: 450px;
    height: 490px;
    padding: 30px 20px;
  }
  @media (max-width: 439px) {
    width: 300px;
    height: 370px;
    padding: 20px 10px;
  }
`;

export const CloseButton = styled.button`
  padding: 15px;
  margin-top: 20px;
  min-width: 30%;
  text-align: center;
  border: none;
  border-radius: 0.5rem;
  font-size: var(--fs-12);
  line-height: 1.66;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${theme.backgroundColor};
  color: ${theme.whiteColor};
  transition-duration: 0.3s;
  transition-property: transform;
  @media (max-width: 439px) {
    padding: 12px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;
