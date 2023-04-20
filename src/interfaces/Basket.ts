export interface BasketItemInterface {
   id: number
   title: string
   image: string
   price: number
   quantity: number
}

export interface BasketInterface {
   products: BasketItemInterface[]
   totalPrice: number
   isVisible: boolean
}

