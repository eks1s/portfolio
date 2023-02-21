import Headers from '../Headers/Headers';
import photo from '../../assets/img/saportretpng.png';
import styles from './About.module.scss';
import { AboutBottom, AboutIcons, AboutLinks } from './AboutTypes';
import Experience from '../Experience/Experience';
import Divider from '../Divider/Divider';

function About() {
  return (
    <>
      <div className={styles.aboutWrapper}>
        <div className={styles.header}>
          {AboutLinks.map(({ name, link }) => (
            <a className={styles.link} key={name} href={link} target="_blank">
              {name}
            </a>
          ))}
        </div>
        <div className={styles.body}>
          <div className={styles.position}>Frontend / React Developer</div>
          <Headers className={styles.header} type={Headers.Type.H3}>
            console.live("Hello world!");
          </Headers>
          <p className={styles.description}>
            I've been developing on React for three years and I'm not going to
            stop learning new technologies.
          </p>
          <div className={styles.logos}>
            {AboutIcons.map(({ name, link }) => {
              return (
                <img
                  className={styles.logoCircle}
                  src={link}
                  key={name}
                  alt={name}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.footer}>
          {AboutBottom.map(({ name, title, description }) => {
            return (
              <div key={name}>
                <Headers className={styles.header} type={Headers.Type.H1}>
                  {name}
                </Headers>
                <p>{title}</p>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <img className={styles.photo} src={photo} alt="photo" />
      </div>
      <Divider size={50} />
      <div className={styles.work}>
        <div className={styles.experience}>
          <Headers type={Headers.Type.H3}>Experience</Headers>
          <Divider size={15} />
          <Experience />
        </div>

        <div className={styles.introduce}>
          <Headers type={Headers.Type.H5}>Introduce</Headers>
          <Divider size={30} />
          <Headers type={Headers.Type.H3}>Hello! I,m Anton Spiridonov</Headers>
          <Divider size={30} />
          <p>
            I've been developing on React for three years and I'm not going to
            stop learning new technologies. I am responsible and goal oriented
            team player. I am cheerful and active person. I love sports
            (especially football) and social activities. I like to keep up the
            conversation. My credo is always being honest to myself and telling
            the truth. I will always support my colleagues in difficult times
            and will do my best to help.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
