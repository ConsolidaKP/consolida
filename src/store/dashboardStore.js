import create from 'zustand';

const useDashboardStore = create((set) => ({
  dashboardData: null,
  isLoading: false,
  error: null,
  fetchDashboardData: async () => {
    set({ isLoading: true });
    try {
      // Aquí iría la lógica para obtener los datos del backend
      const data = await fetch('/api/dashboard').then(res => res.json());
      set({ dashboardData: data, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default useDashboardStore;