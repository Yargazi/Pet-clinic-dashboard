import React from "react";
import Dropdown from "./Dropdown";
import { useAppContext } from "../context/Context";
const ModalInputs = () => {
  const { patientsInfo, selectedPatient, setPatientsInfo } = useAppContext();

  const getTargetValue = (e) => {
    setPatientsInfo({
      ...patientsInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <label className="sr-only">Name</label>
      <input
        id="Name"
        name="userName"
        type="text"
        autoComplete="email"
        required
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Name"
        value={patientsInfo["userName"]}
        onChange={getTargetValue}
      />
      <label className="sr-only">Phone</label>
      <input
        id="Phone"
        name="phone"
        type="Phone"
        autoComplete="Phone"
        required
        className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Phone"
        value={patientsInfo["phone"]}
        onChange={getTargetValue}
      />
      <label className="sr-only">Pet Name</label>
      <input
        id="PetName"
        name="petName"
        type="text"
        required
        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Pet Name"
        value={patientsInfo["petName"]}
        onChange={getTargetValue}
      />
      <label className="sr-only">Pet Age</label>
      <input
        id="PetAge"
        name="petAge"
        type="text"
        required
        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Pet Age"
        value={patientsInfo["petAge"]}
        onChange={getTargetValue}
      />
      <label className="sr-only">Pet Birth Date</label>
      <input
        id="PetBirthDate"
        name="petBirthDate"
        type="date"
        required
        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Pet Birth Date"
        value={patientsInfo["petBirthDate"]}
        onChange={getTargetValue}
      />
      <div className="flex-1 justify-start basis-auto">
        <Dropdown />
      </div>
    </div>
  );
};
export default ModalInputs;
