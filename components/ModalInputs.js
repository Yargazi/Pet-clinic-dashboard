import React, { useState } from "react";
import Dropdown from "./DropdownDogType";
import { useAppContext } from "@/context/Context";
const ModalInputs = () => {
  const { petType, patientsInfo, setPatientsInfo } = useAppContext();

  const getTargetValue = (e) => {
    setPatientsInfo({
      ...patientsInfo,
      [e.target.name]: e.target.value,
    });
    console.log(patientsInfo);
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
        onChange={getTargetValue}
      ></input>
      <label className="sr-only">Phone</label>
      <input
        id="Phone"
        name="phone"
        type="Phone"
        autoComplete="Phone"
        required
        className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Phone"
        onChange={getTargetValue}
      ></input>
      <label className="sr-only">Pet Name</label>
      <input
        id="PetName"
        name="petName"
        type="text"
        required
        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Pet Name"
        onChange={getTargetValue}
      ></input>
      <label className="sr-only">Pet Age</label>
      <input
        id="PetAge"
        name="petAge"
        type="text"
        required
        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Pet Age"
        onChange={getTargetValue}
      ></input>
      <label className="sr-only">Pet Birth Date</label>
      <input
        id="PetBirthDate"
        name="petBirthDate"
        type="date"
        required
        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Pet Birth Date"
        onChange={getTargetValue}
      ></input>
      <div className="flex-1 justify-start basis-auto">
        <Dropdown />
      </div>
    </div>
  );
};
export default ModalInputs;
