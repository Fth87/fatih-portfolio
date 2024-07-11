import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { slideUp, staggerChildren } from '../utils/animations';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const PortfolioWrapper = styled(motion.div)`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Project = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const projects = [
  { 
    id: 1, 
    title: 'Project 1', 
    description: 'Deskripsi singkat tentang Project 1.',
    image: '/path-to-project1-image.jpg',
    github: 'https://github.com/yourusername/project1',
    website: 'https://project1.com'
  },
  { 
    id: 2, 
    title: 'Project 2', 
    description: 'Deskripsi singkat tentang Project 2.',
    image: '/path-to-project2-image.jpg',
    github: 'https://github.com/yourusername/project2',
    website: 'https://project2.com'
  },
  { 
    id: 3, 
    title: 'Project 3', 
    description: 'Deskripsi singkat tentang Project 3.',
    image: '/path-to-project3-image.jpg',
    github: 'https://github.com/yourusername/project3',
    website: 'https://project3.com'
  },
];

function Portfolio() {
  return (
    <PortfolioWrapper variants={staggerChildren} initial="hidden" animate="visible">
      <Title variants={slideUp}>Portfolio</Title>
      <ProjectGrid>
        {projects.map((project) => (
          <Project key={project.id} variants={slideUp}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </ProjectLink>
              <ProjectLink href={project.website} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </ProjectLink>
            </ProjectLinks>
          </Project>
        ))}
      </ProjectGrid>
    </PortfolioWrapper>
  );
}

export default Portfolio;