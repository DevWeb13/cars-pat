'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';

interface ActiveLinkContextProps {
  activeLink: string | null;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

const ActiveLinkContext = createContext<ActiveLinkContextProps | undefined>(
  undefined
);

interface ActiveLinkProviderProps {
  children: ReactNode;
}

export const useActiveLink = (): ActiveLinkContextProps => {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error(
      "useActiveLink doit être utilisé au sein d'un ActiveLinkProvider"
    );
  }
  return context;
};

export const ActiveLinkProvider: React.FC<ActiveLinkProviderProps> = ({
  children,
}) => {
  const [activeLink, setActiveLink] = useState<string>('home');

  // Utilisez useMemo pour mémoriser l'objet
  const value = useMemo(() => ({ activeLink, setActiveLink }), [activeLink]);

  return (
    <ActiveLinkContext.Provider value={value}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
