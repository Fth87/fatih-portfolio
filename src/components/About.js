import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../utils/animations';
import Achievements from './Achievements';

const AboutWrapper = styled(motion.div)`
  padding: 5rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Content = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

function About() {
  return (
    <AboutWrapper variants={staggerChildren} initial="hidden" animate="visible">
      <Title variants={slideUp}>Tentang Saya</Title>
      <Content variants={slideUp}>
        Saya adalah seorang pengembang web muda yang bersemangat tentang teknologi dan inovasi. 
        Dengan latar belakang dalam pengembangan front-end dan back-end, saya selalu berusaha 
        untuk menciptakan solusi digital yang menarik dan efisien.
      </Content>
      <Achievements />
    </AboutWrapper>
  );
}

export default About;