import React, { createContext, useState, useCallback } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = useCallback((product) => {
        setProducts(prevProducts => {
            const existingProduct = prevProducts.find(p => p.id === product.id);
            if (existingProduct) {
                return prevProducts.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...prevProducts, { ...product, quantity: 1 }];
            }
        });
    }, []);

    const deleteProduct = useCallback((id) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    }, []);

    const updateProductQuantity = useCallback((id, quantity) => {
        if (quantity < 1) return; // Validación para que la cantidad no sea menor que 1
        setProducts(prevProducts => prevProducts.map(product =>
            product.id === id ? { ...product, quantity } : product
        ));
    }, []);

    const clearProducts = useCallback(() => {
        setProducts([]);
    }, []);

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProductQuantity, clearProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
