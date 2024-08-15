import { clsx } from 'clsx';
import styles from './Button.module.css';

interface Props {
  query: string | null;
  difficultyLevel: string;
  onClick: (difficultyLevel: string) => void;
}

export default function Button({ query, difficultyLevel, onClick }: Props) {
  return (
    <button
      className={clsx(styles.button, { [styles.active]: query && query === difficultyLevel })}
      onClick={() => onClick(difficultyLevel)}>{difficultyLevel}
    </button>
  )
}
