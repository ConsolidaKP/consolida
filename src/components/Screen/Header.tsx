import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1a202c;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0;
`;

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <HeaderContainer>
      <Title>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</Title>
    </HeaderContainer>
  );
};

export default Header;