import { List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton } from "@mui/material";
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import shoppingCart from './styles/shoppingCart.module.css'
import CheckoutButton from '../components/buttons/CheckoutButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCart = () => {
    const { items, incrementItems, decrementItems, deleteItems } = useContext(CartContext);

    return (
        <>
            <Header />
            <main data-testid="shoppingCartPage">
                <List className={shoppingCart.list}>
                    {items.map(item => {
                        return (
                            <ListItem divider={true} className={shoppingCart.listItem} key={`SC${item.id}`}>
                                <ListItemAvatar>
                                    <Avatar alt="product-image" src={item.image} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`Name: ${item.name}`}
                                    secondary={
                                        <span className={shoppingCart.counterContainer} data-testid="itemQuantity">
                                            <IconButton onClick={() => incrementItems(item.id)} data-testid="incrementItems">
                                                <AddCircleIcon />
                                            </IconButton>
                                            {item.quantity}
                                            <IconButton onClick={() => decrementItems(item.id)} data-testid="decrementItems">
                                                <RemoveCircleIcon />
                                            </IconButton>
                                        </span>
                                    }
                                />
                                <ListItemText primary={`Price: R$ ${(item.price * item.quantity).toFixed(2)}`} className={shoppingCart.price} />
                                <IconButton edge="end" onClick={() => deleteItems(item.id)} data-testid="deleteItems">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        )
                    })}
                </List>
            </main>
            <span className={shoppingCart.totalPrice} data-testid="totalPrice">
                Total: $
                {items.reduce((total, item) => {
                    return total + item.price * item.quantity
                }, 0).toFixed(2)}
            </span>
            <CheckoutButton />
            <Footer />
        </>
    );
};

export default ShoppingCart;