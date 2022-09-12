import { PlusCircleIcon } from "@heroicons/react/20/solid";

const AddButtonComponent = () => {
  return (
    <div className="container mg h-14 w-14 flex flex-col">
      <a
        href="#"
        alt="Add Button"
        onClick={() => console.log("add")}
        className={
          "box-border h-14 w-14 hover:box-content hover:text-secondary justify-self-end"
        }
      >
        <PlusCircleIcon />
        <p>Add new patient</p>
      </a>
    </div>
  );
};
module.exports = AddButtonComponent;
