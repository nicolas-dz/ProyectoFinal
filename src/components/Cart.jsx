import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center bg-primary-subtle">
                        <p className="display-1">🍕</p>
                        <div className="alert alert-dark " role="alert">No se encontraron productos en el Carrito!</div>
                        <Link to={"/"} className="btn btn-info my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container bg-primary-subtle">
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table bg-primary-subtle">
                            <tbody>
                                <tr>
                                    <td className="text-end align-middle bg-primary-subtle" colSpan={6}><a href="#" onClick={clear} className="btn btn-info">Vaciar Carrito <img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                                </tr>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td><img src={product.imagen} alt={product.titulo} width={80} /></td>
                                        <td>{product.titulo}</td>
                                        <td>${product.precio}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.quantity * product.precio}</td>
                                        <td><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto"  /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td  className="bg-primary-subtle" colSpan={4}>Suma Total</td>
                                    <td  className="bg-primary-subtle">${SumaTotalProductos()}</td>
                                    <td className="text-end align-middle bg-primary-subtle"><Link to={"/checkout"} className="btn btn-info">Checkout</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;