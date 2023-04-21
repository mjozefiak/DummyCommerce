import {useSelector, useDispatch} from "react-redux";
import {BsBasket} from "react-icons/bs"
import {MdDarkMode} from "react-icons/Md"
import {FiMenu} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {uiActions} from "../../store/ui-slice";
import {RootState} from "../../store/store";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Basket from "./Basket/Basket";


const Header = (): JSX.Element => {
   const dispatch = useDispatch()
   const location = useLocation()
   const uiState = useSelector((state: RootState) => state.ui)
   const basketState = useSelector((state: RootState) => state.basket)
   const changeMenuStateHandler = () => {
      dispatch(uiActions.toggleMenuState())
   }
   const changeBasketVisibilityHandler = () => {
      dispatch(uiActions.toggleBasketState())
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
            <AnimatePresence>
               {location.pathname != '/basket' &&
                  <motion.button
                     className="flex flex-col items-center p-1 relative"
                     onClick={changeBasketVisibilityHandler}
                     exit={{transform: 'scale(0)'}}
                     animate={{transform: 'scale(1)'}}
                  >
                     {basketState.products.length > 0 &&
                        <motion.span
                           className="w-4 h-4 rounded-full bg-blue-600 text-white text-xs absolute right-0 top-0"
                           initial={{transform: 'scale(0)'}}
                           animate={{transform: 'scale(1)'}}
                        >
                           {basketState.products.length}
                        </motion.span>
                     }
                     <BsBasket className="text-xl"/>
                     <span className="text-xs">Basket</span>
                  </motion.button>
               }
            </AnimatePresence>
            <button className="flex flex-col items-center p-1" onClick={changeMenuStateHandler}>
               <FiMenu className="text-xl"/>
               <span className="text-xs">Menu</span>
            </button>
         </div>
         <AnimatePresence>
            {uiState.menuState &&
               <Sidebar name={"Menu"} type="MENU">
                  <Menu/>
               </Sidebar>
            }
            {uiState.basketState &&
               <Sidebar name={"Basket"} type="BASKET">
                  <Basket/>
               </Sidebar>
            }
         </AnimatePresence>
      </header>
   )
}

export default Header
