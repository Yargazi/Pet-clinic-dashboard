import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  // поч не могу передать опен в валуе???
  return (
    <AppContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContext;
