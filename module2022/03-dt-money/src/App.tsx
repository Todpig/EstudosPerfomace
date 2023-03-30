import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransationsContext";
import { Transations } from "./pages/Transations";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsProvider>
        <Transations />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
