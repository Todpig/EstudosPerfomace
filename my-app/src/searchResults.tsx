import { useMemo } from "react";
import { ProductItem } from "./ProductItem";


interface SearchResultsProps {
  results: Array<{
    id: number;
    name: string;
    price: number;
  }>
  onAddToWishList:(id:number) => void;
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
   const totalPrice = useMemo(()=>{
    return results.reduce((total, product) => {
      return total + product.price;
  }, 0)
   }, [results])


  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.length > 0 ? (
        results.map((product) => {
          return <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList}/>;
        })
      ) : (
        <p>Nenhum resultado encontrado</p>
      )}
    </div>
  );
}
