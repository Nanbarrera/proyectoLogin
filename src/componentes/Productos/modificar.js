import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { SidebarData } from './SiderbarData';
import './producto.css';
const ModificarP = ({ onBack }) => {
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
  const [showMessage, setShowMessage] = useState(false);

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
    console.log('Product Modified:', product);
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

  const handleCancel = () => {
    console.log('Cancelar');
  };

  const handleNuevoClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  const handleLogout = () => {
    // Lógica para salir
    window.location.pathname = "/login"; // Redirige al usuario al formulario de inicio de sesión
};
  return (
        <form className="formP" onSubmit={handleSubmit}>
          <div className="button-containerP">
            <button type="button" className="top-buttonP" onClick={handleNuevoClick}>Nuevo</button>
          </div>
          {showMessage && (
            <div className="message-container">
              <p>¡Acción realizada al hacer clic en "Nuevo"!</p>
            </div>
          )}
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
          <div className="input-with-iconP">
            <label>
              <div className="input-containerP">
                Precio costo:
                <div className="input-with-symbolP">
                  <span>$</span>
                  <input
                    type="number"
                    name="costPrice"
                    value={product.costPrice}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </label>
          </div>
          <div className="input-with-iconP">
          </div>
          <div className="input-with-iconP">
            <label>
              <div className="input-containerP">
                Precio de venta:
                <div className="input-with-symbolP">
                  <span>$</span>
                  <input
                    type="number"
                    name="salePrice"
                    value={product.salePrice}
                    onChange={handleChange}
                    required
                  />
                </div>
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
              <div className="new-category-containerP">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Nueva categoría"
                  required
                />
                <button type="button" onClick={handleAddCategory} className="add-category-buttonP">
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
          <div className="min-max-containerP">
            <span className="min-max-labelP">Mínimo:</span>
            <input
              type="number"
              name="minProfit"
              className="min-max-inputP"
              value={product.minProfit}
              onChange={handleChange}
            />
            <span className="min-max-labelP">Máximo:</span>
            <input
              type="number"
              name="maxProfit"
              className="min-max-inputP"
              value={product.maxProfit}
              onChange={handleChange}
            />
          </div>
          <div className="button-containerP">
            <button type="submit" className="bottom-buttonP">Guardar</button>
            <button type="button" className="bottom-buttonP" onClick={handleCancel}>Cancelar</button>
          </div>
        </form>
        );
};

        export default ModificarP;
