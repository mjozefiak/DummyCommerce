export interface BasketItemInterface {
   id: number
   title: string
   image: string
   price: number
   quantity: number
}

export interface BasketInterface {
   products: BasketItemInterface[]
   delivery: DeliveryInterface
   voucher?: number
   subtotalPrice: number
   totalPrice: number
}

export interface DeliveryInterface {
   method: string,
   price: number
}
