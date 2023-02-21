import {defer, Outlet} from "react-router-dom";
import Header from "../components/Header";
import React from "react";
import {menuInterface} from "../interfaces/Menu";

const RootLayout = () => {
   return (
      <>
         <Header/>
         <Outlet/>
      </>
   )
}

export default RootLayout

const loadCategories = async () => {

}

export const loader = async ():Promise<menuInterface> => {
   const res = await fetch('https://fakestoreapi.com/products/categories')
   if (!res.ok) {

   }
   const categories = await res.json()
   return { categories }
}
