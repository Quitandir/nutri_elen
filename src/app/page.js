'use client'

import Objectives from './Objectives';
import AboutMe from './AboutMe';
import Header from './Header';
import Intro from './Introduction';
import Service from './Service';
import { StyledPage } from './styles';
import Footer from './Footer';
import ScrollToTopButton from './MoveToTopButton';

export default function Home() {
  return (
    <StyledPage>
      <Header />
      <Intro />
      <AboutMe />
      <Objectives />
      <Service />
      <Footer />
      <ScrollToTopButton />
    </StyledPage>
  );
}
