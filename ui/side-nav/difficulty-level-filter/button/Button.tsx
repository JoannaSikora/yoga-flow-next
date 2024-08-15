import { clsx } from 'clsx';
import styles from './button.module.css';
import { DifficultyLevel } from '@/interfaces/yoga-pose';

interface Props {
  query: string | null;
  difficultyLevel: DifficultyLevel;
  onClick: (difficultyLevel: DifficultyLevel) => void;
}

export default function Button({ query, difficultyLevel, onClick }: Props) {
  return (
    <button
      className={clsx(styles.button, { [styles.active]: query && query === difficultyLevel })}
      onClick={() => onClick(difficultyLevel)}>{difficultyLevel}
    </button>
  )
}
