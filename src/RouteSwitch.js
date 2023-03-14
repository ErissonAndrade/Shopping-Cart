import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import products from './data/products';
import ShoppingCart from './pages/ShoppingCart';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                {products.map(product => {
                    return [
                        <Route path={product.path} element={product.element} />,
                        product.categories.map(category => (
                            <Route path={category.path} element={category.element} />
                        ))
                    ];
                })}
                <Route path="/shopping-cart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;