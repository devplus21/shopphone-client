import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPost } from '../../redux/actions/productAction'

import ProductInfo from '../../components/ProductInfo'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])

  const { auth, detailProduct } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost({ detailProduct, id, auth }))

    if (detailProduct.length > 0) {
      const newArr = detailProduct.filter((post) => post._id === id)
      setProduct(newArr)
    }
  }, [detailProduct, dispatch, id, auth])

  return (
    <div className="posts">
      {product.map((item) => (
        <ProductInfo key={item._id} product={item} />
      ))}
    </div>
  )
}

export default Product
