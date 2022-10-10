import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useAppContext } from "../context/Context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  const typesOfPets = ["Dog", "Cat", "fish", "Parrot", "fox"];
  const { petType, setPetType } = useAppContext();

  return (
    <Menu as="div" className="relative flex-1 ">
      {
        <div>
          <Menu.Button className="flex flex-row shrink-0 justify-between flex-nowrap grow w-full  rounded-none rounded-b-md border border-gray-300 text-gray-900  bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-0 focus:ring-offset-gray-100">
            <p>{petType ? petType : "Select pet type"}</p>
            <ChevronDownIcon
              className="mr-1 ml-2 h-5 w-5 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
      }
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {typesOfPets?.map((pet) => (
            <div className="py-1" key={pet}>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    value={pet}
                    onClick={() => {
                      if (pet !== petType) {
                        setPetType(pet);
                      }
                    }}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {pet}
                  </a>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
