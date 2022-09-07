// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { GLOBALTYPES } from '../redux/actions/globalTypes'
// import { useHistory } from 'react-router-dom'
// import { deletePost } from '../redux/actions/productAction'

// const Products = () => {
//   const { homeProduct } = useSelector((state) => state)

//   const { auth } = useSelector((state) => state)
//   const dispatch = useDispatch()

//   const history = useHistory()

//   return (
//     <div className="products">
//       <table class="table">
//         <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Tên sản phẩm</th>
//             <th scope="col">Danh mục</th>
//             <th scope="col">Giá bán</th>
//             <th scope="col"></th>
//             <th scope="col"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {homeProduct.products.map((product) => (
//             <tr key={product._id}>
//               <td>{product._id}</td>
//               <td>{product.title}</td>
//               <td>{product.category}</td>
//               <td>${product.price}</td>

//               <td>
//                 {' '}
//                 <button
//                   className="btn_edit"
//                   onClick={() => {
//                     dispatch({
//                       type: GLOBALTYPES.STATUS,
//                       payload: { ...product, onEdit: true },
//                     })
//                   }}
//                 >
//                   Sửa
//                 </button>
//               </td>
//               <td>
//                 {' '}
//                 <button
//                   className="btn_delete"
//                   onClick={() => {
//                     if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
//                       dispatch(deletePost({ product, auth }))
//                       return history.push('/')
//                     }
//                   }}
//                 >
//                   Xóa
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Products

import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const Products = () => {
  const { homeProduct } = useSelector((state) => state)
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 4

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(homeProduct.products.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(homeProduct.products.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, homeProduct.products])

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % homeProduct.products.length
    setItemOffset(newOffset)
  }

  // console.log({ homeProduct })

  return (
    <section>
      <div className="products">
        {currentItems.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </section>
  )
}

export default Products
