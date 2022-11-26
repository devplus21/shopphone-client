/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Head = () => {
  return (
    <div>
        <section className='head'>
            <div className="container d_flex">
                <div className="left row">
                    <i className="fa fa-phone"></i>
                    <label>+1900 1111</label>
                    <i className="fa fa-envelope"></i>
                    <label>GTVT_utc2@edu.utc2.vn</label>
                </div>
                <div className="right row RText">
                    <a href="#">Giới thiệu</a>
                    <a href="#">Trung tâm tư vấn</a>
                    <a href="#">Trung tâm hỗ trợ</a>
                    <a href="#">Lịch sử mua hàng</a>
                    <a href="#">Đăng nhập <i class="fa-solid fa-right-to-bracket"></i></a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Head