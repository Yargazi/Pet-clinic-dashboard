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
    <button alt="git" onClick={handleAction} className="btn p-4">
      <PencilSquareIcon
        className={"w-5 h-5 text-rose-300 hover:text-secondary"}
      />
    </button>
  );
};
export default PencilIconcomponent;
