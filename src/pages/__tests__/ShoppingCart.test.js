import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider, { CartContext } from '../../CartContext';
import ShoppingCart from '../ShoppingCart';
import { useContext } from 'react';

const MockShoppingCart = () => {
  const { addItems } = useContext(CartContext);

  return (
    <>
      <button onClick={() => addItems('test name', 12.00, 1, 'test image', 'test id')}>Mock Add Item</button>
      <ShoppingCart />
    </>
  );
}

it('show items on cart', () => {
  render(
    <BrowserRouter>
      <CartContextProvider>
        <MockShoppingCart />
      </CartContextProvider>
    </BrowserRouter>
  );

  const addItemBtn = screen.getByRole('button', { name: /mock add item/i })
  fireEvent.click(addItemBtn)

  const item = screen.getByText(/test name/i)

  expect(item).toBeInTheDocument();
});

it('increment and decrement item quantity', () => {
  render(
    <BrowserRouter>
      <CartContextProvider>
        <MockShoppingCart />
      </CartContextProvider>
    </BrowserRouter>
  );

  const addItemBtn = screen.getByRole('button', { name: /mock add item/i })
  fireEvent.click(addItemBtn)

  const itemQuantity = screen.getByTestId('itemQuantity');
  const incrementItemsBtn = screen.getByTestId('incrementItems')
  const decrementItemsBtn = screen.getByTestId('decrementItems')

  fireEvent.click(incrementItemsBtn);
  expect(itemQuantity.textContent).toBe('2');

  fireEvent.click(decrementItemsBtn);
  expect(itemQuantity.textContent).toBe('1');
})

it('delete item from cart', () => {
  render(
    <BrowserRouter>
      <CartContextProvider>
        <MockShoppingCart />
      </CartContextProvider>
    </BrowserRouter>
  );

  const addItemBtn = screen.getByRole('button', { name: /mock add item/i });
  fireEvent.click(addItemBtn);

  const item = screen.getByText(/test name/i);
  const deleteItemsBtn = screen.getByTestId('deleteItems');

  fireEvent.click(deleteItemsBtn);

  expect(item).not.toBeInTheDocument();
})

it('show total value of items in cart', () => {
  render(
    <BrowserRouter>
      <CartContextProvider>
        <MockShoppingCart />
      </CartContextProvider>
    </BrowserRouter>
  );

  const addItemBtn = screen.getByRole('button', { name: /mock add item/i })
  fireEvent.click(addItemBtn);
  fireEvent.click(addItemBtn);

  const totalValue = screen.getByTestId('totalPrice');

  expect(totalValue.textContent).toBe('Total: $24.00');
})

it('prevent the same item to be added to cart, instead change its quantity', () => {
  render(
    <BrowserRouter>
      <CartContextProvider>
        <MockShoppingCart />
      </CartContextProvider>
    </BrowserRouter>
  );

  const addItemBtn = screen.getByRole('button', { name: /mock add item/i })
  fireEvent.click(addItemBtn);
  fireEvent.click(addItemBtn);

  const itemQuantity = screen.getByTestId('itemQuantity');

  expect(itemQuantity.textContent).toBe('2');
});