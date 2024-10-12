import { create } from "zustand";

interface BillCache {
  bill: Invoice | null;
  setBill: (bill: Invoice) => void;
}

export const useBillCache = create<BillCache>((set) => ({
  bill: null,
  setBill: (bill) => set({ bill }),
}));
