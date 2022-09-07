import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { forgotPassword } from '../redux/actions/authAction'
const ForgotPassword = () => {
  const { auth, alert } = useSelector((state) => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const initialState = {
    email: '',
  }

  const [data, setData] = useState(initialState)

  const { email } = data
  useEffect(() => {
    if (auth.token) history.push('/')
  }, [auth.token, history])

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setData({ ...data })
    dispatch(forgotPassword(data))
  }

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className=" text-center mb-4" style={{ color: '#002F77' }}>
          Shopping Cart
        </h3>
        <div className="form-group">
          <h5 className=" text-center mb-4" style={{ margin: '10px' }}>
            Quên mật khẩu ?
          </h5>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={handleChangeInput}
            value={email}
            style={{
              background: `${alert.email ? '#fd2d6a14' : ''}`,
              borderRadius: '10px',
            }}
            placeholder="Email..."
          />

          <small className="form-text text-danger">
            {alert.email ? alert.email : ''}
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-success w-100"
          style={{ borderRadius: '10px' }}
        >
          Xác Thực Email
        </button>
        <p className="my-2">
          <Link to="/" style={{ color: '#0075FF' }}>
            Đăng nhập
          </Link>
        </p>
      </form>
    </div>
  )
}

export default ForgotPassword
