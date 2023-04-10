import classNames from 'classnames';
import React from 'react';
import styles from './Headers.module.scss';

enum EHeaders {
  H1,
  H2,
  H3,
  H4,
  H5,
}

interface Props {
  children: React.ReactNode;
  type: EHeaders;
  className?: string;
}

function Headers(props: Props) {
  const { children, type, className } = props;
  if (type === EHeaders.H1)
    return <h1 className={classNames(styles.h1, className)}>{children}</h1>;
  if (type === EHeaders.H2)
    return <h2 className={classNames(styles.h2, className)}>{children}</h2>;
  if (type === EHeaders.H3)
    return <h3 className={classNames(styles.h3, className)}>{children}</h3>;
  if (type === EHeaders.H4)
    return <h4 className={classNames(styles.h4, className)}>{children}</h4>;
  if (type === EHeaders.H5)
    return <h5 className={classNames(styles.h5, className)}>{children}</h5>;

  return null;
}

Headers.Type = EHeaders;

export default Headers;
