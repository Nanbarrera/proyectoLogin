import React, { createContext, useState } from 'react';

// Crea el contexto
export const ProductContext = createContext();

// Crea el proveedor del contexto
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // Añadir producto al carrito
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

    // Eliminar producto del carrito
    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    // Actualizar la cantidad de un producto
    const updateProductQuantity = (id, quantity) => {
        setProducts(products.map(product =>
            product.id === id
                ? { ...product, quantity }
                : product
        ));
    };

    // Limpiar todos los productos del carrito
    const clearProducts = () => {
        setProducts([]); // Restablece la lista de productos a un array vacío
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProductQuantity, clearProducts }}>
            {children}
        </ProductContext.Provider>
    );
};




// import React, { createContext, useState } from 'react';

// // Crea el contexto
// export const ProductContext = createContext();

// // Crea el proveedor del contexto
// export const ProductProvider = ({ children }) => {
//     const [products, setProducts] = useState([]);

//     // Añadir producto al carrito
//     const addProduct = (product) => {
//         setProducts(prevProducts => {
//             // Verifica si el producto ya está en el carrito
//             const existingProduct = prevProducts.find(p => p.id === product.id);
//             if (existingProduct) {
//                 return prevProducts.map(p =>
//                     p.id === product.id
//                         ? { ...p, quantity: (p.quantity || 1) + 1 }
//                         : p
//                 );
//             } else {
//                 return [...prevProducts, { ...product, quantity: 1 }];
//             }
//         });
//     };

//     // Eliminar producto del carrito
//     const deleteProduct = (id) => {
//         setProducts(products.filter(product => product.id !== id));
//     };

//     // Actualizar la cantidad de un producto
//     const updateProductQuantity = (id, quantity) => {
//         setProducts(products.map(product =>
//             product.id === id
//                 ? { ...product, quantity }
//                 : product
//         ));
//     };

//     // Limpiar todos los productos del carrito
//     const clearProducts = () => {
//         setProducts([]); // Restablece la lista de productos a un array vacío
//     };

//     return (
//         <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProductQuantity, clearProducts }}>
//             {children}
//         </ProductContext.Provider>
//     );
// };