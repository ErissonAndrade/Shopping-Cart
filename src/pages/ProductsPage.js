import Header from '../components/Header';
import Footer from '../components/Footer';
import productsPage from './styles/productsPage.module.css';
import Product from '../components/Product';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const ProductsPage = ({ array }) => {
    const { addItems } = useContext(CartContext);

    return (
        <>
            <Header />
            <main className={productsPage.container} data-testid="productsPage">
                {array.map(item => {
                    return (
                        <Product
                            key={item.id}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            id={item.id}
                            addToCart={() => addItems(item.title, item.price, 1, item.img, item.id)}
                            buyNow={() => addItems(item.title, item.price, 1, item.img, item.id)}
                        />
                    )
                })}
            </main>
            <Footer />
        </>
    );
};

export default ProductsPage;