import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 text-center">
            <div className="card bg-primary-subtle border-0 ">
              <Link to={"/item/"+item.id} >  <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                <div className="card-body">
                    <p className="card-text">{item.titulo}</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;