import React from "react";

export type Props = {
  isSidebarOpen: boolean;
  isCourseMenuOpen: boolean;
  toggleSidebar: () => void;
  toggleCourseMenu: () => void;
  handleClickAway: () => void;
};

const LayoutContext = React.createContext<Props | null>(null);

const LayoutProvider = ({ children }: { children: React.ReactChild }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const [isCourseMenuOpen, setIsCourseMenuOpen] =
    React.useState<boolean>(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen((old) => {
      if (!old) {
        document.body.classList.add("sidebar-open");
      } else {
        document.body.classList.remove("sidebar-open");
      }
      return !old;
    });
  }, []);

  const toggleCourseMenu = React.useCallback(() => {
    setIsCourseMenuOpen((old) => !old);
  }, []);

  const handleClickAway = React.useCallback(() => {
    console.log("dio porco");
    setIsCourseMenuOpen(false);
  }, []);

  const contextValue = React.useMemo(() => {
    return {
      isCourseMenuOpen,
      isSidebarOpen,
      toggleCourseMenu,
      toggleSidebar,
      handleClickAway,
    };
  }, [isCourseMenuOpen, isSidebarOpen]);

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

const useLayoutContext = () => {
  return React.useContext(LayoutContext);
};

export { useLayoutContext, LayoutProvider };
