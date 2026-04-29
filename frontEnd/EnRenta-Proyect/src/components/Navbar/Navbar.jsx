// importo el logo
import logo from '../../assets/LogoNegro.png'
// importo estilos del componente
import './Navbar.css'
// Importo iconos
import { FaAngleDoubleRight } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
// Importo useState para el menu responsive
import { useState } from 'react'

function Navbar() {
  
  const [open, setOpen] = useState(false);
  
    return (
        <>
        {/* Menu nav */}
            <nav className="navbar">
                {/* Menu hamburguesa responsive */}
                <div className='menu' onClick={() => setOpen(!open)}>
                    <HiMenuAlt2 className='menu-icon'/>
                </div>
                {/* Logo */}
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                {/* Boton login y registro */}
                <ul className="navbar-links">
                    <li>
                        <a href="/"> <FaAngleDoubleRight /> Crear cuenta</a>
                    </li>
                    <li>
                        <a href="/about">Iniciar sesion</a>
                    </li>
                </ul>
            </nav>
            {/* Menu sidebar responsive */}
            <div className={`sidebar ${open ? "active" : ""}`}>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/modelos">Modelos</a></li>
                    <li><a href="/sucursales">Sucursales</a></li>
                    <li><a href="/faqs">FAQs</a></li>
                    <li><a href="/">ES / EN</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;