// import React, { useState } from 'react';
// import { FaPlus } from 'react-icons/fa';
// import './producto.css';
// import { useNavigate } from 'react-router-dom';

// const ProductoP = ({ onModify }) => {
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     unit: 'piece',
//     costPrice: '',
//     profit: '',
//     salePrice: '',
//     category: '',
//     usesInventory: false,
//     icon: ''
//   });
//   const navigate = useNavigate();

//   const [categories, setCategories] = useState(['Jabon', 'Bebida', 'Sabritas']);
//   const [newCategory, setNewCategory] = useState('');
//   const [addingCategory, setAddingCategory] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const val = type === 'checkbox' ? checked : value;
//     setProduct({
//       ...product,
//       [name]: val
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('New Product:', product);
//     setProduct({
//       name: '',
//       description: '',
//       unit: 'piece',
//       costPrice: '',
//       profit: '',
//       salePrice: '',
//       category: '',
//       usesInventory: false,
//       icon: ''
//     });
//   };

//   const handleAddCategory = () => {
//     if (newCategory.trim() !== '') {
//       setCategories([...categories, newCategory]);
//       setProduct({ ...product, category: newCategory });
//       setNewCategory('');
//       setAddingCategory(false);
//     }
//   };

//   const handleNew = () => {
//     console.log('Nuevo producto');
//   };

//   const handleCancel = () => {
//     console.log('Cancelar');
//   };

//   const handleNavigation = () => {
//     navigate('/Pmodificar');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="formP">
//       <div className="button-containerP">
//         <button type="button" onClick={handleNew} className="top-buttonP">Nuevo</button>
//         <button type="button" onClick={handleNavigation} className="top-buttonP">Modificar</button>
//       </div>
//       <div className="input-containerP">
//         <label>Nombre:</label>
//         <input
//           type="text"
//           name="name"
//           value={product.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="input-containerP">
//         <label>Descripción:</label>
//         <input
//           type="text"
//           name="description"
//           value={product.description}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="input-containerP">
//         <label>Se vende por:</label>
//         <select
//           name="unit"
//           value={product.unit}
//           onChange={handleChange}
//           required
//         >
//           <option value="piece">Pieza</option>
//           <option value="kilo">Kilo</option>
//           <option value="package">Paquete</option>
//         </select>
//       </div>
//       <div className="input-with-iconP">
//         <label>
//           <div className="input-containerP">
//             Precio costo:
//             <div className="input-with-symbolP">
//               <span>$</span>
//               <input
//                 type="number"
//                 name="costPrice"
//                 value={product.costPrice}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//         </label>
//       </div>
//       <div className="input-with-iconP">
//         <label>
//           <div className="input-containerP">
//             Precio de venta:
//             <div className="input-with-symbolP">
//               <span>$</span>
//               <input
//                 type="number"
//                 name="salePrice"
//                 value={product.salePrice}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//         </label>
//       </div>
//       <div>
//         <label>Categoría:</label>
//         <select
//           name="category"
//           value={product.category}
//           onChange={(e) => {
//             if (e.target.value === 'addNew') {
//               setAddingCategory(true);
//               setProduct({ ...product, category: '' });
//             } else {
//               setAddingCategory(false);
//               handleChange(e);
//             }
//           }}
//           required
//         >
//           <option value="">Seleccionar</option>
//           {categories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//           <option value="addNew">Agregar nueva categoría</option>
//         </select>
//         {addingCategory && (
//           <div className="new-category-containerP">
//             <input
//               type="text"
//               value={newCategory}
//               onChange={(e) => setNewCategory(e.target.value)}
//               placeholder="Nueva categoría"
//               required
//             />
//             <button type="button" onClick={handleAddCategory} className="add-category-buttonP">
//               <FaPlus /> Agregar
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="input-containerP">
//         <label>
//           Utiliza inventario:
//           <input
//             type="checkbox"
//             name="usesInventory"
//             checked={product.usesInventory}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       <div className="min-max-containerP">
//         <span className="min-max-labelP">Mínimo:</span>
//         <input
//           type="number"
//           name="minProfit"
//           className="min-max-inputP"
//           value={product.minProfit}
//           onChange={handleChange}
//         />
//         <span className="min-max-labelP">Máximo:</span>
//         <input
//           type="number"
//           name="maxProfit"
//           className="min-max-inputP"
//           value={product.maxProfit}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="button-containerP">
//         <button type="submit" className="bottom-buttonP">Guardar</button>
//         <button type="button" onClick={handleCancel} className="bottom-buttonP">Cancelar</button>
//       </div>
//     </form>
//   );
// };

// export default Pr 














































































//4
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductoForm = ({ producto, onSuccess }) => {
    const [nombre, setNombre] = useState(producto ? producto.nombre : '');
    const [descripcion, setDescripcion] = useState(producto ? producto.descripcion : '');
    const [costoCompra, setCostoCompra] = useState(producto ? producto.costo_compra : '');
    const [precioVenta, setPrecioVenta] = useState(producto ? producto.precio_venta : '');
    const [categoria, setCategoria] = useState(producto ? producto.categoria_id : '');
    const [stock, setStock] = useState(producto ? producto.stock : '');
    const [categorias, setCategorias] = useState([]);
    const [nuevaCategoria, setNuevaCategoria] = useState('');
    const [nuevaDescripcion, setNuevaDescripcion] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const PRODUCTOS_URI = 'http://localhost:4000/api/productos';
    const CATEGORIAS_URI = 'http://localhost:4000/api/categorias';

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get(CATEGORIAS_URI);
                setCategorias(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategorias();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let categoriaId = categoria;

        // Si la categoría no existe, crear una nueva categoría
        if (categoria === 'nueva' && nuevaCategoria) {
            try {
                const response = await axios.post(CATEGORIAS_URI, { nombre: nuevaCategoria, descripcion: nuevaDescripcion });
                categoriaId = response.data.id;
            } catch (error) {
                console.error('Error creating new category:', error);
                setErrorMessage('Error al crear la nueva categoría');
                return;
            }
        }

        try {
            const response = producto
                ? await axios.put(`${PRODUCTOS_URI}/${producto.id}`, {
                    nombre,
                    descripcion,
                    costo_compra: costoCompra,
                    precio_venta: precioVenta,
                    categoria_id: categoria,
                    stock
                })
                : await axios.post(PRODUCTOS_URI, {
                    nombre,
                    descripcion,
                    costo_compra: costoCompra,
                    precio_venta: precioVenta,
                    categoria_id: categoria,
                    stock
                });
            console.log('Producto guardado:', response.data);
            setSuccessMessage(producto ? 'Producto editado correctamente' : 'Producto agregado correctamente');
            setTimeout(() => {
                setSuccessMessage('');
                onSuccess(); // Llamar a la función onSuccess para manejar el éxito de la acción
            }, 2000); // Oculta el mensaje después de 2 segundos
        } catch (error) {
            console.error('Error saving product:', error);
            setErrorMessage(producto ? 'Error al editar el producto' : 'Error al agregar el producto');
            setTimeout(() => setErrorMessage(''), 2000); // Oculta el mensaje después de 2 segundos
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
            </div>
            <div>
                <label>Costo de compra:</label>
                <input type="number" value={costoCompra} onChange={(e) => setCostoCompra(e.target.value)} required />
            </div>
            <div>
                <label>Precio de venta:</label>
                <input type="number" value={precioVenta} onChange={(e) => setPrecioVenta(e.target.value)} required />
            </div>
            <div>
                <label>Categoría:</label>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                    <option value="">Seleccione una categoría</option>
                    {categorias.length > 0 && categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                    ))}
                    <option value="nueva">Agregar nueva categoría</option>
                </select>
                {categoria === 'nueva' && (
                    <div>
                        <label>Nombre de la Nueva Categoría:</label>
                        <input type="text" value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)} required />
                        <label>Descripción de la Nueva Categoría:</label>
                        <input type="text" value={nuevaDescripcion} onChange={(e) => setNuevaDescripcion(e.target.value)} required />
                    </div>
                )}
            </div>
            <div>
                <label>Stock:</label>
                <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
            </div>
            <button type="submit">{producto ? 'Editar Producto' : 'Agregar Producto'}</button>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
    );
};

export default ProductoForm;
