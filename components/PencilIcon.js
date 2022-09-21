import React, { useContext } from "react";
import { PencilSquareIcon } from "@heroicons/react/20/solid";

import { useAppContext } from "../context/Context";

export const PencilIconcomponent = ({ value }) => {
  const { setModalOpen, setSelectedAction, selectPatient } = useAppContext();
  const handleAction = () => {
    setModalOpen(true);
    setSelectedAction("Edit");
    selectPatient(value);
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
