export interface ProductInterface {
   id: number
   title: string
   price: number
   description: string
   category: string
   image: string
   rating: {
      rate: number
      count: number
   }
}

export interface ProductsListInterface {
   products: ProductInterface[]
}

export interface PropProductInterface {
   product: ProductInterface
}