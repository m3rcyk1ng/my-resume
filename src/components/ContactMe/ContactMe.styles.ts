import styled from 'styled-components';
import { theme } from '../../utils/Theme';
import { Card } from '../AboutMe/AboutMe.styles';

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  margin: 2rem 5rem 0 10rem;

  @media screen and (max-width: 1100px) {
    margin: 1rem 2rem 0 4rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }

  @media screen and (max-width: 737px) {
    margin: 2rem 0 0;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    justify-items: center;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  position: relative;
`;

export const ContactMeCard = styled(Card)`
  padding: 1.5rem 4rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  @media screen and (max-width: 1280px) {
    padding: 1rem 2rem;
  }
  
  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 737px) {
    width: 50%
  }

  @media screen and (max-width: 500px) {
    width: 80%
  }
`;

export const StyledCardValue = styled.h5`
  color: ${theme.greyColorText};
`;

export const StyledLink = styled.a`
  margin-top: 0.75rem;
  color: ${theme.blueColor};
  font-size: var(fs-13);

  &:hover {
    cursor: pointer;
  }
`;

export const ContactImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.75rem;
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputWrapper = styled.div`
  min-height: 4.25rem;
  max-height: 4.25rem;
  display: flex;
  flex-direction: column;
  width: 50%;

  &:first-of-type {
    margin-right: 2rem;
  }

  @media screen and (max-width: 767px) {
    &:first-of-type {
      margin-right: 0;
    }
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid ${theme.secondaryBlueHover};
  resize: none;
  color: ${theme.whiteColor};
  transition: 0.3s;

  &:focus {
    border-color: ${theme.blueColor};
  }
`;

export const TextArea = styled.textarea`
  padding: 1.5rem;
  font-size: var(--fs-15);
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid ${theme.secondaryBlueHover};
  resize: none;
  color: ${theme.whiteColor};
  transition: 0.3s;

  &:focus {
    border-color: ${theme.blueColor};
  }

  &:placeholder-shown {
    font-size: var(--fs-15);
  }
`;

export const TextAreaWrapper = styled.div`
  min-height: 11rem;
  max-height: 11rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin: 0 auto 1rem;
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  min-width: 150px;
  text-align: center;
  width: max-content;
  padding: 1rem 1.2rem;
  font-size: var(--fs-default);
  background-color: ${theme.blueColor};
  color: ${theme.backgroundColor};
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${theme.blueColor};
  transition: var(--transition);

  &:hover {
    background: ${theme.whiteColor};
    color: ${theme.backgroundColor};
    border-color: transparent;
  }

  @media screen and (max-width: 767px) {
    margin: 0.75rem auto 0;
  }
`;

export const ErrorSpan = styled.span`
  font-size: var(--fs-11);
  color: ${theme.dangerColor};
  transition: 0.3s;
`;

export const Preload = styled.img`
  height: 4rem;
  width: 4rem;
`;

export const TitleRow = styled.div`
  display: flex;
  height: 3rem;
  position: relative;

  @media screen and (max-width: 737px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const StyledFinger = styled.div`
  margin-left: 0.5rem;
  margin-top: 0.25rem;
  font-size: var(--fs-20);
  animation: up-down-animation 1s ease infinite;
  position: relative;

  @media screen and (max-width: 737px) {
    margin: 0;
  }
  
  @keyframes up-down-animation {
    0% {
      bottom: 0.25rem;
    }
    50% {
      bottom: 0;
    }
    100% {
      bottom: 0.25rem;
    }
  }
`
