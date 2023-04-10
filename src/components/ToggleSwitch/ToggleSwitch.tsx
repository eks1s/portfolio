import { EToggleSwitchEnum, IToggleSwitchProps } from './ToggleSwitchTypes';
import styles from './ToggleSwitch.module.scss';
import classNames from 'classnames';

export const ToggleSwitch = (props: IToggleSwitchProps): JSX.Element => {
  const { type, isChecked, setIsChecked } = props;

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={classNames(styles.switch, styles[type])}>
      <input onClick={onChange} type="checkbox" checked={isChecked} />
      <span className={classNames(styles.slider, styles[type])} />
    </label>
  );
};

ToggleSwitch.Type = EToggleSwitchEnum;
