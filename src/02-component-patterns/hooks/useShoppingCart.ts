import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({})

  const onProductCountChange = ({count,product}:{count:number, product:Product}) => {

    setShoppingCart(oldShoppingCart => {

      const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0}

      if(Math.max(productInCart.count + count, 0) > 0){
        productInCart.count += count
        return { ...oldShoppingCart, [product.id]:productInCart}
      }
      // hay q borrar el producto

      const {[product.id]:toDelete, ...rest} = oldShoppingCart;
        // console.log(toDelete);
        return {...rest}

      /*codigo anterior chido
      if(count === 0){
        const {[product.id]:toDelete, ...rest} = oldShoppingCart;
        console.log(toDelete);
        return {...rest}
      }
      return {...oldShoppingCart, [product.id]:{...product, count}
    }*/
    })
}

return {shoppingCart, onProductCountChange}
}