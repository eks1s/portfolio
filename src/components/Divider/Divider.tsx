import styles from './Divider.module.scss';

interface Props {
  size?: number;
}

function Divider(props: Props) {
  const { size } = props;
  return (
    <div
      style={size ? { height: `${size}px` } : {}}
      className={styles.divider}
    />
  );
}

export default Divider;
