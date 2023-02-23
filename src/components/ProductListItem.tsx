import {ProductInterface} from "../interfaces/Product";
import {NavLink} from "react-router-dom";

const ProductListItem = (props: ProductInterface) => {
   return (
      <NavLink className="flex flex-col gap-2" to={`/products/${String(props.id)}`}>
         <div className="flex justify-center">
            <img className="max-h-32" src={props.image} alt={props.title}/>
         </div>
         <h3 className="line-clamp-2 text-gray-700 text-sm leading-4	">{props.title}</h3>
         <span className="text-sm">{(props.price).toFixed(2)} $</span>
      </NavLink>
   );
};

export default ProductListItem