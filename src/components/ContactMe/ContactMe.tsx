import React, { FunctionComponent, useRef, useState } from 'react';
import { Container } from '../../index.styles';
import {
  ContactMeCard,
  CardsWrapper,
  ContentWrapper,
  FormWrapper,
  Input,
  TextArea,
  SubmitButton,
  ContactImg,
  StyledLink,
  StyledCardValue,
  ErrorSpan,
  InputWrapper,
  InputsContainer,
  Preload,
  TextAreaWrapper,
  StyledFinger,
  TitleRow,
} from './ContactMe.styles';
import emailjs from 'emailjs-com';
import { ContactsCards } from './ContactMe.constants';
import { FormProvider, useForm } from 'react-hook-form';
import { theme } from '../../utils/Theme';
import Preloader from '../../assets/images/svg/Preloader.svg';
import Popup from '../Popup/Popup';
import { useTranslation } from 'react-i18next';

export const ContactMe: FunctionComponent = () => {
  const form: React.MutableRefObject<HTMLFormElement | null> = useRef(null);
  const { t } = useTranslation();
  const formMethods = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onChange',
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = formMethods;
  const [isMessageSendDialogOpen, setIsMessageSendDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSendMail() {
    setIsLoading(true);
    emailjs
      .sendForm(
        'service_uk7yphm',
        'template_rej1e5x',
        form && form.current !== null ? form.current : '',
        'Bqm-Z1C1MdJ7hlL-m',
      )
      .then(() => {
        console.log(t('DATA_SENT_SUCCESSFULLY'));
        setIsMessageSendDialogOpen(true);
        setIsLoading(false);
      })
      .catch(() => console.error());
    reset();
  }

  return (
    <Container>
      <section id={t('CONTACT_ME')}>
        <h5>{t('GET_IN_TOUCH')}</h5>
        <h2>{t('CONTACT_ME')}</h2>
        <TitleRow>
          <h3>
            {t('CONTACT_ME_TEXT')}
          </h3>
          <StyledFinger>{t('FINGER')}</StyledFinger>
        </TitleRow>
        <ContentWrapper>
          <CardsWrapper>
            {ContactsCards.map((card) => (
              <ContactMeCard key={`card-${card.title}`}>
                <ContactImg src={card.icon} />
                <h5>{t(card.title)}</h5>
                <StyledCardValue>{t(card.value)}</StyledCardValue>
                <StyledLink href={card.link}>{t('SEND_A_MESSAGE')}</StyledLink>
              </ContactMeCard>
            ))}
          </CardsWrapper>
          <FormProvider {...formMethods}>
            <form noValidate onSubmit={handleSubmit(handleSendMail)} ref={form}>
              <FormWrapper>
                <InputsContainer>
                  <InputWrapper>
                    <Input
                      {...register('name', { required: t('SPECIFY_YOUR_NAME') })}
                      type={'text'}
                      name={'name'}
                      placeholder={t('INPUT_NAME')}
                      style={{
                        border: errors.name?.message ? `1px solid ${theme.dangerColor}` : '',
                      }}
                    />
                    <ErrorSpan>{errors.name?.message}</ErrorSpan>
                  </InputWrapper>
                  <InputWrapper>
                    <Input
                      {...register('email', {
                        required: t('SPECIFY_YOUR_NAME'),
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: t('EMAIL_ERROR'),
                        },
                      })}
                      type={'email'}
                      name={'email'}
                      placeholder={t('INPUT_EMAIL')}
                      style={{
                        border: errors.email?.message ? `1px solid ${theme.dangerColor}` : '',
                      }}
                    />
                    <ErrorSpan>{errors.email?.message}</ErrorSpan>
                  </InputWrapper>
                </InputsContainer>
                <TextAreaWrapper>
                  <TextArea
                    {...register('message', { required: t('EMPTY_FIELD_ERROR') })}
                    name={'message'}
                    placeholder={t('INPUT_MESSAGE')}
                    rows={7}
                    style={{
                      border: errors.message?.message ? `1px solid ${theme.dangerColor}` : '',
                    }}
                  />
                  <ErrorSpan>{errors.message?.message}</ErrorSpan>
                </TextAreaWrapper>
                {!isLoading ? (
                  <SubmitButton type={'submit'}>{t('SEND_MESSAGE')}</SubmitButton>
                ) : (
                  <Preload src={Preloader} alt={'preloader'} />
                )}
              </FormWrapper>
            </form>
          </FormProvider>
        </ContentWrapper>
      </section>
      {isMessageSendDialogOpen && (
        <Popup
          isPopupOpen={isMessageSendDialogOpen}
          setIsPopupOpen={() => setIsMessageSendDialogOpen(false)}
        />
      )}
    </Container>
  );
};
