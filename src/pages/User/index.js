import styles from './user.module.scss';
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
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { faFacebook, faFacebookMessenger, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '~/assets/img/logo.png';
import avatar from '~/assets/img/avatar1.jpg';
import qr from '~/assets/img/qrcode_www.youtube.com.png';
import firebase from '~/pages/firebase.js';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import zalo from '~/assets/img/Screenshot 2023-06-08 140530.png';

const cx = className.bind(styles);
const db = getDatabase();
const getInfoUser = ref(db, 'users/1');
const getData = ref(db, 'data/2023/5');
const getSpdWater = ref(db, 'data/SpdWater');

function User() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    let navigate = useNavigate();
    function DashBoard() {
        navigate('/dashboard');
    }
    function Home() {
        navigate('/home');
    }
    function Statistical() {
        navigate('/statistical');
    }

    function Logout() {
        alert('Logout ?');
        navigate('/');
    }

    // updateInfor();

    const [name, setName] = useState('');
    const [address, setaddress] = useState('');
    const [id, setid] = useState('');
    useEffect(() => {
        onValue(getInfoUser, (snapshot) => {
            const data = snapshot.val();
            // console.log(data);
            setName(data.name);
            setaddress(data.address);
            setid(data.id);
        });
    }, []);

    // end

    /* tinh tong luong nuoc */
    const [total, setTotal] = useState('');
    const [money, setMoney] = useState('');

    useEffect(() => {
        onValue(getData, (snapshot) => {
            const dataUse = snapshot.val();
            // console.log("data mcu");
            // console.log(dataUse);
            let sum = 0;
            for (const key in dataUse) {
                if (typeof dataUse[key] === 'number') {
                    sum += dataUse[key];
                }
            }
            setTotal(sum.toString());
            setMoney(dataUse.money);
        });
    }, []);

    //
    const [SpdWater, setSpdWater] = useState('');
    useEffect(() => {
        onValue(getSpdWater, (snapshot) => {
            const spd = snapshot.val();
            console.log(spd);
            setSpdWater(spd.toString());
        });
    }, []);

    return (
        <div className={cx('home')}>
            <div className={cx('header')}>
                <div className={cx('header_logo')}>
                    <FontAwesomeIcon className={cx('clock_icon')} icon={faClock} />
                    <h1 className={cx('logo_h1')}> Smart Water Meter</h1>
                </div>
                <div className={cx('header_menu')}>
                    <ul className={cx('menu_nav')}>
                        <li onClick={Home} className={cx('menu_li')}>
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
                                    <a className={cx('li_a_sub')}>User</a>
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
                <div className={cx('content_user')}>
                    <div className={cx('user_form')}>
                        <div className={cx('user_avatar')}>
                            <img
                                src={avatar}
                                style={{
                                    borderRadius: '50%',
                                    width: '300px',
                                    height: '300px',
                                }}
                            />
                        </div>
                        <div className={cx('user_info')}>
                            <h2 className={cx('info_heading')}>User Infomation</h2>
                            <div className={cx('info_list')}>
                                <span className={cx('info_key')}>Fullname: </span>
                                <span className={cx('info_value')}>{name}</span>
                                <br />
                                <span className={cx('info_key')}>ID: </span>
                                <span className={cx('info_value')}>{id}</span>
                                <br />
                                <span className={cx('info_key')}>Address: </span>
                                <span className={cx('info_value')}>{address}</span>
                                <br />
                            </div>
                        </div>
                        <div className={cx('user_project')}>
                            <h2 className={cx('user_project_h2')}>Smart Water Meter</h2>
                        </div>
                        <div className={cx('user_copyright')}>
                            <div className={cx('copyright')}>
                                <FontAwesomeIcon className={cx('icon_copyright')} icon={faCopyright} />
                                <h2 className={cx('copyright_h2')}>Build To Win</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content_qr')}>
                    <img
                        src={qr}
                        style={{
                            borderRadius: '4px',
                            width: '300px',
                            height: '300px',
                        }}
                    />
                </div>
                <div>
                    {!isOpen && (
                        <div className={cx('popup_handle')} onClick={togglePopup}>
                            <FontAwesomeIcon className={cx('icon_li_popup')} icon={faFacebookMessenger} />
                        </div>
                    )}

                    {isOpen && (
                        <div>
                            <div className={cx('popup_overlay')} onClick={togglePopup} />
                            <div className={cx('popup_message')}>
                                <div className={cx('popup_content')}>
                                    <div className={cx('popup_content_mes')}>
                                        <button className={cx('icon_toggle_xmark')} onClick={togglePopup}>
                                            <FontAwesomeIcon className={cx('icon_li_xmark')} icon={faXmark} />
                                        </button>
                                        <h2>Trò chuyện cùng Leader của chúng tôi</h2>
                                        <img
                                            src={zalo}
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
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
                                    <a href="tel:035900970" className={cx('icon_social')}>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('contact_mail')}>
                            <a className={cx('icon_social_map')}>
                                <FontAwesomeIcon icon={faEnvelope} /> qwertyuiop123@gmail.com
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
export default User;
