import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/authContext';

const withAuth = (WrappedComponent: React.FC) => {
  const ComponentWithAuth: React.FC = (props) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login'); // Redirige al login si no está autenticado
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // O un componente de carga mientras verifica la autenticación
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;