import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { products } from "../data/products";

const product = products[0]

export const ShoppingPage = () => {


  return (
    <div>
        <h1>Shopping store</h1>
        <hr />
        

       
            <ProductCard 
            key={product.id}
            product={product} 
            className="bg-dark text-white" 
            initialValues={{
              count:4,
              maxCount:10
            }}
            >
              {
                ({reset, increaseBy, maxCount, isMaxCountReached}) => (
                  <>
                  <ProductImage className="custom-img" />
                  <ProductTitle title={product.title} className="text-bold" />
                  <ProductButtons className="custom-buttons" />
                  <button onClick={reset}>Reset</button>
                  <button onClick={() => increaseBy(-2)}>-2</button>
                  {
                    (!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>)
                  }
                  
                  </>
                )
              }
              
        </ProductCard>
       
              

        
        
        
    </div>
  )
}
