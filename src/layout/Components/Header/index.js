import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import config from '@/config';
import images from '@/assest/images';

// import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; //optional
import { Link } from 'react-router-dom';
import {
    faArrowRightFromBracket,
    faCloudArrowUp,
    faEllipsisVertical,
    faGear,
    faGlobe,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@/Components/Button';
import { InboxIcon, UploadIcon } from '@/Components/Icons';
import Image from '@/Components/Image';
import Search from '@/layout/Components/Search';
import Menu from '@/Components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard Shortcut',
    },
];

function Header() {
    // Handle Menu Change
    const currentUser = true;
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View Profile',
            to: '/Profile',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>,
            title: 'Get Coins',
            to: '/Coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Settings',
            to: '/Settings',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('link-logo')}>
                        {' '}
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-user')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-user')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-user')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                                Upload
                            </Button>
                            <Button primary onClick={() => console.log('Upload')}>
                                Log in{' '}
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/76c7261e5d03c8d5414879b18bef6f67~c5_100x100.jpeg?x-expires=1657033200&x-signature=j%2B00ikIdWqjsRRJkORHKXeh1E6Q%3D"
                                alt="Lê Hồng Ngọc Trân"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/76c7261e5d03c8d5414879b18bef6f67~c5_100x100.jpeg?x-expires=1657033200&x-signature=j%2B00ikIdWqjsRRJkORHKXeh1E6Q%3D"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
