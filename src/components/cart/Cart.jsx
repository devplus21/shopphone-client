import React from "react"
import "./style.css"

const Cart = ({ cartItem, addToCart, decreaseQty }) => {
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            {cartItem.length === 0 && <h1 className='no-items product'>Không có sản phẩm nào, xin vui lòng chọn sản phẩm.</h1>}
            
            {cartItem.map((item) => {
              const productqty = item.price * item.qty
              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price} * {item.qty}
                      <span>{productqty}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div> 
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Tổng tiền</h2>
            <div className=' d_flex'>
              <h4>Tổng tiền thanh toán :</h4>
              <h3>{totalPrice}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart