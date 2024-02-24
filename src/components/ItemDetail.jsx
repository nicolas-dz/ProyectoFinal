import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container bg-primary-subtle">
            <div className="row">
                <div className="col-md-2 offset-md-1 text-center bg-primary-subtle">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col-md-8 text-center justify-content-center bg-primary-subtle">
                    <h1>{item.titulo}</h1>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;