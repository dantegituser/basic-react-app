import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct';
import {  createContext, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext;

// interface ProductButtonsProps {
//     increaseBy: (value: number) => void;
//     counter: number;
// }

// export const ProductButtons = ({increaseBy, counter}:ProductButtonsProps) => {

export interface Props{
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: React.CSSProperties ;
}


export const ProductCard = ({children, product, className, style}: Props) => {
    
    const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{
        counter, increaseBy, product
    }}>

        <div className={`${styles.productCard} ${className}`} style={style}>

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