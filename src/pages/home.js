import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { getProducts } from '../api/productAPI'

import Products from '../components/Products'
import { GLOBALTYPES } from '../redux/actions/globalTypes'

const Home = () => {
  const dispatch = useDispatch()
  return (
    <div className="main">
      <div className="title">
        <h5>Danh sách sản phẩm</h5>

        <button
          className="statusBtn"
          onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
        >
          Thêm sản phẩm
        </button>
      </div>
      <Products />
    </div>
  )
}

export default Home
