'use client';

import Title from '@/ui/side-nav/title/Title';
import styles from './side-nav.module.css';
import ToggleSidebarButton from '@/ui/side-nav/toggle-sidebar-button/ToggleSidebarButton';
import { useSideNavContext } from '@/lib/side-nav-context';
import { clsx } from 'clsx';
import DifficultyLevelFilter from '@/ui/side-nav/difficulty-level-filter/DifficultyLevelFilter';
import { Suspense } from 'react';

export default function SideNav() {
  const { isOpen } = useSideNavContext();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={clsx(styles.container, { [styles.hidden]: !isOpen })}>
        <ToggleSidebarButton />
        <DifficultyLevelFilter />
        <Title />
      </div>
    </Suspense>
  );
}
