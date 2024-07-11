import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../utils/animations';

const ContactWrapper = styled(motion.div)`
  padding: 5rem 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
`;

const Input = styled(motion.input)`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
`;

const TextArea = styled(motion.textarea)`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  min-height: 150px;
`;

const Button = styled(motion.button)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would typically send the form data to a server
  };

  return (
    <ContactWrapper variants={staggerChildren} initial="hidden" animate="visible">
      <Title variants={slideUp}>Hubungi Saya</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          variants={slideUp}
          type="text"
          name="name"
          placeholder="Nama"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <Input
          variants={slideUp}
          type="email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <TextArea
          variants={slideUp}
          name="message"
          placeholder="Pesan"
          value={formState.message}
          onChange={handleChange}
          required
        />
        <Button variants={slideUp} type="submit">Kirim</Button>
      </Form>
    </ContactWrapper>
  );
}

export default Contact;