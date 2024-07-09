import React, { createContext, useState } from 'react';

// Crea el contexto
export const ProductContext = createContext();

// Crea el proveedor del contexto
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts(prevProducts => {
            // Verifica si el producto ya está en el carrito
            const existingProduct = prevProducts.find(p => p.id === product.id);
            if (existingProduct) {
                return prevProducts.map(p =>
                    p.id === product.id
                        ? { ...p, quantity: (p.quantity || 1) + 1 }
                        : p
                );
            } else {
                return [...prevProducts, { ...product, quantity: 1 }];
            }
        });
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const updateProductQuantity = (id, quantity) => {
        setProducts(products.map(product =>
            product.id === id
                ? { ...product, quantity }
                : product
        ));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProductQuantity }}>
            {children}
        </ProductContext.Provider>
    );
};


// import React, { createContext, useState } from 'react';

// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//     const [selectedProducts, setSelectedProducts] = useState([]);

//     const addProduct = (product) => {
//         setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
//     };

//     return (
//         <ProductContext.Provider value={{ selectedProducts, addProduct }}>
//             {children}
//         </ProductContext.Provider>
//     );
// };
