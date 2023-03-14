import { render, screen, fireEvent } from '@testing-library/react';
import CartContextProvider from '../../CartContext';
import RouteSwitch from '../../RouteSwitch';

it('homepage is rendering before any other page', () => {
    render(
        <CartContextProvider>
            <RouteSwitch />
        </CartContextProvider>
    );

    const homePage = screen.getByTestId("homepage");

    expect(homePage).toBeInTheDocument();
});

it('navigates to shopping cart', () => {
    render(
        <CartContextProvider>
            <RouteSwitch />
        </CartContextProvider>
    );

    const shoppingCartBtn = screen.getByTestId('shoppingCartIcon');
    fireEvent.click(shoppingCartBtn);
    const shoppingCartPage = screen.getByTestId('shoppingCartPage');

    expect(shoppingCartPage).toBeInTheDocument();
});