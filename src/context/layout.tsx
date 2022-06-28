import React from "react";

export type Props = {
  isSidebarOpen: boolean;
  isBannerOpen: boolean;
  setIsBannerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
};

const LayoutContext = React.createContext<Props | null>(null);

const LayoutProvider = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

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

  const contextValue = React.useMemo(() => {
    return {
      isSidebarOpen,
      isBannerOpen,
      setIsBannerOpen,
      toggleSidebar,
    };
  }, [isSidebarOpen, isBannerOpen]);

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
