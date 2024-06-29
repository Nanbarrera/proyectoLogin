import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './componentes/venta/ProductContext'; // Importa el ProductProvider
import { TurnoProvider } from './componentes/turnos/TurnoContext'; // Importa el TurnoProvider
import AppRoutes from './routes/AppRoutes';

const App = () => {
    return (
        <TurnoProvider>
            <ProductProvider> {/* Envuelve tus rutas con ProductProvider */}
                <AppRoutes />
            </ProductProvider>
        </TurnoProvider>
        
    );
};

export default App;
