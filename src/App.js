
import './App.css'
import Header from './components/header/Header'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Pages from './pages/Pages';
import Fldata from './components/flashdeal/Fldata';
import { useState } from 'react';
import Cart from './components/cart/Cart';
import Shopdata from './components/shop/Shopdata';
import Footer from './components/footer/Footer'

function App() {

  const {productItems} = Fldata
  const {shopItems} = Shopdata

  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit){
      setCardItem(cartItem.map((item) => (item.id === product.id ? {...productExit, qty:productExit.qty + 1} : item)))
    }else {
      setCardItem([...cartItem, {...product, qty: 1}])
    }
  }

  const decreaseQty = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1 ){
      setCardItem (cartItem.filter((item)=> item.id !== product.id))
    }else {
      setCardItem(cartItem.map((item) => (item.id === product.id? {...productExit, qty: productExit.qty - 1} : item)))
    }
  }
  return (
    <>
      <Router>
        <Header cartItem={cartItem}/>
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
          </Route>
          <Route path='/cart' exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Footer />
    </Router>
    </>
  )
}

export default App
