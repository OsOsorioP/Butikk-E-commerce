import { Banner } from '../components/banner/Banner';
import Carousel from '../components/carousel/Carousel';
import {ProductList} from '../components/products/ProductList';
import bannerImage from '../assets/images/banner.jpg';
import roomImage from '../assets/images/room.jpg';

import chair1 from '../assets/images/products/chair-1.jpg';
import chair2 from '../assets/images/products/chair-2.jpg';
import chair3 from '../assets/images/products/chair-3.jpg';
import electronics1 from '../assets/images/products/electronics-1.jpg';
import electronics2 from '../assets/images/products/electronics-2.jpg';
import electronics3 from '../assets/images/products/electronics-3.jpg';
import furniture1 from '../assets/images/products/furniture-1.jpg';
import furniture2 from '../assets/images/products/furniture-2.jpg';
import furniture3 from '../assets/images/products/furniture-3.jpg';

const products = [
  { id: 1, title: 'Chair Blue', image: chair1, price: '$10' },
  { id: 2, title: 'Product 2', image: chair2, price: '$20' },
  { id: 3, title: 'Product 3', image: chair3, price: '$30' },
  { id: 4, title: 'Product 4', image: electronics1, price: '$40' },
  { id: 5, title: 'Product 5', image: electronics2, price: '$50' },
  { id: 6, title: 'Product 6', image: electronics3, price: '$60' },
  { id: 7, title: 'Product 7', image: furniture1, price: '$70' },
  { id: 8, title: 'Product 8', image: furniture2, price: '$80' },
  { id: 9, title: 'Product 9', image: furniture3, price: '$90' },
  { id: 10, title: 'Product 10', image: furniture3, price: '$100' },
];

const HomePage = () => {
  return (
    <>
      <Carousel items={[bannerImage,roomImage,bannerImage]}></Carousel>
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
