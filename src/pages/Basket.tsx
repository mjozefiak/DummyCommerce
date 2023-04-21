import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import BasketItem from "../components/Basket/BasketItem";
import {basketActions} from "../store/basket-slice";
import {IoBagRemove} from "react-icons/all";
import EmptyBasket from "../components/EmptyBasket";
import BasketDetails from "../components/Basket/BasketDetails";

const BasketPage = () => {
   const basketState = useSelector((state: RootState) => state.basket)
   const dispatch = useDispatch()

   return (
      <>
         {
            basketState.products.length ?
               <div className="p-3">
                  <div className="flex justify-between items-center my-3 border-b-2">
                     <h1 className="text-3xl font-bold">Basket</h1>
                     <button
                        className="h-fit p-2 flex gap-2 items-center cursor-pointer text-gray-600 hover:text-red-500"
                        onClick={() => {
                           dispatch(basketActions.clearBasket())
                        }}
                     >
                        <IoBagRemove className="text-lg"/>
                        <span>Remove all</span>
                     </button>
                  </div>
                  {basketState.products.map((el, key) => (
                     <BasketItem {...el} key={key}/>
                  ))}
                  <BasketDetails/>
               </div>
               :
               <EmptyBasket/>
         }
      </>
   )
}

export default BasketPage
