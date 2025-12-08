import React, { useState, useEffect } from 'react';
import { CartContext } from './CartContext';

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        console.log("Carrito actualizado:", cartItems);
    }, [cartItems]);

    // Función para agregar un producto al carrito
    const addCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);

            const stock = product.stock ?? 10; // Asumir 10 unidades si no se especifica stock

            if (existingItem) {
                if (existingItem.quantity >= stock) {
                    alert("Ya agregaste el máximo de unidades disponibles.");
                    return prevItems;
                }
                // Si el producto ya está en el carrito, aumentar la cantidad
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Si el producto no está en el carrito, agregarlo con cantidad 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Función para eliminar un producto del carrito
    const removeCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter(item => item.id !== productId)
        );
    };

    // Función para limpiar el carrito
    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addCart, removeCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
