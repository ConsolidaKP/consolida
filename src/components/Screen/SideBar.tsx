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
  border: '1px solid black';
  background-color: ${props => props.active ? '#007bff' : 'transparent'};
  color: ${props => props.active ? 'white' : 'black'};
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 20px 20px 20px 20px;

  &:hover {
    background-color: ${props => props.active ? '#007bff' : '#e0e0e0'};
  }
`;

const MenuButton = styled.button`
  position: fixed;
  bottom: 10px;
  left: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1001;
  border-radius: 5px;
`;

interface SideBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'overview', name: 'Overview' },
    { id: 'sales', name: 'Sales' },
    { id: 'inventory', name: 'Inventory' },
    { id: 'customers', name: 'Customers' },
    { id: 'reports', name: 'Reports' },
  ];

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        ☰
      </MenuButton>
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