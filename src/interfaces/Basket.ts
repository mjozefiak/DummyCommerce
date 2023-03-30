export interface BasketItemInterFace {
   id: number
   title: string
   image: string
   price: number
   quantity: number
}

export interface BasketInterface {
   products: BasketItemInterFace[]
   totalPrice: number
   isVisible: boolean
}

