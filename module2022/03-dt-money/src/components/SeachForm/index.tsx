import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { memo } from "react";

function SearchFormComponent() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        {" "}
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}

export const SearchForm = memo(SearchFormComponent);
