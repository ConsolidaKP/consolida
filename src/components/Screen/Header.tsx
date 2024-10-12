'use client'

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  left: 150px;
  background-color: #ffffff;
  padding: 5px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  margin: 2px;
  color: #333;
`;

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <HeaderContainer>
      <Title>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</Title>
      {/* Aquí puedes añadir más elementos según la sección activa */}
    </HeaderContainer>
  );
};

export default Header;