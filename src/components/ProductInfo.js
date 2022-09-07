import React from 'react'
import Carousel from './Carousel'
import MDView from './MarkDownEdior/MDView'

const ProductInfo = ({ product }) => {
  return (
    <div className="product_detail">
      <section className="product_info">
        {product.images.length > 0 && (
          <Carousel images={product.images} id={product._id} />
        )}
        <div className="box">
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>

          {/* <div className="blog_detail_content"> */}

          {/* </div> */}
          {/* <p>{product.description}</p> */}
          <h4>Category: {product.category}</h4>
          <button className="btn btn-success w-100">Thêm vào giỏ hàng</button>
        </div>
      </section>
      <div className="product_container">
        <MDView source={product.description} />
      </div>
    </div>
  )
}

export default ProductInfo
