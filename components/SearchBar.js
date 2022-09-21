import React, { useState } from "react";
import { Dropdown, TextInput } from "flowbite-react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

import { useAppContext } from "../context/Context";

export default function SearchBar() {
  const {
    setModalOpen,
    setSelectedAction,
    setSearchedUser,
    patients: users,
  } = useAppContext();
  const [selectedTypeOfSearch, setSelectedTypeOfSearch] =
    useState("Search type");

  const handleAction = () => {
    setModalOpen(true);
    setSelectedAction("Add");
  };

  const handleSearch = (e, value, users) => {
    e.preventDefault();

    if (selectedTypeOfSearch === "By pet name") {
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
    <div className="flex flex-row items-center gap-2 pt-6 pb-2 ">
      <div className="flex-none ">
        <Dropdown label={selectedTypeOfSearch} inline={true}>
          <Dropdown.Item
            onClick={() => setSelectedTypeOfSearch("By owner name")}
          >
            Search by name
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedTypeOfSearch("By pet name")}>
            Search by pet name
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="grow ">
        <TextInput
          id="search"
          type="text"
          placeholder="Search"
          className=""
          onChange={(e) => handleSearch(e, e.target.value, users)}
        />
      </div>
      <div className="flex-none">
        <a
          href="#"
          alt="Add Button"
          onClick={handleAction}
          className="flex items-center hover:text-secondary "
        >
          <PlusCircleIcon className="w-10 h-10 flex-none" />
          <span className="whitespace-nowrap">Add new patients</span>
        </a>
      </div>
    </div>
  );
}
