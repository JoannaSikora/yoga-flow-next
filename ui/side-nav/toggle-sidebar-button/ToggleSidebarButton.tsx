'use client';

import styles from './toggle-sidebar-button.module.css';
import { useSideNavContext } from '@/lib/side-nav-context';
import { clsx } from 'clsx';

export default function ToggleSidebarButton() {
  const { toggleOpen, isOpen } = useSideNavContext();

  return (
    <button
      onClick={toggleOpen}
      className={clsx(styles.button, {  [styles.hidden] : !isOpen})}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}
