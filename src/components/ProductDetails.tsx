import React, {FormEvent, useState} from 'react';
import {PropProductInterface} from "../interfaces/Product";
import {BsBasket} from "react-icons/bs";
import NumberInput from "./NumberInput";


const ProductDetails = ({product}: PropProductInterface) => {
   const [inputValue, setInputValue] = useState<Number>()

   const addToCartHandler = (e: FormEvent) => {
      e.preventDefault()
   }

   return (
      <>
         <img className="max-h-80 mx-auto" src={product.image} alt={product.title}/>
         <div className="mt-3 mb-3">
            <h1 className="text-xl font-semibold">{product.title}</h1>
            <div className="flex justify-between items-center my-2">
               <h3 className="text-lg font-semibold text-gray-500">Price</h3>
               <span className="text-2xl mb-2">${(product.price).toFixed(2)}</span>
            </div>

            <form className="flex items-center gap-5">
               <NumberInput/>
               <button
                  className="w-full flex items-center justify-center gap-2 h-10 border-blue-500 border-2 bg-blue-500 text-white rounded px-3 py-2 hover:text-blue-500 hover:bg-white"
                  onClick={addToCartHandler}
               >
                  <BsBasket className="text-xl"/>
                  <span>Add to cart</span>
               </button>
            </form>
         </div>
         <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">Description</h3>
            <p className="text-md">{product.description}</p>
         </div>
      </>
   );
};

export default ProductDetails;