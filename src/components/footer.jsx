
import LogoSanSeverino from "./LogoSanSeverino";


const Footer = () => {
    return (
        <>
           
            <div className="container  bg-info">
                <div className="row my-1 ">
                    <div className="col d-flex justify-content-center">
                        <ul className="nav text-center">
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5" href="#">© NDZ</a>
                            </li>                        
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row my-3">
                    <div className="col-md-10">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Política de Privacidad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Defensa del Consumidor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Protección de datos personales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p><LogoSanSeverino tamano={40} /> © San Severino 2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;