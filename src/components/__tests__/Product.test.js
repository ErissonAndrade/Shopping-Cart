import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Product from '../Product';
import CartContextProvider from "../../CartContext";
import bracelet from '../../assets/images/bracelet.jpeg';

it('display title,price and image correctly', () => {
    render(
        <BrowserRouter>
            <CartContextProvider>
                <Product
                    title={"Test Title"}
                    price={45}
                    img={bracelet}
                />
            </CartContextProvider>
        </BrowserRouter>
    );

    const title = screen.getByRole("title");
    const price = screen.getByRole("price");
    const img = screen.getByRole("img");

    expect(title.textContent).toBe("Test Title");
    expect(price.textContent).toBe("Price: $45.00");
    expect(img.src).toBe("http://localhost/bracelet.jpeg");
});


it('add to cart and buy now buttons are working', () => {
    const addToCartMock = jest.fn();
    const buyNowMock = jest.fn();

    render(
        <BrowserRouter>
            <CartContextProvider>
                <Product
                    title={"Test Title"}
                    price={45}
                    img={bracelet}
                    addToCart={addToCartMock}
                    buyNow={buyNowMock}
                />
            </CartContextProvider>
        </BrowserRouter>
    );

    const addToCartBtn = screen.getByText(/add to cart/i);
    const buyNowBtn = screen.getByText(/buy now/i);

    fireEvent.click(addToCartBtn);
    fireEvent.click(buyNowBtn);

    expect(addToCartMock).toHaveBeenCalledTimes(1);
    expect(buyNowMock).toHaveBeenCalledTimes(1);
});
