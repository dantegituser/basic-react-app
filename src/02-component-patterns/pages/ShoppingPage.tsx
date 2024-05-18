import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
  id:'1',
  title: 'coffee mug',
  img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping store</h1>
        <hr />
        <div style={({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        })}>

                
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-img" />
          <ProductTitle title={'Producto 2'} className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-img" />
          <ProductCard.Title title={'el title'} className="text-white" />
          {<ProductCard.Buttons className="custom-buttons" />}
        </ProductCard>

        <ProductCard product={product} 
        style={{
          backgroundColor:"#70D1F8"
        }}>
          <ProductImage className="custom-img" />
          <ProductTitle title={'Producto 2'} className="text-white" style={{
            color:"black"
          }} />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        </div>
    </div>
  )
}
