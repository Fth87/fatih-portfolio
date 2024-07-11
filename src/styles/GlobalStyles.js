import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Space Mono', monospace;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
  html {
    scroll-behavior: smooth;
  }

  .skills-orbit-container {
    position: relative;
    width: 100%;
    height: 150vh;
    min-height: 1500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .skills-center {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #ffd700;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    z-index: 10;
  }
  
  .skill-orbit {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: rotate 50s linear infinite;
  }
  
  .skill-icon {
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }


  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  /* Responsive orbits */
  .skill-orbit-1 { width: 300px; height: 300px; animation-duration: 10s; }
  .skill-orbit-2 { width: 450px; height: 450px; animation-duration: 15s; }
  .skill-orbit-3 { width: 600px; height: 600px; animation-duration: 20s; }
  .skill-orbit-4 { width: 750px; height: 750px; animation-duration: 25s; }
  .skill-orbit-5 { width: 900px; height: 900px; animation-duration: 30s; }
  .skill-orbit-6 { width: 1050px; height: 1050px; animation-duration: 35s; }
  .skill-orbit-7 { width: 1200px; height: 1200px; animation-duration: 40s; }
  .skill-orbit-8 { width: 1350px; height: 1350px; animation-duration: 45s; }
  .skill-orbit-9 { width: 1500px; height: 1500px; animation-duration: 50s; }
  

  .skill-orbit-1 .skill-icon { transform: translateX(100px) rotate(360deg); }
.skill-orbit-2 .skill-icon { transform: translateX(150px) rotate(360deg); }
.skill-orbit-3 .skill-icon { transform: translateX(200px) rotate(360deg); }
.skill-orbit-4 .skill-icon { transform: translateX(250px) rotate(360deg); }
.skill-orbit-5 .skill-icon { transform: translateX(300px) rotate(360deg); }
.skill-orbit-6 .skill-icon { transform: translateX(350px) rotate(360deg); }
.skill-orbit-7 .skill-icon { transform: translateX(400px) rotate(360deg); }
.skill-orbit-8 .skill-icon { transform: translateX(450px) rotate(360deg); }
.skill-orbit-9 .skill-icon { transform: translateX(500px) rotate(360deg); }

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    .skill-orbit { transform: scale(0.8); }
    .skill-icon { transform: scale(0.8); }
  }
  
  @media (max-width: 992px) {
    .skill-orbit { transform: scale(0.6); }
    .skill-icon { transform: scale(0.6); }
  }
  
  @media (max-width: 768px) {
    .skill-orbit { transform: scale(0.4); }
    .skill-icon { transform: scale(0.4); }
  }
  
  @media (max-width: 576px) {
    .skill-orbit { transform: scale(0.3); }
    .skill-icon { transform: scale(0.3); }
  }
`;
