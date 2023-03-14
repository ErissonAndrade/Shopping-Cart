import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from '../../CartContext';

it('renders the logo correctly', () => {
  render(
    <BrowserRouter>
      <CartContextProvider>
        <Header />
      </CartContextProvider>
    </BrowserRouter>
  );
  const logoImg = screen.getByRole("img");
  expect(logoImg).toHaveAttribute('src', 'logo.png');
  expect(logoImg).toHaveAttribute('alt', 'company-logo');
});

it('rendering correctly', () => {
  render(
    <BrowserRouter>
      <CartContextProvider>
        <Header />
      </CartContextProvider>
    </BrowserRouter>
  );
  const header = screen.getByRole('heading')
  expect(header).toMatchSnapshot();
});


