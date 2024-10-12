import React, { useState } from 'react';
import styled from 'styled-components';

const AIContainer = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  background-color: #4299e1;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(66, 153, 225, 0.5);
  
  &:hover {
    background-color: #3182ce;
    box-shadow: 0 4px 15px rgba(66, 153, 225, 0.6);
    transform: translateY(-2px);
  }
`;

const AIIcon = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Pulse = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #4299e1;
  opacity: 0.6;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    70% {
      transform: scale(1.3);
      opacity: 0;
    }
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }
`;

const AIAssistant: React.FC = () => {
  const [isPulsing, setIsPulsing] = useState(false);

  const handleClick = () => {
    setIsPulsing(true);
    alert('AI Assistant clicked!');
    setTimeout(() => setIsPulsing(false), 2000);
  };

  return (
    <AIContainer onClick={handleClick}>
      {isPulsing && <Pulse />}
      <AIIcon>AI</AIIcon>
    </AIContainer>
  );
};

export default AIAssistant;