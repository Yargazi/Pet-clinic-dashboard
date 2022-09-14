import React from "react";
import Dropdown from "../components/DropdownDogType";

const NewElementInTable = () => {
  return (
    <div>
      <label className="sr-only">Name</label>
      <input
        id="Name"
        name="Name"
        type="text"
        autocomplete="email"
        required
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Name"
      ></input>
      <label className="sr-only">Phone</label>
      <input
        id="Phone"
        name="Phone"
        type="Phone"
        autocomplete="Phone"
        required
        className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Phone"
      ></input>
      <label className="sr-only">Pet Name</label>
      <input
        id="PetName"
        name="PetName"
        type="text"
        required
        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Pet Name"
      ></input>
      <label className="sr-only">Pet Birth Date</label>
      <input
        id="PetBirthDate"
        name="PetBirthDate"
        type="date"
        required
        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Pet Birth Date"
      ></input>
      <div className="flex-1 justify-start basis-auto">
        <Dropdown />
      </div>
    </div>
  );
};
export default NewElementInTable;
