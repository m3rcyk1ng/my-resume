import React, { FunctionComponent } from 'react';
import {
  StyledContainer,
  ImgWrapper,
  ItemWrapper,
  GitHubButton,
  StyledLink,
  ContentWrapper,
  StyledTitle,
} from './Portfolio.style';
import { MiddleContainer } from '../../index.styles';
import { portfolioItems } from './Portfolio.constants';
import { useTranslation } from 'react-i18next';

export const Portfolio: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <MiddleContainer>
      <section id={t('PORTFOLIO')}>
        <h5>{t('PORTFOLIO_DESC')}</h5>
        <h2>{t('PORTFOLIO')}</h2>
        <StyledContainer>
          {portfolioItems.map(({ id, image, title, github }) => {
            return (
              <ItemWrapper key={id}>
                <ImgWrapper src={image} alt={t(title)} />
                <ContentWrapper>
                <StyledTitle>{t(title)}</StyledTitle>
                <StyledLink href={github} target="_blank" rel="noreferrer">
                  <GitHubButton>{id === 2 ? t('SITE') : t('GITHUB')}</GitHubButton>
                </StyledLink>
                </ContentWrapper>
              </ItemWrapper>
            );
          })}
        </StyledContainer>
      </section>
    </MiddleContainer>
  );
};
