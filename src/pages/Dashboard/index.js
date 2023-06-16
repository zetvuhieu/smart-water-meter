import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './dashboard.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
    faChartSimple,
    faHouse,
    faLocationDot,
    faPeopleGroup,
    faPhone,
    faTable,
    faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MonthlyChart2 from '~/pages/chart2.js';
import logo from '~/assets/img/logo.png';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import firebase from '~/pages/firebase.js';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const db = getDatabase();
const getInfoUser = ref(db, 'users/1');
const getData = ref(db, 'data/2023/5');
const getSpdWater = ref(db, 'data/SpdWater');
const cx = className.bind(styles);

function MyChart() {
    let navigate = useNavigate();
    function Home() {
        navigate('/home');
    }
    function Statistical() {
        navigate('/statistical');
    }
    function User() {
        navigate('/user');
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

    const [VanState, setVanState] = useState(false);
    function onHandle() {
        setVanState(true);
    }
    function offHandle() {
        setVanState(false);
    }

    return (
        <div className={cx('dashboard')}>
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
                        <li className={cx('menu_li')}>
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
                <div className={cx('content_heading')}>
                    <h2>CHART SYSTEM</h2>
                </div>
                <div className={cx('content_data')}>
                    <div className={cx('data_box')}>
                        <div className={cx('content_box')}>
                            <div className={cx('box_heading')}>
                                <h2 className={cx('box_h2')}> Overall mass water</h2>
                            </div>
                            <div className={cx('data_value')}>{total} M3</div>
                        </div>
                        <div className={cx('content_box')}>
                            <div className={cx('box_heading')}>
                                <h2 className={cx('box_h2')}> Total consumption this month</h2>
                            </div>
                            <div className={cx('data_value')}>{SpdWater}</div>
                        </div>
                        <div className={cx('content_box')}>
                            <div className={cx('box_heading')}>
                                <h2 className={cx('box_h2')}> Into money</h2>
                            </div>
                            <div className={cx('data_value')} id="money">
                                80,000 vnd
                            </div>
                        </div>
                        <div className={cx('content_box')}>
                            <div className={cx('box_control')}>
                                <div className={cx('heading_control')}>
                                    <span className={cx('box_h2')}>Trạng thái van :</span>
                                    <div className={cx('control_state')}>{VanState ? 'On' : 'Off'}</div>
                                </div>
                                <div className={cx('button_control')}>
                                    <div className={cx('button_ctr')}>
                                        <button className={cx('button_handle')} onClick={onHandle}>
                                            On
                                        </button>
                                        <button className={cx('button_handle')} onClick={offHandle}>
                                            Off
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content_chart2')}>
                    <MonthlyChart2 />
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
export default MyChart;
