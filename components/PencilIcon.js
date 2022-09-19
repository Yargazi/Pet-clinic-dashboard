import React, { useContext } from "react";
import { PencilSquareIcon } from "@heroicons/react/20/solid";

import { useAppContext } from "@/context/Context";

export const PencilIconcomponent = ({ value }) => {
  const { modalOpen, setModalOpen, setSelectedAction, setSelectedId } =
    useAppContext();
  const handleAction = () => {
    setModalOpen(true);
    setSelectedAction("Edit");
    setSelectedId(value);
  };
  return (
    <a href="#" alt="git" onClick={handleAction}>
      <PencilSquareIcon
        className={"w-xs max-w-xs text-rose-300 hover:text-secondary"}
      />
    </a>
  );
};
export default PencilIconcomponent;
