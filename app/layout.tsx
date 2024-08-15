import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import SideNav from '@/ui/side-nav/SideNav';
import { SideNavProvider } from '@/lib/side-nav-context';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yoga flow',
  description: 'Find your Asana'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNavProvider>
          <SideNav />
        </SideNavProvider>
        <div className={styles.main}>{children}</div>
      </body>
    </html>
  );
}
