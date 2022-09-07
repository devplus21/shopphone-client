import React, { useState } from 'react'
import ProductModal from './ProductModal'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost } from '../redux/actions/productAction'
import { Link, useHistory } from 'react-router-dom'
import { GLOBALTYPES } from '../redux/actions/globalTypes'
import Carousel from './Carousel'

const ProductCard = ({ product }) => {
  const { auth } = useSelector((state) => state)
  const dispatch = useDispatch()

  const history = useHistory()

  const handleEditProduct = () => {
    dispatch({
      type: GLOBALTYPES.STATUS,
      payload: { ...product, onEdit: true },
    })
  }

  const handleDeleteProduct = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
      dispatch(deletePost({ product, auth }))
      return history.push('/')
    }
  }

  return (
    <div className="card">
      <Link className="card_link" to={`/product/${product._id}`}>
        {product.images.length > 0 && (
          <Carousel images={product.images} id={product._id} />
        )}

        <h5>{product.title}</h5>
        <h6>${product.price}</h6>
      </Link>
      <div className="btn_div">
        <button className="btn_edit" onClick={handleEditProduct}>
          Sửa
        </button>
        <button
          className="btn_delete"
          onClick={() => handleDeleteProduct(product._id)}
        >
          Xóa
        </button>
      </div>
    </div>
  )
}

export default ProductCard
