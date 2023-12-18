import React from "react";
import { CollapsiblenavigationProvider } from "./CollapsibleNavigation";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <CollapsiblenavigationProvider>{children}</CollapsiblenavigationProvider>
  );
};
