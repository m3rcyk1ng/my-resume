import styled from 'styled-components';
import { theme } from '../../utils/Theme';

export const NavigationWrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
  animation: opacity 9s ease-in;
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1120px) {
    padding: 0.15rem 0.25rem;
  }
`;

export const StyledNavLink = styled.a<{ active: boolean }>`
  background: ${(props) => (props?.active ? `${theme.blueColor}` : 'transparent')};
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: ${theme.whiteColor};
  font-size: var(--fs-18);

  &:hover {
    background: ${theme.darkColor};
  }

  @media screen and (max-width: 1120px) {
    padding: 0.5rem;
  }
`;

export const StyledNavImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media screen and (max-width: 1120px) {
    width: 1rem;
    height: 1rem;
  }
`;