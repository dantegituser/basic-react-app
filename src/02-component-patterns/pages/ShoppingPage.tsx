import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart() 

  return (
    <div>
        <h1>Shopping store</h1>
        <hr />
        <div style={({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        })}>

        {
          products.map( product => (
            <ProductCard product={product} className="bg-dark text-white" key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
            >
          <ProductImage className="custom-img" />
          <ProductTitle title={product.title} className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
          ))
        }
                
        

        {/* <ProductCard product={product2} className="bg-dark">
          <ProductCard.Image className="custom-img" />
          <ProductCard.Title title={'el title'} className="text-white" />
          {<ProductCard.Buttons className="custom-buttons" />}
        </ProductCard> */}

        {/* <ProductCard product={product} 
        style={{
          backgroundColor:"#70D1F8"
        }}>
          <ProductImage className="custom-img" />
          <ProductTitle title={'Producto 2'} className="text-white" style={{
            color:"black"
          }} />
          <ProductButtons className="custom-buttons" />
        </ProductCard> */}

        </div>
        <div className="shopping-card">
          {
            Object.entries(shoppingCart).map(([index,product]) => (

              <ProductCard product={product} className="bg-dark text-white"
              key={index}
        style={{
          width:'100px'
        }}
        value={product.count}
        onChange={onProductCountChange}
        >
          <ProductImage className="custom-img" />
          <ProductButtons className="custom-buttons" style={{display:'flex', justifyContent:'center'}} />
        </ProductCard>
            ))
          }
        
        </div>
        
    </div>
  )
}
