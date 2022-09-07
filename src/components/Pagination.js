import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ products }) => {
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 6

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(products.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(products.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, products])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length
    setItemOffset(newOffset)
  }
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
     
     
     
     
     
      />
    </>
  )
}

export default Pagination
