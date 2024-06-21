import React, { useContext } from 'react';
import Ticket from './Ticket'; // Ajusta la ruta según la estructura de tu proyecto
import { ProductContext } from './ProductContext'; // Ajusta la ruta según la estructura de tu proyecto

const TicketPage = () => {
    const { products, totalPrice, cashPayment, change } = useContext(ProductContext);

    return (
        <div className="ticket-page">
            <h1>Ticket de Compra</h1>
            <Ticket products={products} totalPrice={totalPrice} cashPayment={cashPayment} change={change} />
        </div>
    );
}

export default TicketPage;
