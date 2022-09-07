import { toast } from 'react-toastify'

const valid = ({ fullname, username, email, password, cf_password }) => {
  const err = {}

  if (!fullname) {
    err.fullname = toast.error('Vui lòng thêm tên đầy đủ của bạn.')
  } else if (fullname.length > 25) {
    err.fullname = toast.error('Tên đầy đủ phải nhỏ hơn 25 kí tự.')
  }

  if (!username) {
    err.username = toast.error('Vui lòng thêm tên đăng nhập của bạn.')
  } else if (username.replace(/ /g, '').length > 25) {
    err.username = toast.error('Tên đăng nhập phải nhỏ hơn 25 kí tự.')
  }

  if (!email) {
    err.email = toast.error('Vui lòng thêm email của bạn.')
  } else if (!validateEmail(email)) {
    err.email = toast.error('Định dạng email không đúng.')
  }

  if (!password) {
    err.password = toast.error('Vui lòng thêm mật khẩu của bạn.')
  } else if (password.length < 6) {
    err.password = toast.error('Mật khẩu phải từ 6 kí tự trở lên.')
  }

  if (password !== cf_password) {
    err.cf_password = toast.error('Mật khẩu không trùng khớp.')
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  }
}

function validateEmail(email) {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export default valid
