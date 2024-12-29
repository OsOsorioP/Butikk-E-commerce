import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price }) => {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
