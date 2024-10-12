'use client'

import React from 'react';
import styled from 'styled-components';

const AIContainer = styled.div`
  height: 15px;
  width: 15px;
  position: fixed;
  top: 15px;
  right: 10px;
  background-color: #007bff;
  color: white;
  padding: 10px 10px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
`;

const AIAssistant: React.FC = () => {
  return (
    <AIContainer onClick={() => alert('AI Assistant clicked!')}>
      AI
    </AIContainer>
  );
};

export default AIAssistant;