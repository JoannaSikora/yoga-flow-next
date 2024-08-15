import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import styles from './DifficultyLevelFilter.module.css';
import Button from '@/ui/side-nav/difficulty-level-filter/button/Button';

export default function DifficultyLevelFilter() {
  const searchParams = useSearchParams();
  const query = searchParams.has('query') ? searchParams.get('query') : '';
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string | null): void => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const toggleSearch = (level: string): void => {
    if (query === level) {
      handleSearch(null);
    } else {
      handleSearch(level);
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Difficulty level filter</p>
      <div>
        <Button
          query={query}
          difficultyLevel="Beginner"
          onClick={toggleSearch} />
        <Button
          query={query}
          difficultyLevel="Intermediate"
          onClick={toggleSearch} />
        <Button
          query={query}
          difficultyLevel="Advanced"
          onClick={toggleSearch} />
      </div>
    </div>
  )
}
