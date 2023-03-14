import Dropdown from '../features/Dropdown';
import products from '../data/products'
import MenuItem from '@mui/material/MenuItem';
import uniqid from 'uniqid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from "../CartContext";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { items } = useContext(CartContext);

    return (
        <nav>
            <ul>
                {products.map(product => {
                    return (
                        <li key={uniqid()}>
                            <Dropdown
                                label={product.label}
                                key={product.id}
                                categories={
                                    product.categories.map(category => {
                                        return (
                                            <Link to={category.path} key={uniqid()}>
                                                <MenuItem
                                                    key={category.id}
                                                    sx={{
                                                        display: 'flex',
                                                        fontSize: '.9rem',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {category.label}
                                                </MenuItem>
                                            </Link>
                                        )
                                    })
                                }
                            />
                        </li>
                    );
                })}
                <Link to="/shopping-cart">
                    <li data-testid="shoppingCartIcon">
                        <ShoppingCartIcon sx={{ fontSize: 35 }} />
                        <span data-testid="itemsOnCart">
                            {items.length}
                        </span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default NavBar;