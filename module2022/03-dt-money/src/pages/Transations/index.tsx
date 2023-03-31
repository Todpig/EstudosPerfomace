import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SeachForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransationsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import {
  PriceHighlight,
  TransationsContainer,
  TransationsTable,
} from "./styles";
import { useContextSelector } from "use-context-selector";

export function Transations() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <div>
      <Header />
      <Summary />
      <TransationsContainer>
        <SearchForm />
        <TransationsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransationsTable>
      </TransationsContainer>
    </div>
  );
}
