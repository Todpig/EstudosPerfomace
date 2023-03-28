import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    priceFormated?: string;
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponet({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      <strong>{product.name}</strong> - {product.id} - valor: {product.price}
      <button onClick={()=> onAddToWishList(product.id)}>add to list</button>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponet, (prevProps, nextProps)=>{
    return Object.is(prevProps.product, nextProps.product)
})