import React from "react";
import { Container } from '../../index.styles';
import {
  AboutPhoto,
  Cards,
  Card,
  ContentContainer,
  PhotoBackground,
  CardDescription,
  CardTitle,
  CardIcon
} from './AboutMe.styles'
import { text } from "../../utils/Text";
import AboutCorgi from "../../assets/images/about-photo.png"
import { AboutMeCards } from "./AboutMe.constants";

const AboutMe = () => {

  return (
    <Container>
      <section id={text.ABOUT_ME}>
        <h5>{text.TIME_TO_TELL}</h5>
        <h2>{text.ABOUT_ME}</h2>
        <ContentContainer>
          <PhotoBackground>
            <AboutPhoto src={AboutCorgi} alt={text.ABOUT_ALT}/>
          </PhotoBackground>
          <Cards>
            { AboutMeCards.map((card: any, i) => (
              <Card key={`card-${i}`}>
                <CardIcon src={card.icon} />
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            ))}
          </Cards>
        </ContentContainer>
      </section>
    </Container>
)
}

export default AboutMe;