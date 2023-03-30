import {useSelector, useDispatch} from "react-redux";
import {BsBasket} from "react-icons/bs"
import {MdDarkMode} from "react-icons/Md"
import {FiMenu} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import {menuActions} from "../../store/menu-slice";
import {RootState} from "../../store/store";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Basket from "./Basket/Basket";
import {basketActions} from "../../store/basket-slice";


const Header = (): JSX.Element => {
   const dispatch = useDispatch()

   const menuState = useSelector((state: RootState) => state.menu.isVisible)
   const basketState = useSelector((state: RootState) => state.basket.isVisible)
   const changeMenuStateHandler = () => {
      dispatch(menuActions.toggle())
   }
   const changeBasketVisibilityHandler = () => {
      dispatch(basketActions.toggleVisibility())
   }


   return (
      <header className="flex justify-between items-center p-2 shadow-md">
         <NavLink to="/" className="text-xl font-semibold">
            <h1>DummyCommerce</h1>
         </NavLink>
         <div className="flex gap-7 text-gray-600">
            <button className="flex flex-col items-center p-1">
               <MdDarkMode className="text-xl"/>
               <span className="text-xs">Theme</span>
            </button>
            <button className="flex flex-col items-center p-1" onClick={changeBasketVisibilityHandler}>
               <BsBasket className="text-xl"/>
               <span className="text-xs">Basket</span>
            </button>
            <button className="flex flex-col items-center p-1" onClick={changeMenuStateHandler}>
               <FiMenu className="text-xl"/>
               <span className="text-xs">Menu</span>
            </button>
         </div>
         <AnimatePresence>
            {menuState &&
               <Sidebar name={"Menu"} type="MENU">
                  <Menu/>
               </Sidebar>
            }
            {basketState &&
               <Sidebar name={"Basket"} type="BASKET">
                  <Basket/>
               </Sidebar>
            }
         </AnimatePresence>
      </header>
   )
}

export default Header
