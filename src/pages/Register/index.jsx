import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Input, message, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, register } from '../../redux/actions/userAction';
import './styles.scss';

const Register = () => {
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  const [user, setUser] = useState({ email: '', password: '' });

  const { email, password } = user;

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    dispatch(register(user));
  };

  return (
    <Spin spinning={loading}>
      <div className='login'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-around'>
            <div className='customer-login'>
              <div id='login'>
                <div className='login-tit'>
                  <h1>Đăng ký</h1>
                </div>
                <form id='customer_login'>
                  <Input
                    size='large'
                    placeholder='Email'
                    name='email'
                    value={email}
                    prefix={<MailOutlined />}
                    onChange={registerDataChange}
                  />
                  <Input.Password
                    className='mt-3'
                    size='large'
                    placeholder='Mật khẩu'
                    name='password'
                    value={password}
                    prefix={<LockOutlined />}
                    onChange={registerDataChange}
                  />
                  <div className='d-flex req_pass justify-content-end'>
                    <Link to='/login'>Đăng nhập</Link>
                  </div>
                  <button onClick={registerSubmit} className='btn' size='large' block>
                    ĐĂNG Ký
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Register;
