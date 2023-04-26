import {ProductInterface} from "../../interfaces/Product";
import {NavLink} from "react-router-dom";
import Rating from "../Rating";
import React from "react";

const ProductListItem = (props: ProductInterface) => {
   return (
      <NavLink className="flex flex-col gap-3 rounded hover:shadow p-3" to={`/products/${String(props.id)}`}>
         <div className="flex justify-center">
            <img className="max-h-32" src={props.image} alt={props.title}/>
         </div>
         <h3 className="line-clamp-2 text-gray-700 text-sm leading-4	">{props.title}</h3>
         <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">{'$' + (props.price).toFixed(2)}</span>
            <Rating rating={Number((props.rating.rate).toFixed(0))}/>
         </div>
      </NavLink>
   );
};

export default ProductListItem
