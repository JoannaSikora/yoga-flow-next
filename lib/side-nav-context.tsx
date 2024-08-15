'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface SideNavContext {
  isOpen: boolean;
  toggleOpen: () => void;
}

const SideNavContext = createContext<SideNavContext>({
  isOpen: true,
  toggleOpen: () => {
  }
})

interface SideNavProviderProps {
  children: ReactNode;
}


export const SideNavProvider: FC<SideNavProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = (): void => {
    setIsOpen(!isOpen);
  }

  return (
    <SideNavContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </SideNavContext.Provider>
  )
}

export const useSideNavContext = (): SideNavContext => {
  const { isOpen, toggleOpen } = useContext(SideNavContext);

  return {
    isOpen, toggleOpen
  }
}
