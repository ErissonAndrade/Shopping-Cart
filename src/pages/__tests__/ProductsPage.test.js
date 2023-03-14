import { render, screen, fireEvent } from '@testing-library/react';
import ProductsPage from '../ProductsPage';
import animalsPendants from '../../data/pendants/animalsPendants';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from '../../CartContext';

it('renders all cards on page', () => {
    render(
        <BrowserRouter>
            <CartContextProvider>
                <ProductsPage array={animalsPendants} />
            </CartContextProvider>
        </BrowserRouter>
    );
    const cards = screen.getAllByRole('card');
    const allCards = animalsPendants.map(pendant => pendant);
    expect(cards.length).toBe(allCards.length);
});

it('add item to cart', () => {
    render(
        <BrowserRouter>
            <CartContextProvider>
                <ProductsPage array={animalsPendants} />
            </CartContextProvider>
        </BrowserRouter>
    );

    const addToCartBtn = screen.getAllByRole('button', { name: /add to cart/i });
    const itemsOnCart = screen.getByTestId('itemsOnCart');
    fireEvent.click(addToCartBtn[0]);

    expect(itemsOnCart.textContent).toBe('1')
});