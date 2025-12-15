import React, { useState, useEffect } from 'react';
import { CartContext } from './CartContext';

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Cargar el carrito desde localStorage al iniciar
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Función para calcular el precio unitario con descuento
    const computeUnitPriceWithDiscount = (price, discountPercent = 0) => {
        const p = Number(price) || 0;
        const d = Math.min(Math.max(Number(discountPercent) || 0, 0), 100);
        return Number((p * (1 - d / 100)).toFixed(2));
    };

    // Función para agregar un producto al carrito
    const addCart = (product, qty = 1) => {
        setCartItems(prevItems => {
            const price = Number(product.price) || 0;
            const discountPercent = product.discountPercent ?? product.discount ?? 0;
            const unitPriceWithDiscount = computeUnitPriceWithDiscount(price, discountPercent);
            const stock = product.stock ?? 10;

            const existing = prevItems.find(it => it.id === product.id);
            if (existing) {
                const newQty = Math.min(existing.quantity + qty, stock);
                if (existing.quantity >= stock) {
                    alert("Ya agregaste el máximo de unidades disponibles.");
                    return prevItems;
                }
                return prevItems.map(it =>
                    it.id === product.id ? { ...it, quantity: newQty } : it
                );
            } else {
                const toAdd = {
                    ...product,
                    price, // precio unitario original (snapshot)
                    discountPercent,
                    unitPriceWithDiscount,
                    quantity: Math.min(qty, stock),
                };
                return [...prevItems, toAdd];
            }
        });
    };


    // Función para eliminar un producto del carrito
    const removeCart = (productId) => {
        if (!window.confirm("¿Seguro que quieres eliminar el producto?")) return;
        setCartItems((prevItems) =>
            prevItems.filter(item => item.id !== productId)
        );
    };

    // Función para limpiar el carrito
    const clearCart = () => {
        if (!window.confirm("¿Seguro de vaciar el carrito de compras?")) return;
        setCartItems([]);
    }

    // Actualizar cantidad directa (valida stock y mínimo 1)
    const updateQuantity = (productId, newQuantity) => {
        setCartItems(prev => {
            return prev.map(item => {
                if (item.id !== productId) return item;
                const stock = item.stock ?? 10;
                let q = Number(newQuantity) || 0;
                if (q <= 0) q = 1;
                if (q > stock) q = stock;
                return { ...item, quantity: q };
            });
        });
    };

    const increase = (productId) => {
        setCartItems(prev => prev.map(item => {
            if (item.id !== productId) return item;
            const stock = item.stock ?? 10;
            const next = Math.min(item.quantity + 1, stock);
            return { ...item, quantity: next };
        }));
    };

    const decrease = (productId) => {
        setCartItems(prev => prev.map(item => {
            if (item.id !== productId) return item;
            const next = Math.max(item.quantity - 1, 1);
            return { ...item, quantity: next };
        }));
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            addCart,
            removeCart,
            clearCart,
            updateQuantity,
            increase,
            decrease
        }}>
            {children}
        </CartContext.Provider>
    );
}
