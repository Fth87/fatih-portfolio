import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import { fadeIn } from './utils/animations';

const AppWrapper = styled(motion.div)`
  min-height: 100vh;
`;

const StarField = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Star = styled(motion.div)`
  position: absolute;
  background: #fff;
  border-radius: 50%;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const Footer = styled.footer`
  background: rgba(15, 12, 41, 0.8);
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

function App() {
  const [stars] = useState(() =>
    Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
    }))
  );

  return (
    <ParallaxProvider>
      <AppWrapper variants={fadeIn} initial="hidden" animate="visible">
        <StarField>
          {stars.map((star, i) => (
            <Star
              key={i}
              style={{
                left: star.x,
                top: star.y,
                width: star.size,
                height: star.size,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </StarField>
        <Header />
        <Section id="home">
          <Home />
        </Section>
        <div id="skills">
          <Skills />
        </div>
        <Section id="achievements">
          <Achievements />
        </Section>

        <Section id="portfolio">
          <Portfolio />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
        <Footer>
          <p>&copy; 2023 Fatih. All rights reserved.</p>
          <SocialMedia />
        </Footer>
      </AppWrapper>
    </ParallaxProvider>
  );
}

export default App;
