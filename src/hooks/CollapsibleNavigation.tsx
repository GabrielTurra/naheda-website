import React, { useState, useCallback, createContext, useContext } from "react";

interface CollapsiblenavigationContextProps {
  openCollapsiblenavigation(): void;
  closeCollapsiblenavigation(): void;
  toggleCollapsiblenavigation(): void;
  isOpen: boolean;
}

interface CollapsiblenavigationProviderProps {
  children: React.ReactNode;
}

const CollapsiblenavigationContext =
  createContext<CollapsiblenavigationContextProps>(
    {} as CollapsiblenavigationContextProps,
  );

export const CollapsiblenavigationProvider: React.FC<
  CollapsiblenavigationProviderProps
> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCollapsiblenavigation = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCollapsiblenavigation = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleCollapsiblenavigation = useCallback(() => {
    setIsOpen((prevsOpen) => !prevsOpen);
  }, []);

  return (
    <CollapsiblenavigationContext.Provider
      value={{
        openCollapsiblenavigation,
        closeCollapsiblenavigation,
        toggleCollapsiblenavigation,
        isOpen,
      }}
    >
      {children}
    </CollapsiblenavigationContext.Provider>
  );
};

export function useCollapsiblenavigation(): CollapsiblenavigationContextProps {
  const context = useContext(CollapsiblenavigationContext);

  return context;
}
