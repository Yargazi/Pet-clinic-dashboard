import { createContext, useContext, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";

import axios from "axios";

const BASE_URL = "http://localhost:3000";
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [petType, setPetType] = useState(null);
  const [patientsInfo, setPatientsInfo] = useState({});
  const [selectedId, setSelectedId] = useState("");

  const createAnAppointment = async (patientsInfo) => {
    const response = await axios.post(`${BASE_URL}/api/patients`, patientsInfo);

    return response.data;
  };

  const delUser = async (_id) => {
    const response = await axios.delete(`${BASE_URL}/api/patients/${_id}`);
    alert(response.data.message);
    setModalOpen(false);
    return response.data;
  };

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        selectedAction,
        petType,
        patientsInfo,

        selectedId,
        setModalOpen,
        setSelectedAction,
        setPetType,
        setPatientsInfo,
        createAnAppointment,
        delUser,
        setSelectedId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContext;
