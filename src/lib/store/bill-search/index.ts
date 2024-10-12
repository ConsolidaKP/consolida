import { DateRange } from "react-day-picker";
import { create } from "zustand";

interface BillSearchStore {
  cliente: string;
  pedido: string;
  tipo: string;
  orden: string;
  micaja: 1 | 0;
  bills: Invoice[];
  date: DateRange;
  loading: boolean;

  setDate: (date: DateRange | undefined) => void;
  setCliente: (cliente: string) => void;
  setPedido: (pedido: string) => void;
  setTipo: (tipo: string) => void;
  setOrden: (orden: string) => void;
  setMicaja: (micaja: 1 | 0) => void;
  setBills: (bills: Invoice[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useBillSearchStore = create<BillSearchStore>((set) => ({
  cliente: "",
  date: { from: new Date(), to: new Date() },
  pedido: "",
  tipo: "",
  orden: "",
  micaja: 0,
  bills: [],
  loading: false,

  setCliente: (cliente) => set({ cliente }),
  setDate: (date) => set({ date }),
  setPedido: (pedido) => set({ pedido }),
  setTipo: (tipo) => set({ tipo }),
  setOrden: (orden) => set({ orden }),
  setMicaja: (micaja) => set({ micaja }),
  setBills: (bills) => set({ bills }),
  setLoading: (loading) => set({ loading }),
}));
