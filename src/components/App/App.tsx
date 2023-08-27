import React from 'react';
import {
  Header,
  AboutMe,
  Experience,
  ContactMe,
  LifeScale,
  Footer,
  Navigation,
  Portfolio,
} from '../index';
import { gsap } from 'gsap';

function App() {
  let tl = gsap.timeline();

  return (
    <div>
      <Header timeline={tl} />
      <AboutMe />
      <Experience />
      <Portfolio />
      <LifeScale />
      <ContactMe />
      <Footer />
      <Navigation />
    </div>
  );
}

export default App;
