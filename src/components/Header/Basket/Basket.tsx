import {useDispatch, useSelector} from "react-redux";
import {BsBasket} from "react-icons/bs";
import {RootState} from "../../../store/store";
import {NavLink} from "react-router-dom";
import BasketItem from "./BasketItem";

const Basket = () => {
   const basketState = useSelector((state: RootState) => state.basket)
   const dispatch = useDispatch()
   if(basketState.products.length){
      return (
         <>
            <h4 className="text-xs font-semibold text-gray-500 mb-4 mt-1">Products</h4>
            <ul className="flex flex-col gap-3 mb-5">
               {basketState.products.map(product => (
                  <BasketItem {...product} key={product.id}/>
               ))}
            </ul>
            <div className="flex justify-between items-center">
               <h4 className="text-gray-500 font-light">
                  Total Price: <span className="font-semibold text-black">$ {basketState.totalPrice}</span>
               </h4>
               <NavLink className="rounded bg-blue-500 text-white flex items-center gap-3 p-2 hover:bg-blue-400" to="#">
                  Checkout
                  <BsBasket></BsBasket>
               </NavLink>

            </div>


         </>
      );
   } else {
      return (
         <h4>Your cart is empty</h4>
      )
   }

};

export default Basket;
