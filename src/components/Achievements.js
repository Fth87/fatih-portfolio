import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../utils/animations';

const AchievementsWrapper = styled(motion.div)`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const AchievementList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Achievement = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const AchievementImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const AchievementTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const AchievementDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;

const achievements = [
  {
    id: 1,
    title: 'Juara 1 Hackathon Nasional',
    description: 'Memenangkan kompetisi pengembangan aplikasi tingkat nasional.',
    image: '/path-to-hackathon-image.jpg'
  },
  {
    id: 2,
    title: 'Best Project Award',
    description: 'Mendapatkan penghargaan proyek terbaik di Tech Conference 2022.',
    image: '/path-to-award-image.jpg'
  },
  {
    id: 3,
    title: 'Kontributor Open Source',
    description: 'Berkontribusi aktif pada proyek open source terkemuka.',
    image: '/path-to-opensource-image.jpg'
  }
];

function Achievements() {
  return (
    <AchievementsWrapper variants={staggerChildren} initial="hidden" animate="visible">
      <Title variants={slideUp}>Prestasi</Title>
      <AchievementList>
        {achievements.map((achievement) => (
          <Achievement key={achievement.id} variants={slideUp}>
            <AchievementImage src={achievement.image} alt={achievement.title} />
            <AchievementTitle>{achievement.title}</AchievementTitle>
            <AchievementDescription>{achievement.description}</AchievementDescription>
          </Achievement>
        ))}
      </AchievementList>
    </AchievementsWrapper>
  );
}

export default Achievements;