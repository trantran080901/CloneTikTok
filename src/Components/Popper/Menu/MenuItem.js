import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '@/Components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} style={{ marginLeft: 0 }} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
