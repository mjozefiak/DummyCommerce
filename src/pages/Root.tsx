import {defer, Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import React from "react";
import {getAllCategories} from "../helpers/fetch";

const RootLayout = () => {
   return (
      <>
         <Header/>
         <main className="mx-auto max-w-7xl">
            <Outlet/>
         </main>
      </>
   )
}

export default RootLayout

export const menuLoader = async () => {
   const categories = getAllCategories()
   return defer({categories})
}
