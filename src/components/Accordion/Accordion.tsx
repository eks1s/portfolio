import React, { useState } from 'react';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import styles from './Accordion.module.scss';

interface IAccordionProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
}

const Accordion = (props: IAccordionProps) => {
  const { children, title } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.header}>
        {title}
        <Button onClick={() => setOpen(!open)} name={open ? 'Less' : 'More'} />
      </div>

      {open ? children : '...'}
    </div>
  );
};

export default Accordion;
