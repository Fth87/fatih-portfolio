import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../utils/animations';
import SocialMedia from './SocialMedia';

const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Tagline = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 2rem;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

function Home() {
  return (
    <HomeWrapper variants={staggerChildren} initial="hidden" animate="visible">
      <ContentWrapper>
        <TextContent>
          <Name variants={slideUp}>Fatih</Name>
          <Tagline variants={slideUp}>Generasi Muda Paham Teknologi</Tagline>
          <AboutText variants={slideUp}>
            Saya adalah seorang pengembang web muda yang bersemangat tentang teknologi dan inovasi. 
            Dengan latar belakang dalam pengembangan front-end dan back-end, saya selalu berusaha 
            untuk menciptakan solusi digital yang menarik dan efisien.
          </AboutText>
          <SocialMedia />
        </TextContent>
        <ProfileImage src="/path-to-your-profile-photo.jpg" alt="Fatih" variants={slideUp} />
      </ContentWrapper>
    </HomeWrapper>
  );
}

export default Home;