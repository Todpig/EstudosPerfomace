import React, { ReactNode, useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface TransationsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createAt: string;
}

interface CreateTransationsInputs {
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
}
interface TransactionContextType {
  transactions: TransationsProps[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransactions: (data: CreateTransationsInputs) => Promise<void>;
}
interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransations] = useState<TransationsProps[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setTransations(response.data);
  }, []);

  const createTransactions = useCallback(
    async (data: CreateTransationsInputs) => {
      const { description, price, category, type } = data;

      const response = await api.post("/transactions", {
        description,
        price,
        category,
        type,
        createAt: new Date(),
      });
      setTransations((state) => [response.data, ...state]);
    },
    []
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
