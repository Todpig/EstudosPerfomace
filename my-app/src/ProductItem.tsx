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
      <strong>NAME:</strong> {product.name}<br/><strong>ID:</strong> {product.id}<br/><strong>VALOR:</strong> {product.price}
      <br/><button onClick={()=> onAddToWishList(product.id)}>add to list</button>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponet, (prevProps, nextProps)=>{
    return Object.is(prevProps.product, nextProps.product)
})