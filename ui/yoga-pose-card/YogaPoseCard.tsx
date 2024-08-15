import { YogaPose } from '@/interfaces/yoga-pose';
import Image from 'next/image';
import styles from './yoga-pose-card.module.css';

interface Props {
  yogaPose: YogaPose;
}

export default async function YogaPoseCard({ yogaPose }: Props) {
  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.title}>{yogaPose.englishName}</p>
        <p className={styles.subtext}>{yogaPose.sanskritName}</p>
      </div>

      <Image
        src={yogaPose.icon}
        className={styles.image}
        alt={`${yogaPose.englishName}'s image`}
        width={96}
        height={96}
      />

      <div className={styles.tags}>
        <div className={styles.tag}>{yogaPose.level}</div>
        <>{yogaPose.bodyParts.map(bodyPart => (
          <div
            key={bodyPart}
            className={styles.tag}>{bodyPart}
          </div>))}
        </>
      </div>
    </div>
  )
    ;
}
