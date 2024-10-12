'use client'

import React, { useState } from 'react';
import styled from 'styled-components';

const SideBarContainer = styled.nav<{ isOpen: boolean }>`
  top: 70px;
  width: 45px;
  background-color: #f0f0f0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  // left: ${props => props.isOpen ? '0' : '-200px'};
  left: 0px;
  transition: right 0.3s ease;
  height: 100%;
  z-index: 1000;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 10px 10px;
  width: 40px;
  height: 40px;
  margin: 5px 0;
  border: 1px solid black;
  background-color: ${props => props.active ? '#007bff' : '#FFFFFF'};
  color: ${props => props.active ? 'white' : 'black'};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 20px 20px 20px 20px;
  
  &:hover {
    background-color: ${props => props.active ? '#007bff' : '#e0e0e0'};
  }
`;

interface SideBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'Dashboard', name: 'D' },
    { id: 'sales',  name: 'S' },
    { id: 'inventory', name: 'I' },
    { id: 'customers', name: 'C' },
    { id: 'reports', name: 'R' },
  ];

  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        {sections.map(section => (
          <TabButton
            key={section.id}
            active={activeSection === section.id}
            onClick={() => {
              setActiveSection(section.id);
              setIsOpen(false);
            }}
          >
            {section.name}
          </TabButton>
        ))}
      </SideBarContainer>
    </>
  );
};

export default SideBar;