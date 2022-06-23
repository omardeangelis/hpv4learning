import React from "react";

export type Props = {
  isSidebarOpen: boolean;
  isCourseMenuOpen: boolean;
  isBannerOpen: boolean;
  setIsBannerOpen: () => void;
  toggleSidebar: () => void;
  toggleCourseMenu: () => void;
  handleClickAway: () => void;
};

const LayoutContext = React.createContext<Props | null>(null);

const LayoutProvider = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const [isCourseMenuOpen, setIsCourseMenuOpen] =
    React.useState<boolean>(false);
  const [isBannerOpen, setIsBannerOpen] = React.useState<boolean>(true);

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
    setIsCourseMenuOpen(false);
  }, []);

  const contextValue = React.useMemo(() => {
    return {
      isCourseMenuOpen,
      isSidebarOpen,
      isBannerOpen,
      setIsBannerOpen,
      toggleCourseMenu,
      toggleSidebar,
      handleClickAway,
    };
  }, [isCourseMenuOpen, isSidebarOpen, isBannerOpen]);

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
