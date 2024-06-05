import React from "react";
import './venta.css';

let vacio = '';

function venta() {
    const abrir_cerrer_menu = () => {
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    }

    return (
        <header>
            <div className='barra'>
                <button onClick={abrir_cerrer_menu} className='botonMenu' id='x'></button>
            </div>
            <div>
                <nav id='menu' className='despegable'>
                    <ul>
                        <li>
                            <a href={vacio}>Venta</a>
                        </li>
                        <li>
                            <a href={vacio}>Caja</a>
                        </li>
                        <li>
                            <a href={vacio}>Productos</a>
                        </li>
                        <li>
                            <a href={vacio}>Inventario</a>
                        </li>
                        <li>
                            <a href={vacio}>Empleados</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}
export default venta;