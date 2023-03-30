import React, {
  Children,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface TransationsProps {
  id: number;
  description: string;
  type: string;
  category: string;
  price: number;
  createAt: string;
}

interface TransactionContextType {
  transactions: TransationsProps[];
}
interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransations] = useState<TransationsProps[]>([]);

  async function loadTransations() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();
    setTransations(data);
  }
  useEffect(() => {
    loadTransations();
  }, []);
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
