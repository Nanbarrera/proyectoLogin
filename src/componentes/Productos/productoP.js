import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './producto.css'; 

const ProductoP = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    unit: 'piece',
    costPrice: '',
    profit: '',
    salePrice: '',
    category: '',
    usesInventory: false,
    icon: ''
  });

  const [categories, setCategories] = useState(['Electrónica', 'Ropa', 'Alimentos']);
  const [newCategory, setNewCategory] = useState('');
  const [addingCategory, setAddingCategory] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setProduct({
      ...product,
      [name]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Product:', product);
    // Aquí podrías agregar la lógica para enviar los datos a un servidor
    setProduct({
      name: '',
      description: '',
      unit: 'piece',
      costPrice: '',
      profit: '',
      salePrice: '',
      category: '',
      usesInventory: false,
      icon: ''
    });
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setProduct({ ...product, category: newCategory });
      setNewCategory('');
      setAddingCategory(false);
    }
  };

  const handleNew = () => {
    console.log('Nuevo producto');
    // Lógica para nuevo producto
  };

  const handleModify = () => {
    console.log('Modificar producto');
    // Lógica para modificar producto
  };

  const handleCancel = () => {
    console.log('Cancelar');
    // Lógica para cancelar
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="button-container">
        <button type="button" onClick={handleNew} className="top-button">Nuevo</button>
        <button type="button" onClick={handleModify} className="top-button">Modificar</button>
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Se vende por:</label>
        <select
          name="unit"
          value={product.unit}
          onChange={handleChange}
          required
        >
          <option value="piece">Pieza</option>
          <option value="kilo">Kilo</option>
          <option value="package">Paquete</option>
        </select>
      </div>
      <div className="input-with-icon">
        <label>
          <div className="input-container">
            Precio costo:
            <input
              type="number"
              name="costPrice"
              value={product.costPrice}
              onChange={handleChange}
              required
            />
          </div>
        </label>
      </div>
      <div className="input-with-icon">
        <label>
        </label>
      </div>
      <div className="input-with-icon">
        <label>
          <div className="input-container">
            Precio de venta:
            <input
              type="number"
              name="salePrice"
              value={product.salePrice}
              onChange={handleChange}
              required
            />
          </div>
        </label>
      </div>
      <div>
        <label>Categoría:</label>
        <select
          name="category"
          value={product.category}
          onChange={(e) => {
            if (e.target.value === 'addNew') {
              setAddingCategory(true);
              setProduct({ ...product, category: '' });
            } else {
              setAddingCategory(false);
              handleChange(e);
            }
          }}
          required
        >
          <option value="">Seleccionar</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
          <option value="addNew">Agregar nueva categoría</option>
        </select>
        {addingCategory && (
          <div className="new-category-container">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Nueva categoría"
              required
            />
            <button type="button" onClick={handleAddCategory} className="add-category-button">
              <FaPlus /> Agregar
            </button>
          </div>
        )}
      </div>
      <div>
        <label>
          Utiliza inventario:
          <input
            type="checkbox"
            name="usesInventory"
            checked={product.usesInventory}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="min-max-container">
        <span className="min-max-label">Mínimo:</span>
        <input
          type="number"
          name="minProfit"
          className="min-max-input"
          value={product.minProfit}
          onChange={handleChange}
        />
        <span className="min-max-label">Máximo:</span>
        <input
          type="number"
          name="maxProfit"
          className="min-max-input"
          value={product.maxProfit}
          onChange={handleChange}
        />
      </div>
      <div className="button-container">
        <button type="submit" className="bottom-button">Guardar</button>
        <button type="button" onClick={handleCancel} className="bottom-button">Cancelar</button>
      </div>
    </form>
  );
};

export default ProductoP;
