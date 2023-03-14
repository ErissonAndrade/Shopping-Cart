import { createContext, useState } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    function addItems(name, price, quantity, image, id) {
        const itemExists = items.find(item => item.id === id);
        if (itemExists) {
            // updateItems prevents from the same item to be added to cart, instead its quantity is changed
            const updateItems = items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item
                }
            });
            setItems(updateItems);
        }
        else {
            setItems([
                ...items,
                { name, price, quantity, image, id }
            ]);
        }
    };

    function deleteItems(id) {
        const filterItems = items.filter(item => item.id !== id);
        setItems(filterItems);
    }

    function incrementItems(id) {
        const updateItems = items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            else {
                return item
            }
        });
        setItems(updateItems);
    }

    function decrementItems(id) {
        const updateItems = items.map(item => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            else {
                return item
            }
        });
        setItems(updateItems);
    };

    return (
        <CartContext.Provider value={{ items, addItems, incrementItems, decrementItems, deleteItems }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext };
export default CartContextProvider;

