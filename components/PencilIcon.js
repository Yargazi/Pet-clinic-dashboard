import React, { useContext } from "react";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
// import { AppContext } from "../context/Context";

export const PencilIconcomponent = () => {
  // const { setOpen } = useContext(AppContext);
  return (
    <a
      href="#"
      alt="git"
      // onClick={() => setOpen(true)}
    >
      <PencilSquareIcon className={"text-rose-300 hover:text-secondary"} />
    </a>
  );
};
export default PencilIconcomponent;
