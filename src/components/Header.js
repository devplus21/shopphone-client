import React from 'react'
import { logout } from '../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className="header ">
      <Link to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <button className="statusBtn " onClick={() => dispatch(logout())}>
        Đăng Xuất
      </button>
    </div>
  )
}

export default Header
