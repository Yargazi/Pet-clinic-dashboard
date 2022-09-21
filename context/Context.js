import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [patients, setPatients] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [petType, setPetType] = useState(null);
  const [patientsInfo, setPatientsInfo] = useState({});
  const [searchedUser, setSearchedUser] = useState([]);

  const createAnAppointment = async (patientsInfo) => {
    const response = await axios.post(`/api/patients`, patientsInfo);
    setModalOpen(false);
    setPatientsInfo("");
    setPetType("");
    return response.data;
  };

  const editAnAppointment = async (patientsInfo) => {
    const response = await axios.put(
      `/api/patients/${patientsInfo._id}`,
      patientsInfo
    );
    setModalOpen(false);
    setPatientsInfo("");
    setPetType("");
    return response.data;
  };

  const delAnAppointment = async () => {
    const response = await axios.delete(`/api/patients/${patientsInfo._id}`);
    alert(response.data.message);
    setModalOpen(false);
    setPatientsInfo("");
    setPetType("");
    return response.data;
  };

  const selectPatient = (id) => {
    const patient = patients.find((patient) => patient._id === id);
    if (patient) {
      setPatientsInfo(patient);
      setPetType(patient.petType);
    }
  };

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        selectedAction,
        petType,
        patientsInfo,
        searchedUser,
        patients,

        setPatients,
        setSearchedUser,
        setModalOpen,
        setSelectedAction,
        setPetType,
        setPatientsInfo,
        createAnAppointment,
        delAnAppointment,
        selectPatient,
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
