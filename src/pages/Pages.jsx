import React from 'react' 
import FlashDeal from '../components/flashdeal/FlashDeal'
import Home from "../components/mainpage/Home"
import NewArrival from '../components/newarrival/NewArrival'
import TopCate from '../components/top/TopCate'
import Shop from '../components/shop/Shop'
import Annu from '../components/annocuments/Annu'
import Wrapper from '../components/wrapper/Wrapper'

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeal productItems={productItems} addToCart={addToCart} />
      <TopCate />  
      <NewArrival />
      <Shop shopItems={shopItems} addToCart={addToCart}/>
      <Annu />
      <Wrapper />
    </>
  )
}

export default Pages