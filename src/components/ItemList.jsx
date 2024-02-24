import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="container  bg-primary-subtle">
            <div className="row">
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ItemList;