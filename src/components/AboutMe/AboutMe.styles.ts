import styled from "styled-components";
import { theme } from "../../utils/Theme";

export const ContentContainer = styled.div `
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
`;

export const PhotoBackground = styled.div `
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, ${theme.blueColor}, transparent);
  display: grid;
  place-items: center;
`;

export const AboutPhoto = styled.img `
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: all 400ms ease;
  &:hover {
    transform: rotate(0);
    box-shadow: 0 0 15px 5px ${theme.blueColor};
  }
`;

export const Cards = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  height: 60%;
`;

export const Card = styled.div `
  text-align: center;
  background: ${theme.secondaryBlue};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 1rem;
  transition: all 400ms ease;
  &:hover {
    background: transparent;
    border-color: ${theme.blueColor};
  }
`;

export const CardIcon = styled.img `
  margin: 0 auto 1.5rem;
  width: 2rem;
  height: 2rem;
`;

export const CardTitle = styled.h4 `
  margin-bottom: 1rem;
`;

export const CardDescription = styled.h5 `
  color: ${theme.greyColorText}
`;