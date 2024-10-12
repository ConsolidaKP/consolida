import { create } from "zustand";

interface BillDetailsStore {
  paymentMethods: PaymentMethod[];
  documentTypes: Document$Type[];
  isRestaurant: boolean;

  setPaymentMethods: (paymentMethods: PaymentMethod[]) => void;
  setDocumentTypes: (documentTypes: Document$Type[]) => void;
  setIsRestaurant: (isRestaurant: boolean) => void;
}

export const useBillDetailsStore = create<BillDetailsStore>((set) => ({
  paymentMethods: [],
  documentTypes: [],
  isRestaurant: false,
  
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
  setDocumentTypes: (documentTypes) => set({ documentTypes }),
  setIsRestaurant: (isRestaurant) => set({ isRestaurant }),
}));

// *'##################################################/*

interface QuoteDetailsStore {
  paymentMethods: PaymentMethod[];
  documentTypes: Document$Type[];
  isRestaurant: boolean;

  setPaymentMethods: (paymentMethods: PaymentMethod[]) => void;
  setDocumentTypes: (documentTypes: Document$Type[]) => void;
  setIsRestaurant: (isRestaurant: boolean) => void;
}

export const useQuoteDetailsStore = create<QuoteDetailsStore>((set) => ({
  paymentMethods: [],
  documentTypes: [],
  isRestaurant: false,
  
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
  setDocumentTypes: (documentTypes) => set({ documentTypes }),
  setIsRestaurant: (isRestaurant) => set({ isRestaurant }),
}));


