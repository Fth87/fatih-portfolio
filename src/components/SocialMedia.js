import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const iconVariants = {
  hover: { scale: 1.2, rotate: 15 },
};

function SocialMedia() {
  return (
    <SocialWrapper>
      <SocialIcon
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover="hover"
      >
        <FaGithub />
      </SocialIcon>
      <SocialIcon
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover="hover"
      >
        <FaLinkedin />
      </SocialIcon>
      <SocialIcon
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover="hover"
      >
        <FaTwitter />
      </SocialIcon>
    </SocialWrapper>
  );
}

export default SocialMedia;