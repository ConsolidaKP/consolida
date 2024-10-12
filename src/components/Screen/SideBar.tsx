import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

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
    <Box
      as="nav"
      top="60px"
      width="60px"
      bg="#2d3748"
      display="flex"
      flexDirection="column"
      position="fixed"
      left="0"
      height="calc(100% - 60px)"
      zIndex="1000"
      pt="20px"
    >
      <VStack spacing="10px">
        {sections.map(section => (
          <Button
            key={section.id}
            width="40px"
            height="40px"
            bg={activeSection === section.id ? '#4299e1' : 'transparent'}
            color={activeSection === section.id ? 'white' : '#a0aec0'}
            fontSize="16px"
            fontWeight="600"
            borderRadius="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              bg: activeSection === section.id ? '#4299e1' : '#4a5568',
              color: 'white',
            }}
            onClick={() => setActiveSection(section.id)}
          >
            {section.name}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default SideBar;