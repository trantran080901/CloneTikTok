import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a1b6c12d24ec4c5a17c046a95ca46019~c5_300x300.webp?x-expires=1656514800&x-signature=SfSV0f0EuLj6eJrkUNeP3JuhomE%3D"
                alt="avatar"
            ></img>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen JiSoo</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>Nguyen Jisoo</span>
            </div>
        </div>
    );
}

export default AccountItem;
