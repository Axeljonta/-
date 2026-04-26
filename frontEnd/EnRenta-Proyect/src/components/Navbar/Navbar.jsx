import logo from '../../assets/LogoNegro.png'
import './Navbar.css'

function Navbar() {
  
  
  
    return (
        <nav className="navbar">
        <div className="navbar-logo"><img src={logo} alt="Logo" /></div>
        <ul className="navbar-links">
            <li><a href="/">Crear cuenta</a></li>
            <li><a href="/about">Iniciar sesion</a></li>
        </ul>
        </nav>
    );
}

export default Navbar;