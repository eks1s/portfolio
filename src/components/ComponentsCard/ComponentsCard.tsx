import React from 'react';
import styles from './ComponentsCard.module.scss';

interface Props {
  name: string;
}

function ComponentsCard({ name = 'Anton' }: Props) {
  return <div className={styles.cardWrapper}>{name}</div>;
}

export default ComponentsCard; 
