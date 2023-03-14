import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ShoppingButton from './buttons/ShoppingButton';
import product from './styles/product.module.css'
import { Link } from 'react-router-dom';

const Product = ({ title, price, img, addToCart, buyNow }) => {
  return (
    <Card sx={{
      maxWidth: 400,
      textAlign: 'center',
    }}
      elevation={10}
      role="card"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img}
        />
        <CardContent>
          <Typography variant="h6" role="title">
            {title}
          </Typography>
          <Typography variant="h6" role="price">
            Price: ${price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <div className={product.shoppingBtns}>
          <ShoppingButton
            onClick={addToCart}
            buttonName={"Add to Cart"}
          />
          <Link to="/shopping-cart">
            <ShoppingButton
              onClick={buyNow}
              buttonName={"Buy Now"}
            />
          </Link>
        </div>
      </CardActions>
    </Card>
  );
};

export default Product;