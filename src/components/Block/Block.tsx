import classNames from 'classnames';
import React, { Children } from 'react';
import styles from './Block.module.scss';

interface IBlockProps {
  children: React.ReactNode;
  className?: string;
}

function Block(props: IBlockProps) {
  const { children, className } = props;

  return (
    <div className={classNames(styles.blockWrapper, className)}>{children}</div>
  );
}

export default Block;
