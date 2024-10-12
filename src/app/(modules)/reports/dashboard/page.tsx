'use client'

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideBar from '@/components/Screen/SideBar';
import Header from '@/components/Screen/Header';
import AIAssistant from '@/components/aiAsistant/AIAssistant';
import Loading from '@/components/Loading';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';

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
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return null; // O podrías mostrar un mensaje de "No autorizado"
  }

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

export default Dashboard;