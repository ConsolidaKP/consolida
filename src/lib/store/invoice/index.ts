import { generateDocumentID, generateLineID } from "@/lib/uuid";
import { create } from "zustand";

interface InvoiceStore {
  client: Client | null;
  invoiceLines: InvoiceProductLine[];
  paymentMethod: number;
  isPrinted: 1 | 0;
  total: number;
  docUUID: string;
  notes: string;
  documentType: number;
  discountPercentage: number;

  setClient: (client: Client | null) => void;

  addOneProductLine: (
    product: Product,
    uuid: string,
    isRestaurant?: boolean
  ) => void;

  addManyToProductLine: (
    product: Product,
    amount: number,
    uuid: string,
    isRestaurant?: boolean
  ) => void;

  addDetailedProductLine: (
    product: Product,
    notes: string,
    amount: number,
    uuid: string,
    isRestaurant?: boolean
  ) => void;

  removeOneProductLine: (uuid: string) => void;
  removeAllFromProductLine: (uuid: string) => void;
  reset: () => void;

  setPaymentMethod: (paymentMethod: number) => void;
  setIsPrinted: (isPrinted: 1 | 0) => void;
  setNotes: (notes: string) => void;
  setDocumentType: (documentType: number) => void;
  setDiscountPercentage: (discountPercentage: number) => void;
}

export const useInvoiceStore = create<InvoiceStore>((set) => ({
  client: null,
  invoiceLines: Array<InvoiceProductLine>(),
  paymentMethod: 0,
  isPrinted: 0,
  total: 0,
  notes: "",
  docUUID: generateDocumentID(8),
  documentType: 0,
  discountPercentage: 0,

  setClient: (client) => set({ client }),

  addOneProductLine: (product, uuid, isRestaurant = false) =>
    set((state) => {
      const newLines = [...state.invoiceLines];
      const existingLineIndex = newLines.findIndex(
        ($line) => $line.uuid === uuid
      );

      if (!isRestaurant) {
        existingLineIndex !== -1
          ? (newLines[existingLineIndex].selectedAmount += 1)
          : newLines.push({
              ...product,
              selectedAmount: 1,
              notes: "",
              uuid: generateLineID(),
            });
      } else {
        newLines.push({
          ...product,
          selectedAmount: 1,
          notes: "",
          uuid: generateLineID(),
        });
      }

      state.total += product.tprecio;

      return { invoiceLines: newLines };
    }),

  addManyToProductLine: (product, amount, uuid, isRestaurant = false) =>
    set((state) => {
      const newProducts = [...state.invoiceLines];
      const existingLineIndex = newProducts.findIndex(
        ($product) => $product.uuid === uuid
      );

      if (!isRestaurant) {
        existingLineIndex !== -1
          ? (newProducts[existingLineIndex].selectedAmount += amount)
          : newProducts.push({
              ...product,
              selectedAmount: amount,
              notes: "",
              uuid: generateLineID(),
            });
      } else {
        newProducts.push({
          ...product,
          selectedAmount: amount,
          notes: "",
          uuid: generateLineID(),
        });
      }

      state.total += product.tprecio * amount;

      return {
        invoiceLines: newProducts,
      };
    }),

  addDetailedProductLine: (
    product,
    notes,
    amount,
    uuid,
    isRestaurant = false
  ) =>
    set((state) => {
      const newProducts = [...state.invoiceLines];
      const existingLineIndex = newProducts.findIndex(
        ($product) => $product.uuid === uuid
      );

      if (!isRestaurant) {
        existingLineIndex !== -1
          ? (newProducts[existingLineIndex] = {
              ...newProducts[existingLineIndex],
              selectedAmount:
                newProducts[existingLineIndex].selectedAmount + amount,
              notes,
            })
          : newProducts.push({
              ...product,
              selectedAmount: amount,
              notes,
              uuid: generateLineID(),
            });
      } else {
        newProducts.push({
          ...product,
          selectedAmount: amount,
          notes,
          uuid: generateLineID(),
        });
      }

      state.total += product.tprecio * amount;

      return {
        invoiceLines: newProducts,
      };
    }),

  removeOneProductLine: (uuid) =>
    set((state) => {
      const newProducts = state.invoiceLines
        .map(($product) => {
          if ($product.uuid === uuid && $product.selectedAmount > 0) {
            return { ...$product, selectedAmount: $product.selectedAmount - 1 };
          }
          return $product;
        })
        .filter(($product) => $product.selectedAmount > 0);

      const removedProduct = state.invoiceLines.find(
        ($product) => $product.uuid === uuid
      );
      if (removedProduct) {
        state.total -= removedProduct.tprecio;
      }

      return {
        invoiceLines: newProducts,
      };
    }),

  removeAllFromProductLine: (uuid) =>
    set((state) => {
      const removedProduct = state.invoiceLines.find(
        ($product) => $product.uuid === uuid
      );

      if (removedProduct) {
        state.total -= removedProduct.tprecio * removedProduct.selectedAmount;
      }

      const newProducts = state.invoiceLines.filter(
        ($product) => $product.uuid !== uuid
      );

      return {
        invoiceLines: newProducts,
      };
    }),

  reset: () =>
    set(() => ({
      client: null,
      invoiceLines: [],
      paymentMethod: 0,
      isPrinted: 0,
      total: 0,
      notes: "",
      documentType: 0,
      docUUID: generateDocumentID(8),
      discountPercentage: 0,
    })),

  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
  setIsPrinted: (isPrinted) => set({ isPrinted }),
  setNotes: (notes) => set({ notes }),
  setDocumentType: (documentType) => set({ documentType }),
  setDiscountPercentage: (discountPercentage) => set({ discountPercentage }),
}));
