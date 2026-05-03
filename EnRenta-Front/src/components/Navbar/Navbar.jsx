// importo el logo
import logo from '../../assets/LogoNegro.png'
// importo estilos del componente
import './Navbar.css'
// Importo iconos
import { FaAngleDoubleRight } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
// Importo useState para el menu responsive
import { useState } from 'react'
import { Link } from 'react-router-dom';

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
                    <Link to="/Home">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                {/* Boton login y registro */}
                <ul className="navbar-links">
                    <li>
                        <Link to="/"> <FaAngleDoubleRight /> Crear cuenta</Link>
                    </li>
                    <li>
                        <Link to="/about">Iniciar sesion</Link>
                    </li>
                </ul>
            </nav>
            {/* Menu sidebar responsive */}
            <div className={`sidebar ${open ? "active" : ""}`}>
                <ul>
                    <li><Link to="/Home">Inicio</Link></li>
                    <li><Link to="/modelos">Modelos</Link></li>
                    <li><Link to="/sucursales">Sucursales</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/">ES / EN</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;