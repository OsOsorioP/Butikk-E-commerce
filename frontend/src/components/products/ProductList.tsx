import ProductCard from './ProductCard';

interface ProductListProps {
  products: { id: number, title: string, image: string, price: string }[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};
