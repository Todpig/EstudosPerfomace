import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SeachForm";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransationsContainer,
  TransationsTable,
} from "./styles";

export function Transations() {
  return (
    <div>
      <Header />
      <Summary />
      <TransationsContainer>
        <SearchForm />
        <TransationsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 1200,00 </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 50,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>15/03/2023</td>
            </tr>
          </tbody>
        </TransationsTable>
      </TransationsContainer>
    </div>
  );
}
