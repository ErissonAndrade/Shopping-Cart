import Header from '../components/Header';
import ProductsCarousel from '../features/ProductsCarousel';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <>
            <Header />
            <main data-testid="homepage">
                <ProductsCarousel />
            </main>
            <Footer />
        </>
    );
};

export default Homepage;