import {IoCloseOutline} from "react-icons/io5";
import {createPortal} from "react-dom";
import {useDispatch} from "react-redux";
import {motion} from 'framer-motion'
import {SidebarInterface, SidebarBackdropInterface} from "../../interfaces/Sidebar";
import {menuActions} from "../../store/menu-slice";
import {basketActions} from "../../store/basket-slice";

const overlayPortal: HTMLElement = document.querySelector('#overlay')!

const Backdrop = (props: SidebarBackdropInterface) => {
   return createPortal(
      <>
         <motion.div
            className="bg-black bg-opacity-20 absolute h-full w-full flex justify-end"
            onClick={props.closeSidebar}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
         >
         </motion.div>
         <div className="absolute h-full w-80 right-0 z-10">
            {props.children}
         </div>
      </>,
      overlayPortal
   )
}
const Sidebar = (props: SidebarInterface) => {
   const dispatch = useDispatch()

   const closeSidebarHandler = () => {
      switch (props.type) {
         case "MENU":
            dispatch(menuActions.toggle())
            break
         case "BASKET":
            dispatch(basketActions.toggleVisibility())
            break
      }
   }

   return (
      <Backdrop closeSidebar={closeSidebarHandler}>
         <motion.aside
            className="min-h-full bg-white shadow-2xl"
            initial={{x: 400}}
            animate={{x: 10}}
            exit={{
               x: 400,
               transition: {
                  delay: 0,
                  duration: .3}
            }}
            transition={{
               type: "tween",
               delay: .2,
               duration: .3
            }}
         >
            <div className="flex items-center gap-5 bg-black bg-opacity-10 py-4 px-4 shadow-sm">
               <button className="p-1 hover:bg-gray-300 rounded-full" onClick={closeSidebarHandler}>
                  <IoCloseOutline className="text-2xl"/>
               </button>
               <h3 className="text-xl font-semibold">{props.name}</h3>
            </div>
            <div className="px-4 mt-3">
               {props.children}
            </div>
         </motion.aside>
      </Backdrop>
   )
}

export default Sidebar
