import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import { useEffect, useState } from 'react';
import images from '@/assest/images';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';

import { Wrappers as PopperWrapper } from '@/Components/Popper';
import AccountItem from '@/Components/AccountItem';
import Button from '@/Components/Button';
import Menu from '@/Components/Popper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>,
        title: 'English',
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
    const [searchResult, setSearchResult] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 5000);
    // }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    // visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                Ket qua
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input spellCheck={false} placeholder="Search accounts and videos"></input>
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                        Upload
                    </Button>
                    <Button primary onClick={() => console.log('Upload')}>
                        Log in{' '}
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
