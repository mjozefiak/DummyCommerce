import {ProductsListInterface} from "../interfaces/Product";
import {MenuInterface} from "../interfaces/Menu";

export const getProducts = async (productId: string | undefined) => {
   const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
   if (!res.ok) {

   }
   return await res.json()
}

export const getSingleCategory = async (categoryName: string | undefined): Promise<ProductsListInterface> => {
   const res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
   if (!res.ok) {

   }
   return await res.json()
}

export const getAllCategories = async (): Promise<MenuInterface> => {
   const res = await fetch('https://fakestoreapi.com/products/categories')
   if (!res.ok) {

   }
   return await res.json()
}