import React from "react";
import { TextInput } from "flowbite-react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import SelectSearchBar from "./SelectSearchBar";
import { useAppContext } from "../context/Context";

export default function SearchBar() {
  const {
    setModalOpen,
    setSelectedAction,
    selectedTypeOfSearch,
    setSearchedUser,
    patients: users,
  } = useAppContext();

  const handleAction = () => {
    setModalOpen(true);
    setSelectedAction("Add");
  };

  const handleSearch = (e, value, users) => {
    e.preventDefault();

    if (selectedTypeOfSearch === "PetName") {
      const userArr = users.filter((user) =>
        user.petName.toLowerCase().includes(value.toLowerCase())
      );
      setSearchedUser(userArr);
    } else {
      const userArr = users.filter((user) =>
        user.userName.toLowerCase().includes(value.toLowerCase())
      );
      setSearchedUser(userArr);
    }
  };
  return (
    <div className=" md:flex md:flex-row items-center gap-2 pt-6 pb-2  ">
      <SelectSearchBar />
      <div className="grow ">
        <TextInput
          id="search"
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e, e.target.value, users)}
        />
      </div>
      <div className="flex-none">
        <button
          onClick={handleAction}
          className="flex items-center hover:text-secondary "
        >
          <PlusCircleIcon className="w-10 h-10 flex-none mt-2 mr-1 md:mt-0" />
          <span className="whitespace-nowrap mt-2 md:m-0">
            Add new patients
          </span>
        </button>
      </div>
    </div>
  );
}
