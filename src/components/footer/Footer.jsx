import React from "react"
import "./style.css"
import logo from '../assets/img/logo.svg'
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <img src={logo} alt="" />
            <div className='icon d_flex'>
              <div className='img '>
                <i class="fa-brands fa-cc-visa"></i>
              </div>
              <div className='img '>
                <i class="fa-brands fa-cc-jcb"></i>
              </div>
              <div className='img '>
              <i class="fa-regular fa-credit-card"></i>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Hỗ trợ khách hàng</h2>
            <ul>
              <li>Kiểm Tra Đơn Hàng</li>
              <li>Dịch Vụ Sửa Chữa</li>
              <li>Trả Góp</li>
              <li>Thu Cũ Đổi Mới</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Chính sách bán hàng</h2>
            <ul>
              <li>Hình Thức Thanh Toán </li>
              <li>Chính Sách Bảo Hành </li>
              <li>Chính Sách Vận Chuyển </li>
              <li>Chính Sách Đổi, Trả Hàng </li>
              <li>Chính Sách & Quy Định Chung </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Về chúng tôi</h2>
            <ul>
              <li>Khách Hàng </li>
              <li>Tin Công Nghệ</li>
              <li>Tuyển dụng</li>
              <li>Hotline: + 1900 1564</li>
              <li>Hotline 24/7: + 1900 6767</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer