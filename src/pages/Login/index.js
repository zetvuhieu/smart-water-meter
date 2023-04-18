import styles from './login.module.scss';
import className from 'classnames/bind';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '~/assets/img/logo.png';
import { faFacebook, faGoogle, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = className.bind(styles);

function Login() {
    let navigate = useNavigate();
    function Login() {
        navigate('/home');
    }

    return (
        <div className={cx('login')}>
            <div className={cx('logo')}>
                <div className={cx('logo_img')}>
                    <img src={logo} />
                </div>
            </div>
            <div className={cx('form')}>
                <div className={cx('form_wrapper')}>
                    <div className={cx('form_box')}>
                        <div className={cx('form_box_child')}>
                            <div className={cx('form_heading')}>
                                <h2>LOGIN</h2>
                            </div>
                            <div className={cx('form_input')}>
                                <input className={cx('input_user')} placeholder=" Username" />
                                <input className={cx('input_user')} placeholder=" Password" />
                                <div className={cx('forgot')}>
                                    <a>Forgot password ?</a>
                                </div>
                            </div>
                            <div onClick={Login} className={cx('login_button')}>
                                <button className={cx('button')}>Login</button>
                            </div>
                            <div className={cx('login_socail')}>
                                <div className={cx('socail_wrapper')}>
                                    <p>Or signup using</p>
                                    <div className={cx('social_button')}>
                                        <a className={cx('social_fb')}>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                        <a className={cx('social_gg')}>
                                            <FontAwesomeIcon icon={faGooglePlus} />
                                        </a>
                                        <a className={cx('social_tw')}>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
