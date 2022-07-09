import { useState, forwardRef } from 'react';
import images from '@/assest/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const hanldeError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={hanldeError}
        ></img>
    );
});

export default Image;
