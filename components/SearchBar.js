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
    <div className="sm:flex sm:flex-row md:flex md:flex-row lg:flex xl:flex 2xl:flex lg:flex-row xl:flex-row 2xl:flex-row items-center gap-2 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-6 2xl:pt-6 pt-2 mt-0 pb-2 ">
      <SelectSearchBar />
      <div className="w-36 sm:grow md:grow lg:grow xl:grow 2xl:grow">
        <TextInput
          id="search"
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e, e.target.value, users)}
        />
      </div>
      <div className="flex-none ">
        <button
          onClick={handleAction}
          className="flex items-center hover:text-secondary "
        >
          <PlusCircleIcon className="w-10 h-10 flex-none mt-2 mr-1 md:mt-0  " />
          <span className="whitespace-nowrap mt-2 md:m-0 ">
            Add new patients
          </span>
        </button>
      </div>
    </div>
  );
}
