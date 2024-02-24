import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection,query, where, getDocs } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams () ;

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

    return (
        <>
        {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}

export default ItemListContainer;