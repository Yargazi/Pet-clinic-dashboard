import { PencilSquareIcon } from "@heroicons/react/20/solid";

export const PencilIconcomponent = () => {
  return (
    <a href="#" alt="git" onClick={() => console.log("edit")}>
      <PencilSquareIcon className={"text-rose-300 hover:text-secondary"} />
    </a>
  );
};
module.exports = PencilIconcomponent;
