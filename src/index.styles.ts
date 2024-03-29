import styled from "styled-components";

export const Container = styled.div`
  width: var(--container-width-lg);
  margin: 8rem auto 0;
  min-height: 80vh;
  position: relative;
  
  & > h1, h2, h5 {
    text-align: center;
  }
  
  @media screen and (max-width: 1024px) {
    width: var(--container-width-md);
  }

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

export const MiddleContainer = styled(Container) `
  margin: 1rem auto 0;
  min-height: 50vh;
`;