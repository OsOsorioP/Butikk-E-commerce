import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
interface ProductCardProps {
  title: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price }) => {
  return (
    <Card
      sx={{
        maxWidth: 200,
        margin: '10px',
        padding: '10px',
        border: '1px solid #f0f0f0',
        "&:hover": {
          borderColor: '#000000',
          boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
          cursor: 'pointer'
        },
        transition: 'all 0.4s ease-in-out',
      }}
    >
      <CardMedia
        component="img"
        height={200}
        image={image}
        alt={title}
        sx={{ objectFit: 'contain' }}
      />

      <CardContent component={'div'}>
        <Typography variant="h6" sx={{ textAlign: 'left' }} >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', padding: '0px' }}>
          <Typography variant="h6">
            {price}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </CardContent>

    </Card>
  );
};

export default ProductCard;
