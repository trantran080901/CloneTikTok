import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrappers as PopperWrapper } from '@/Components/Popper';
import { useState } from 'react';
import Header from './Header';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

//Function trống không gây lỗi
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            // visible
            interactive
            delay={[0, 800]}
            // offset={[1, 11]} // Ngang - Cao
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Languages"
                                onBack={() => {
                                    setHistory((prev) => history.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
