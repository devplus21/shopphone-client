import React from 'react'
import TopCart from './TopCart'
import './Style.css'

const TopCate = () => {
  return (
    <>
        <section className="topCate background">
            <div className="container">
                <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <i class="fa fa-bars"></i>
                        <h2>Sản phẩm bán chạy nổi bật</h2>
                    </div>
                    <div className="heading-right row">
                        <span>Xem tất cả sản phẩm</span>
                        <i className="fa fa-caret-right"></i>
                    </div>
                </div>
                <TopCart />
            </div>
        </section>
    </>
  )
}

export default TopCate