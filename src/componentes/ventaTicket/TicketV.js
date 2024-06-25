import React from 'react';
import './TicketB.css';

const TicketV = () => {
    return (
        <div className="TicketV-container">
            <h2>Tickets</h2>
            <div className="main-content">
                <div className="TicketV">
                    <input type="text" id="search" name="search" placeholder="Buscar..." />
                    <button className="search-button"><i className="fas fa-search"></i></button>
                </div>
            </div>
        </div>
    );
};

export default TicketV; 
