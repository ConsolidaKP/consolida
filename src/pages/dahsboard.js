import { useEffect } from 'react';
import useDashboardStore from '../store/dashboardStore';
import TopProductsChart from '../components/Dashboard/TopProductsChart';
// Importa otros componentes de gráficos aquí

const DashboardPage = () => {
  const { dashboardData, isLoading, error, fetchDashboardData } = useDashboardStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!dashboardData) return null;

  return (
    <div>
      <h1>Dashboard</h1>
      <TopProductsChart data={dashboardData.topProducts} />
      {/* Agrega más componentes de gráficos aquí */}
    </div>
  );
};

export default DashboardPage;