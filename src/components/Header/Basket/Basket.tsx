import {useDispatch, useSelector} from "react-redux";
import {BsBasket} from "react-icons/bs";
import {RootState} from "../../../store/store";
import {NavLink} from "react-router-dom";
import HeaderBasketItem from "./HeaderBasketItem";
import EmptyBasket from "../../EmptyBasket";
import {uiActions} from "../../../store/ui-slice";

const Basket = () => {
   const basketState = useSelector((state: RootState) => state.basket)
   const dispatch = useDispatch()

   if(basketState.products.length){
      return (
         <>
            <h4 className="text-xs font-semibold text-gray-500 mb-4 mt-1">Products</h4>
            <ul className="flex flex-col gap-3 mb-5">
               {basketState.products.map(product => (
                  <HeaderBasketItem {...product} key={product.id}/>
               ))}
            </ul>
            <div className="flex justify-between items-center">
               <h4 className="text-gray-500 font-light flex flex-col">
                  <span> Total Price:</span>
                  <span className="font-semibold text-black">$ {basketState.totalPrice}</span>
               </h4>
               <NavLink
                  className="rounded bg-blue-500 text-white flex items-center gap-3 p-2 hover:bg-blue-400"
                  to="/basket"
                  onClick={() => dispatch(uiActions.toggleBasketState())}
               >
                  Go to basket
                  <BsBasket></BsBasket>
               </NavLink>

            </div>
         </>
      );
   } else {
      return (
         <EmptyBasket />
      )
   }

};

export default Basket;
