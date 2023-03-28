import React, { FormEvent, useCallback } from "react";
import { useState } from "react";
import { SearchResults } from "./searchResults";

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<
    Array<{ id: number; name: string; price: number }>
  >([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    if (!search.trim()) {
      console.log("estou vazio");
      return;
    }
    const response = await fetch(
      `http://localhost:3333/api/produtos/${search}`
    );
    const data = await response.json();

      // const formated = new Intl.NumberFormat('pt-BR', {
      //   style: 'currency',
      //   currency: 'BRL'
      // })

    // const products = data.map((product: any) => {
    //   return {
    //     id: product.id,
    //     name: product.nome,
    //     price: product.price,
    //     priceFormated: formated.format(product.price)
    //   }
    // })
    setResult([data]);
  }

  const addToWishList = useCallback(async(id: number) => {
    alert(id)
  }, [])

  return (
    <div>
      <h1>search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Vá lá</button>
      </form>
      <SearchResults results={result} onAddToWishList={addToWishList}/>
    </div>
  );
}

export default App;
