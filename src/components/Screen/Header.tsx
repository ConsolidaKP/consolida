'use client'

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2C3E50;
  font-size: 12px;
  font-weight: normal;
  width: 100%;
  top: 0px;
  position: fixed;
  left: 0px;
  height: 50px;
`;

const Title = styled.h1`
  color: #FFFFFF;
  margin-left: 5px;
  vertical-align: middle;
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