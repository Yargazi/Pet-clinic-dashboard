import React from "react";
import { Dropdown, TextInput, Button } from "flowbite-react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

import { useAppContext } from "@/context/Context";

export default function SearchBar() {
  const { setModalOpen } = useAppContext();

  return (
    <div className="flex flex-row items-center gap-2 pt-6 pb-2">
      <div className="flex-none">
        <Dropdown label="Dropdown" inline={true}>
          <Dropdown.Item>Search by name</Dropdown.Item>
          <Dropdown.Item>Search by pet name</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="grow ">
        <TextInput id="search" type="text" placeholder="Search" className="" />
      </div>
      <div className="flex-none">
        <a
          href="#"
          alt="Add Button"
          onClick={() => setModalOpen(true)}
          className="flex items-center hover:text-secondary "
        >
          <PlusCircleIcon className="w-10 h-10 flex-none" />
          <span className="whitespace-nowrap">Add new element</span>
        </a>
      </div>
    </div>
  );
}
