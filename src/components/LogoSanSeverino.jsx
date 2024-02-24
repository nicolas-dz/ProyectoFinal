import { Link } from "react-router-dom";
import Logo from "../assets/Logo-Final.png";

const LogoSanSeverino = ({tamano}) => {
    return (
        <Link to={"/"}><img src={Logo} alt="Pizzeria San Severino" width={tamano} />
       </Link>) 
}

export default LogoSanSeverino ;