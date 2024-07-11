import React from 'react';
import { FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiCss3, SiBootstrap, SiTailwindcss } from 'react-icons/si';
// import './SkillsOrbit.css';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
];

const SkillsOrbit = () => {
  return (
    <div className="skills-orbit-container">
      <div className="skills-center">MySkills</div>
      {skills.map((skill, index) => (
        <div key={skill.name} className={`skill-orbit skill-orbit-${index + 1}`}>
          <div className="skill-icon" style={{ color: skill.color }}>
            <skill.icon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsOrbit;
