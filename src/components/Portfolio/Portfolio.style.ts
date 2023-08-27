import styled from 'styled-components';
import { theme } from '../../utils/Theme';
import { ResumeButton } from '../Header/Header.styles';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 6rem;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media screen and (max-width: 967px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const ItemWrapper = styled.div`
  background: ${theme.secondaryBlue};
  border-radius: 1.5rem;
  border: 2px solid transparent;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 9rem;
  &:hover {
    border-color: ${theme.secondaryBlueHover};
    background: transparent;
  }
`;

export const ImgWrapper = styled.img`
  border-radius: 1.375rem;
  overflow: hidden;
  margin-bottom: 1rem;
  min-height: 13.5rem;
  object-fit: fill;

  @media screen and (max-width: 1280px) {
    min-height: 11rem;

  }
`;

export const ContentWrapper = styled.div`
  padding: 0.5rem 1rem;
`;

export const StyledTitle = styled.h3`
  user-select: none;
`;

export const GitHubButton = styled(ResumeButton)`
  margin-top: auto;
  position: absolute;
  bottom: 1.25rem;
  
  &:hover > a {
    cursor: pointer;
    color: ${theme.backgroundColor};
  }
`;

export const StyledLink = styled.a`
  color: ${theme.blueColor};
  font-size: var(--fs-default);
`;
