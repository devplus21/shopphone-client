/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import NewCart from './NewCart'
import './style.css'

const NewArrival = () => {
  return (
    <>
        <section className="newarrival background">
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                        <h2>Sản phẩm mới nổi bật</h2>
                    </div>
                    <div className="heading-right row">
                        <span>Xem tất cả sản phẩm</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <NewCart />
            </div>
        </section>
    </>
  )
}

export default NewArrival