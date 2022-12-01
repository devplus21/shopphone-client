import { message, Spin } from 'antd';
import axios from 'axios';
import { userApi } from 'common/apis/user.api';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.scss';

const Verify = () => {
  const navigate = useNavigate();

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { userId, verificationCode } = useParams();
  const [isLoadingVerifyUser, setIsLoadingVerifyUser] = useState(true);

  const verifyUser = async () => {
    setIsLoadingVerifyUser(true);

    try {
      await axios.post(userApi.verify, { id: userId, secret: verificationCode });
      message.success('Xác thực tài khoản thành công');
    } catch (error) {
      console.log('error', error);
      message.error('Xác thực tài khoản thất bại');
    }

    setIsLoadingVerifyUser(false);
  };

  useEffect(() => {
    if (loading) return;

    verifyUser();
  }, [userId, verificationCode, loading]);

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  return (
    <Spin spinning={isLoadingVerifyUser}>
      <div className='login'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-around'>
            <div className='customer-login'></div>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Verify;
