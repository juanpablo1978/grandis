import './NavBar.scss';
import CartWidget from './CartWidget';

const NavBar = () => {
    return(

        <header>
        <div className="container">
            <img src="assets/logo.png" alt="logo grandis" />
            <nav>
                <a href="#nosotros">Quiénes somos</a>
                <a href="#productos">Productos</a>
                <a href="#promociones">Promociones</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <CartWidget/>
        </div>    
    </header>
    )
}

export default NavBar