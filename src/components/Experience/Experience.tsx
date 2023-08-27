import React, { FunctionComponent } from 'react';
import { MiddleContainer } from '../../index.styles';
import {
  SkillCard,
  SkillRow,
  Skill,
  Check,
  CardsWrapper,
  SkillsWrapper,
} from './Experience.styles';
import { FrontEndSkills, BackEndSkills } from './Experience.constants';
import CheckIcon from '../../assets/images/svg/check-circle.svg';
import { useTranslation } from 'react-i18next';

export const Experience: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <MiddleContainer>
      <section id={t('SKILLS')}>
        <h5>{t('SKILLS')}</h5>
        <h2>{t('MY_EXP')}</h2>
        <CardsWrapper>
          <SkillCard>
            <h3>{t('FRONTEND_DEVELOPMENT')}</h3>
            <SkillsWrapper>
              {FrontEndSkills.map((skill) => (
                <SkillRow key={`skill-${skill}`}>
                  <Check src={CheckIcon} />
                  <Skill>{t(skill)}</Skill>
                </SkillRow>
              ))}
            </SkillsWrapper>
          </SkillCard>
          <SkillCard>
            <h3>{t('BACKEND_DEVELOPMENT')}</h3>
            <SkillsWrapper>
              {BackEndSkills.map((skill) => (
                <SkillRow key={`skill-${skill}`}>
                  <Check src={CheckIcon} />
                  <Skill>{t(skill)}</Skill>
                </SkillRow>
              ))}
            </SkillsWrapper>
          </SkillCard>
        </CardsWrapper>
      </section>
    </MiddleContainer>
  );
};
