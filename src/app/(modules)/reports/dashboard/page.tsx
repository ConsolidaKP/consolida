'use client'

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideBar from '@/components/Screen/SideBar';
import Header from '@/components/Screen/Header';
import AIAssistant from '@/components/aiAsistant/AIAssistant';
import withAuth from '@/components/auth/withAuth';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.main`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <DashboardContainer>
      <SideBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Header activeSection={activeSection} />
        <ContentArea>
          {/* Aquí irá el contenido específico de cada sección */}
        </ContentArea>
        <AIAssistant />
      </div>
    </DashboardContainer>
  );
};

export default withAuth(Dashboard);