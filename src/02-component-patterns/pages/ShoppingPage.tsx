import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

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

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'Producto 1'} />
          <ProductButtons />
        </ProductCard>
        
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'Producto 2'} />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'el title'} />
          {<ProductCard.Buttons />}
        </ProductCard>

        </div>
    </div>
  )
}
