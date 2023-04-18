import styles from './home.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCopyright, faEnvelope, faUser, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import {
    faChartSimple,
    faHouse,
    faLocationDot,
    faPeopleGroup,
    faPhone,
    faTable,
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '~/assets/img/banner1.jpg';
import logo from '~/assets/img/logo.png';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = className.bind(styles);

function Home() {
    let navigate = useNavigate();
    function DashBoard() {
        navigate('/dashboard');
    }

    function User() {
        navigate('/user');
    }
    function Statistical() {
        navigate('/statistical');
    }
    function Logout() {
        alert('Logout ?');
        navigate('/');
    }

    return (
        <div className={cx('home')}>
            <div className={cx('header')}>
                <div className={cx('header_logo')}>
                    <FontAwesomeIcon className={cx('clock_icon')} icon={faClock} />
                    <h1 className={cx('logo_h1')}> Smart Water Meter</h1>
                </div>
                <div className={cx('header_menu')}>
                    <ul className={cx('menu_nav')}>
                        <li className={cx('menu_li')}>
                            <FontAwesomeIcon className={cx('icon_li')} icon={faHouse} />
                            <a className={cx('li_a')}>Home</a>
                        </li>
                        <li onClick={DashBoard} className={cx('menu_li')}>
                            <FontAwesomeIcon className={cx('icon_li')} icon={faChartSimple} />
                            <a className={cx('li_a')}>Dashboard</a>
                        </li>
                        <li onClick={Statistical} className={cx('menu_li')}>
                            <FontAwesomeIcon className={cx('icon_li')} icon={faTable} />
                            <a className={cx('li_a')}>Statistical</a>
                        </li>
                        <li className={cx('menu_li_user')}>
                            <FontAwesomeIcon className={cx('icon_li')} icon={faUserAlt} />
                            <a className={cx('li_a')}>User</a>
                            <ul className={cx('user_menu')}>
                                <li>
                                    <a onClick={User} className={cx('li_a_sub')}>
                                        User
                                    </a>
                                </li>
                                <li>
                                    <a onClick={Logout} className={cx('li_a_sub')}>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('content_wrapper')}>
                    <div className={cx('main_content')}>
                        <div className={cx('content_banner')}>
                            <img
                                src={banner1}
                                style={{
                                    borderRadius: '8px',
                                    width: '100%',
                                }}
                            />
                            <div className={cx('main_introduce')}>
                                <div className={cx('introduce_content')}>
                                    <h2 className={cx('introduce_heading')}>What is a Smart Water Meter ?</h2>
                                    <p className={cx('introduce_para')}>
                                        A smart water meter works in the same way as a traditional water meter in that
                                        it monitors the flow of water into your business or building. However smart
                                        water meters have many advantages including real time data, wireless technology,
                                        smart water analytics, actionable insights and eliminates manual readings.
                                        Hospitality or any commercial business can easily track their water usage and
                                        costs in real time using these features. In this we will outline a detailed
                                        comparison on water loggers, water meters and the difference between utility
                                        meters, AMR and the latest AI powered smart water meter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <div className={cx('footer_wrapper')}>
                    <div className={cx('footer_row')}>
                        <div className={cx('footer_contact')}>
                            <img
                                src={logo}
                                style={{
                                    borderRadius: '8px',
                                    width: '400px',
                                    height: '250px',
                                }}
                            />
                        </div>
                    </div>
                    <div className={cx('footer_row')}>
                        <div className={cx('contact_footer')}>
                            <div className={cx('contact_wrapper')}>
                                <h2 className={cx('contact_heading')}>Contact Us</h2>
                                <div className={cx('contact_social')}>
                                    <a className={cx('icon_social')}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a className={cx('icon_social')}>
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </a>
                                    <a className={cx('icon_social')}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="tel:0917751379" className={cx('icon_social')}>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('contact_mail')}>
                            <a className={cx('icon_social_map')}>
                                <FontAwesomeIcon icon={faEnvelope} /> tranquyhuu@iuh.edu.vn
                            </a>
                        </div>
                        <div className={cx('contact_location')}>
                            <a className={cx('icon_social_map')}>
                                <FontAwesomeIcon icon={faLocationDot} /> 12 Nguyen Van Bao, Ward 4, Go Vap District, Ho
                                Chi Minh City
                            </a>
                        </div>
                    </div>
                    <div className={cx('footer_row')}>
                        <div className={cx('footer_news')}>
                            <div className={cx('footer_more')}>
                                <h2 className={cx('contact_heading')}>More</h2>
                                <div className={cx('more_list')}>
                                    <ul>
                                        <li className={cx('list_a')}>
                                            <a className={cx('list_link')} href="http://vea.gov.vn/">
                                                Tổng Cục Môi Trường
                                            </a>
                                        </li>
                                        <li className={cx('list_a')}>
                                            <a
                                                className={cx('list_link')}
                                                href="https://www.tintucnongnghiep.com/search/label/Th%E1%BB%9Di%20ti%E1%BA%BFt%20n%C3%B4ng%20v%E1%BB%A5"
                                            >
                                                Thời Tiết Nông Vụ
                                            </a>
                                        </li>
                                        <li className={cx('list_a')}>
                                            <a className={cx('list_link')} href="https://www.evn.com.vn/">
                                                Điện Lực EVN
                                            </a>
                                        </li>
                                        <li className={cx('list_a')}>
                                            <a className={cx('list_link')} href="https://iuh.edu.vn/">
                                                IUH - Đại Học Công Nghiệp TP.HCM
                                            </a>
                                        </li>
                                        <li className={cx('list_a')}>
                                            <a className={cx('list_link')} href="https://fet.iuh.edu.vn/">
                                                FET - Khoa Công Nghệ Điện Tử
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer_us')}>
                    <h3>
                        <FontAwesomeIcon icon={faCopyright} /> Build To Win
                    </h3>
                </div>
            </div>
        </div>
    );
}
export default Home;
