import React, { FunctionComponent } from 'react';
import { useState } from 'react';
import { NavigationWrapper, StyledNavLink, StyledNavImg } from './Navigation.styles';
import { NavLinks } from './Navigation.constants';
import { useTranslation } from 'react-i18next';

export const Navigation: FunctionComponent = () => {
  const [activeNav, setActiveNav] = useState('#');
  const { t } = useTranslation();

  return (
    <NavigationWrapper>
      {NavLinks.map(({ href, icon }) => (
        <StyledNavLink
          key={`link-${href}`}
          href={`#${t(href)}`}
          id={'navLink'}
          onClick={() => setActiveNav(`#${t(href)}`)}
          active={activeNav === `#${t(href)}`}
        >
          <StyledNavImg src={icon} />
        </StyledNavLink>
      ))}
    </NavigationWrapper>
  );
};
