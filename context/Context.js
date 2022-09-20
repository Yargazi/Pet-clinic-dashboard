import { createContext, useContext, useState } from "react";

import axios from "axios";

const BASE_URL = "http://localhost:3000";
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [petType, setPetType] = useState(null);
  const [patientsInfo, setPatientsInfo] = useState({});
  const [selectedId, setSelectedId] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);

  const createAnAppointment = async (patientsInfo) => {
    const response = await axios.post(`${BASE_URL}/api/patients`, patientsInfo);
    setModalOpen(false);
    setPatientsInfo("");
    setPetType("");
    return response.data;
  };

  const editAnAppointment = async (patientsInfo) => {
    const _id = selectedId;
    const response = await axios.put(
      `${BASE_URL}/api/patients/${_id}`,
      patientsInfo
    );
    setPatientsInfo("");
    setPetType("");
    return response.data;
  };

  const delAnAppointment = async (_id) => {
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
        searchedUser,
        selectedId,

        setSearchedUser,
        setModalOpen,
        setSelectedAction,
        setPetType,
        setPatientsInfo,
        createAnAppointment,
        delAnAppointment,
        setSelectedId,
        editAnAppointment,
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
