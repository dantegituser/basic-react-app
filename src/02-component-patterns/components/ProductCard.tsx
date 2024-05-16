import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct';
import {  createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext;

// interface ProductButtonsProps {
//     increaseBy: (value: number) => void;
//     counter: number;
// }

// export const ProductButtons = ({increaseBy, counter}:ProductButtonsProps) => {

export const ProductCard = ({children, product}: ProductCardProps) => {
    
    const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{
        counter, increaseBy, product
    }}>

        <div className={styles.productCard}>

            {/* <img src="./coffee-mug.png" alt="coffe mug" className={styles.productImg} /> */}
            {children}
            {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy} />        */}
            
        </div>
    </Provider>
  )
}

// ProductCard.Buttons = ProductButtons;
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;