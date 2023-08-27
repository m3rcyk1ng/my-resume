import styled from 'styled-components';
import { theme } from '../../utils/Theme';
import { Card } from '../AboutMe/AboutMe.styles';

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const SkillCard = styled(Card)`
  background: ${theme.secondaryBlue};
  border: 1px solid transparent;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;

  &:hover {
    background: transparent;
    border-color: ${theme.blueColor};
  }

  &:first-child {
    margin-right: 5rem;
  }

  @media screen and (max-width: 650px) {
    width: 70%;
    margin: 0 auto;
    
    &:first-child {
      margin-right: auto;
    }
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media screen and (max-width: 937px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SkillRow = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 2rem;
`;

export const Skill = styled.h5`
  padding-top: 2px;
`;

export const Check = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
`;
