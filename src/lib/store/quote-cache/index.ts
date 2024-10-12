import { create } from "zustand";

interface QuoteCache {
  quote: Quote | null;
  setQuote: (quote: Quote) => void;
}

export const useQuoteCache = create<QuoteCache>((set) => ({
  quote: null,
  setQuote: (quote) => set({ quote }),
}));
