import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import LogoSanSeverino from "./LogoSanSeverino";



const NavBar = () => {
    return (
        <div className="container-fluid my-0 bg-info">
            <div className="row">
                <div className="col-md-2 d-flex justify-content-center">
                    <LogoSanSeverino tamano={120} />
                </div>
                <div className="col-md-9 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" to={"/"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" to={"/category/pizzas"}>Pizzas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" to={"/category/empanadas"}>Empanadas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" to={"/category/calzones"}>Calzones</NavLink>
                        </li>

                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;