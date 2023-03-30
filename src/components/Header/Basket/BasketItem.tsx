import {basketActions} from "../../../store/basket-slice";
import {IoBagRemove} from "react-icons/all";
import {useDispatch} from "react-redux";
import {BasketItemInterFace} from "../../../interfaces/Basket";

const BasketItem = (props: BasketItemInterFace) => {
   const dispatch = useDispatch()

   return (
      <li className="w-full border flex items-center p-2 gap-5 rounded">
         <img
            src={props.image}
            alt={props.title}
            className="w-12 h-full"
         />
         <div className="flex flex-col justify-betwee gap-3">
            <div className="flex justify-between">
               <h3 className="font-semibold text-sm">{props.title}</h3>
               <button className="h-fit p-2" onClick={() => {
                  dispatch(basketActions.removeFromBasket(props.id))
                  dispatch(basketActions.getTotalPrice())
               }}>
                  <IoBagRemove className="text-lg text-red-600 cursor-pointer hover:text-red-300"/>
               </button>
            </div>
            <div className="flex justify-between">
               <span>$ {props.price}</span>
               <label className="flex items-center text-xs">
                  Quantity: <input className="w-7 text-center text-base font-semibold" type="number" defaultValue={props.quantity}></input>
               </label>
            </div>
         </div>
      </li>
   );
};

export default BasketItem;
