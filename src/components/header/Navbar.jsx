/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
    <header className="Header">
        <div className="container d_flex">
            <div className="category d_flex">
                <span className="fa-solid fa-list"></span>
                <h4>
                    Danh mục sản phẩm <i className="fa fa-caret-down"></i> {""}
                </h4>
            </div>
            <div className="navlink">
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                    <li>
                        <Link to='/'>Trang chủ</Link>
                    </li>
                    <li>
                        <Link to='/Pages'>Danh mục</Link>
                    </li>
                    <li>
                        <Link to='/sales'>Ưu điểm</Link>
                    </li>
                    <li>
                        <Link to='/vendor'>Tài khoản admin</Link>
                    </li>
                    <li>
                        <Link to='/track'>Theo dõi đơn hàng</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Liên hệ</Link>
                    </li>
                    <li>
                        <Link to='/user'>Đăng nhập <i class="fa-solid fa-right-to-bracket"></i></Link>
                    </li>
                </ul>
                <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                    {
                    MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>
                    }
                </button>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar