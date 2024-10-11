'use client'

import React from 'react';
import styled from 'styled-components';

const SideBarContainer = styled.nav`
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  margin: 5px 0;
  border: none;
  background-color: ${props => props.active ? '#007bff' : 'transparent'};
  color: ${props => props.active ? 'white' : 'black'};
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0 25px 25px 0;

  &:hover {
    background-color: ${props => props.active ? '#007bff' : '#e0e0e0'};
  }
`;

interface SideBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'overview', name: 'Overview' },
    { id: 'sales', name: 'Sales' },
    { id: 'inventory', name: 'Inventory' },
    { id: 'customers', name: 'Customers' },
    { id: 'reports', name: 'Reports' },
  ];

  return (
    <SideBarContainer>
      {sections.map(section => (
        <TabButton
          key={section.id}
          active={activeSection === section.id}
          onClick={() => setActiveSection(section.id)}
        >
          {section.name}
        </TabButton>
      ))}
    </SideBarContainer>
  );
};

export default SideBar;