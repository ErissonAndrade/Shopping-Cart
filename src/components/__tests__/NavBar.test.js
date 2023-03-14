import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../NavBar';
import products from '../../data/products'
import CartContextProvider from '../../CartContext';
import { BrowserRouter } from 'react-router-dom';

describe('Dropdown feature', () => {
    it('render all dropdowns', () => {
        render(
            <BrowserRouter>
                <CartContextProvider>
                    <NavBar />
                </CartContextProvider>
            </BrowserRouter>
        );
        const dropDownBtns = screen.getAllByRole('button');
        const labels = products.map(product => product.label);
        expect(dropDownBtns.length).toBe(labels.length);
    });

    it('render menu when clicked', () => {
        render(
            <BrowserRouter>
                <CartContextProvider>
                    <NavBar />
                </CartContextProvider>
            </BrowserRouter>
        );
        const dropDownBtns = screen.getAllByRole('button');
        dropDownBtns.forEach(button => {
            fireEvent.click(button)
        })
        const menu = screen.getByRole('menu')
        expect(menu).toBeInTheDocument();
    });
});
