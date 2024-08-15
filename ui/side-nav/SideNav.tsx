'use client';

import Title from '@/ui/side-nav/title/Title';
import styles from './SideNav.module.css';
import ToggleSidebarButton from '@/ui/side-nav/toggle-sidebar-button/ToggleSidebarButton';
import { useSideNavContext } from '@/lib/side-nav-context';
import { clsx } from 'clsx';
import DifficultyLevelFilter from '@/ui/side-nav/difficulty-level-filter/DifficultyLevelFilter';

export default function SideNav() {
  const { isOpen } = useSideNavContext();

  return (
    <div className={clsx(styles.container, { [styles.hidden]: !isOpen })}>
      <ToggleSidebarButton />
      <DifficultyLevelFilter />
      <Title />
    </div>
  );
}
