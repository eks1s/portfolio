import classNames from 'classnames';
import React from 'react';
import Headers from '../Headers/Headers';
import styles from './Button.module.scss';

interface IButtonProps {
  name: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

function Button(props: IButtonProps) {
  const { name = 'click', onClick, disabled = false, className } = props;
  return (
    <button
      disabled={disabled}
      className={classNames(
        styles.button,
        disabled && styles.disabled,
        className
      )}
      onClick={onClick}
    >
      <Headers type={Headers.Type.H5}>{name}</Headers>
    </button>
  );
}

export default Button;
