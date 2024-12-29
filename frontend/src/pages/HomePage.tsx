import {ProductList} from '../components/products/ProductList';

const products = [
  { id: 1, title: 'Product 1', image: '/path/to/image1.jpg', price: '$10' },
  { id: 2, title: 'Product 2', image: '/path/to/image2.jpg', price: '$20' },
  { id: 3, title: 'Product 3', image: '/path/to/image3.jpg', price: '$30' },
  { id: 4, title: 'Product 4', image: '/path/to/image4.jpg', price: '$40' },
  { id: 5, title: 'Product 5', image: '/path/to/image5.jpg', price: '$50' },
  { id: 6, title: 'Product 6', image: '/path/to/image6.jpg', price: '$60' },
  { id: 7, title: 'Product 7', image: '/path/to/image7.jpg', price: '$70' },
  { id: 8, title: 'Product 8', image: '/path/to/image8.jpg', price: '$80' },
  { id: 9, title: 'Product 9', image: '/path/to/image9.jpg', price: '$90' },
  { id: 10, title: 'Product 10', image: '/path/to/image10.jpg', price: '$100' },
];

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our E-commerce Platform</h1>
      <ProductList products={products} />
    </div>
  );
};
