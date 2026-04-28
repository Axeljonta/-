import logo from '../../assets/LogoNegro.png'
import './Navbar.css'
import { FaAngleDoubleRight } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";

function Navbar() {
  
  
  
    return (
        <nav className="navbar">
        
        <div className='menu'>
            <HiMenuAlt2 className='menu-icon'/>
        </div>

        <div className="navbar-logo">
            <img src={logo} alt="Logo" />
        </div>
        
        <ul className="navbar-links">
            <li>
                <a href="/"> <FaAngleDoubleRight /> Crear cuenta</a>
            </li>
            <li>
                <a href="/about">Iniciar sesion</a>
            </li>
        </ul>
        
        </nav>
    );
}

export default Navbar;