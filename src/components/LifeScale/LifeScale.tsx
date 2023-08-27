import React, { FunctionComponent, useState, useTransition } from 'react';
import {
  StyledContainer,
  Container,
  TableContainer,
  StyledForm,
  StyledWeek,
  StyledInput,
  SubmitButton,
  InputRange,
  InputAge,
  InputsContainer,
  InputContainer,
  MaxAgeRow,
  ImageLoading,
  MarginBlock,
} from './LifeScale.style';
import { MiddleContainer } from '../../index.styles';
import { useFormWithValidation } from '../../utils/hooks';
import Preloader from '../../assets/images/svg/Preloader.svg';
import { theme } from '../../utils/Theme';
import { useTranslation } from 'react-i18next';

export const LifeScale: FunctionComponent = () => {
  const { t } = useTranslation();
  const { values, handleChange, isValid } = useFormWithValidation();
  const [customBirthday, setCustomBirthday] = useState('');
  const [customWeeksAmount, setCustomWeeksAmount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const year = values.age.slice(0, 4);

  function handleSubmit(evt: any) {
    evt.preventDefault();
    startTransition(() => {
      setCustomBirthday(values.age);
      setCustomWeeksAmount(values.maxAge);
    });
  }

  const renderTableWithCubes = () => {
    const countCustomWeeks = customWeeksAmount * 52.17;
    const weeksAmount = customWeeksAmount === 0 ? 3650 : countCustomWeeks;
    let weeksArray: number[] = [];
    for (let i = 0; i < weeksAmount; i++) {
      weeksArray.push(i);
    }
    const myBirthday = '1996-09-21';
    const convertBirthday = new Date(customBirthday === '' ? myBirthday : customBirthday);
    const dateNow = new Date();
    const weekTime = 7 * 24 * 60 * 60 * 1000;
    const passedWeeks = Math.ceil((dateNow.getTime() - convertBirthday.getTime()) / weekTime);

    return weeksArray.map((el, index) => {
      return (
        <StyledWeek
          style={{ backgroundColor: index <= passedWeeks ? theme.blueColor : theme.greyColorText }}
          key={`cube-life-${index}`}
        />
      );
    });
  };

  return (
    <MiddleContainer>
      <section id={t('LIFE_SCALE')}>
        <h5>{t('TRY_VISUALIZE')}</h5>
        <h2>{t('LIFE_SCALE')}</h2>
        <StyledContainer>
          <Container>
            <h2>{t('BLOCK_AGE')}</h2>
            <MarginBlock />
            <h4>{t('BLOCK_AGE_DESC')}</h4>
            <StyledForm onSubmit={handleSubmit} noValidate>
              <InputsContainer>
                <InputContainer>
                  <label htmlFor={'age'}>{t('AGE')}</label>
                  <StyledInput
                    value={values.age || '1970-01-31'}
                    type={'date'}
                    name={'age'}
                    id={'age'}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={'maxAge'}>{t('MAX_AGE')}</label>
                  <MaxAgeRow>
                    <InputRange
                      value={values.maxAge || 70}
                      type={'range'}
                      name={'maxAge'}
                      id={'maxAge'}
                      min={'50'}
                      max={'100'}
                      step={'5'}
                      onChange={handleChange}
                    />
                    <InputAge
                      value={values.maxAge}
                      type={'number'}
                      name={'maxAge'}
                      id={'maxAge'}
                      min={'50'}
                      max={'100'}
                      onChange={handleChange}
                    />
                  </MaxAgeRow>
                </InputContainer>
              </InputsContainer>
              <SubmitButton
                type={'submit'}
                disabled={!isValid || !/^(19[789]\d|20[01]\d)/.test(year)}
              >
                {t('COUNT_AGE')}
              </SubmitButton>
            </StyledForm>
          </Container>
          {isPending ? (
            <ImageLoading src={Preloader} alt={'loading'} />
          ) : (
            <TableContainer>{renderTableWithCubes()}</TableContainer>
          )}
        </StyledContainer>
      </section>
    </MiddleContainer>
  );
};
