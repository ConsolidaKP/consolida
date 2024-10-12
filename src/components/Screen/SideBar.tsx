import React from 'react';
import styled from 'styled-components';

const SideBarContainer = styled.nav`
  top: 60px;
  width: 60px;
  background-color: #2d3748;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  height: calc(100% - 60px);
  z-index: 1000;
  padding-top: 20px;
`;

const TabButton = styled.button<{ active: boolean }>`
  width: 40px;
  height: 40px;
  margin: 10px auto;
  border: none;
  background-color: ${props => props.active ? '#4299e1' : 'transparent'};
  color: ${props => props.active ? 'white' : '#a0aec0'};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${props => props.active ? '#4299e1' : '#4a5568'};
    color: white;
  }
`;

interface SideBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'dashboard', name: 'D' },
    { id: 'sales', name: 'S' },
    { id: 'inventory', name: 'I' },
    { id: 'customers', name: 'C' },
    { id: 'reports', name: 'R' },
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