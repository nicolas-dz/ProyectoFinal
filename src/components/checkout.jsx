import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {cart, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.idx, title:item.titulo, price:item.precio}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumaTotalProductos();
        const order = {buyer:buyer, items:items, date:date, total:total};

        // Inserto Documento en Firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "Orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });
    }

    return (
        <div className="container bg-primary-subtle">
            <div className="row">
                <div className="col text-center">
                    <h1>Checkout</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-info" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle"><img src={product.imagen} alt={product.titulo} width={80} /></td>
                                    <td className="text-start align-middle">{product.titulo}</td>
                                    <td className="text-start align-middle">${product.precio}</td>
                                    <td className="text-start align-middle">{product.quantity}</td>
                                    <td className="text-start align-middle">${product.quantity * product.precio}</td>
                                </tr>
                            )}
                            <tr>
                                <td className="text-center align-middle bg-primary-subtle" colSpan={4}>&nbsp;</td>
                                <td className="text-start align-middle bg-primary-subtle">${SumaTotalProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-success p-5 text-center border-0" role="alert">
                        <p className="display-1">🍕</p>
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu ID de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;