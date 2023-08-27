import styled from 'styled-components';
import { theme } from '../../utils/Theme';
import { Input } from '../ContactMe/ContactMe.styles';

export const StyledContainer = styled.div`
  max-width: 1280px;
  width: calc(100% - 80px);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  @media (max-width: 779px) {
    width: calc(100% - 60px);
  }
  @media (max-width: 439px) {
    width: calc(100% - 40px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MarginBlock = styled.div`
  margin-bottom: 2rem;
`;

export const TableContainer = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(73, 1fr);
  margin-left: 3rem;
  
  @media (max-width: 1400px) {
    margin: 10px 0 30px 0;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  }
  @media (max-width: 439px) {
    grid-template-columns: repeat(auto-fit, minmax(5px, 1fr));
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  align-items: flex-start;
  width: 12rem;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  &:last-of-type {
    justify-content: space-between;
  }
`;

export const MaxAgeRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledInput = styled(Input)`
  border: 1px solid ${theme.greyColorText};
  outline: none;
  padding: 5px 10px;
  margin-bottom: 1rem;
  border-radius: 8px;
  font-size: var(--fs-14);
  font-family: inherit;
  color: ${theme.backgroundColor};
  background-color: ${theme.whiteColor};
  font-weight: bold;
  
  ::-webkit-calendar-picker-indicator {
    background-color: ${theme.whiteColor};
  }

  &:first-of-type {
    @media (max-width: 439px) {
      margin-right: 0;
    }
  }
`;

export const InputRange = styled.input`
  -webkit-appearance: none;
  margin: 10px 5px 0 0;
  width: 100%;
  border: none;
  padding: 0;
  
  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.825rem;
    cursor: pointer;
    background: ${theme.secondaryBlueHover};
  }

  &::-webkit-slider-thumb {
    height: 20px;
    width: 15px;
    border-radius: 4px;
    background: ${theme.blueColor};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${theme.secondaryBlueHover};
  }

  &::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    animation: 1s;
    background: ${theme.secondaryBlueHover};
    border-radius: 25px;
  }

  &::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 7px;
    background: ${theme.secondaryBlueHover};
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animation: 1s;
    background: transparent;
    border-color: transparent;
    border-width: 39px 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: ${theme.secondaryBlueHover};
    border-radius: 50px;
  }

  &::-ms-fill-upper {
    background: ${theme.secondaryBlueHover};
    border-radius: 50px;
  }

  &::-ms-thumb {
    height: 20px;
    width: 40px;
    border-radius: 7px;
    background: ${theme.secondaryBlueHover};
    cursor: pointer;
  }

  &:focus::-ms-fill-lower {
    background: ${theme.secondaryBlueHover};
  }

  &:focus::-ms-fill-upper {
    background: ${theme.secondaryBlueHover};
  }
`;

export const InputAge = styled(Input)`
  background: ${theme.blueColorLight};
  border-radius: 8px;
  padding: 3px 7px;
  color: ${theme.backgroundColor};
  outline: none;
  width: 40px;
  text-align: center;
  font-weight: 700;
  margin-top: 10px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 439px) {
    margin-left: 10px;
  }
`;

export const SubmitButton = styled.button`
  margin: 2rem 0;
  padding: 0.875rem 2rem;
  display: inline-block;
  min-width: 150px;
  width: 92%;
  font-size: var(fs-18);
  text-align: center;
  color: ${theme.blueColor};
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${theme.blueColor};
  transition: var(--transition);
  background-color: ${theme.blueColor};
  color: ${theme.backgroundColor};

  &:hover {
    background: ${theme.whiteColor};
    color: ${theme.backgroundColor};
    border-color: transparent;
  }

  &:disabled {
    background-color: ${theme.backgroundColor};
    color: ${theme.greyColorText};
    border-color: ${theme.greyColorText};
  }

  &:disabled:hover {
    background-color: initial;
  }

  &:hover:disabled {
    transform: scale(1);
    cursor: default;
  }

  @media (max-width: 1200px) {
    margin: 15px 0 0 0;
    width: 100%;
  }
`;

export const StyledWeek = styled.div`
  width: 10px;
  height: 10px;
  
  @media (max-width: 439px) {
    width: 5px;
    height: 5px;
  }
`;

export const ImageLoading = styled.img`
  justify-self: center;
  margin: 0 auto;
`;
