import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(15, 12, 41, 0.8);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled(motion.div)`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 200px;
    background: rgba(15, 12, 41, 0.9);
    transition: right 0.3s ease-in-out;
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  cursor: pointer;
  margin-left: 2rem;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    display: block;
  }
`;

const navVariants = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 120 } },
};

const linkVariants = {
  hover: { scale: 1.1, color: '#7f5af0' },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <Nav variants={navVariants} initial="hidden" animate="visible">
      <Logo src="/path-to-your-logo.png" alt="Logo" />
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink variants={linkVariants} whileHover="hover" onClick={() => scrollToSection('home')}>Home</NavLink>
        <NavLink variants={linkVariants} whileHover="hover" onClick={() => scrollToSection('skills')}>Skills</NavLink>
        <NavLink variants={linkVariants} whileHover="hover" onClick={() => scrollToSection('achievements')}>Achievements</NavLink>
        <NavLink variants={linkVariants} whileHover="hover" onClick={() => scrollToSection('portfolio')}>Portfolio</NavLink>
        <NavLink variants={linkVariants} whileHover="hover" onClick={() => scrollToSection('contact')}>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Header;