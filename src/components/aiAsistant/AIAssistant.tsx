'use client'

import React from 'react';
import styled from 'styled-components';

const AIContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const AIAssistant: React.FC = () => {
  return (
    <AIContainer onClick={() => alert('AI Assistant clicked!')}>
      AI Assistant
    </AIContainer>
  );
};

export default AIAssistant;