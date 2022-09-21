import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ModalInputs from "./ModalInputs";
import Router from "next/router";
import { useAppContext } from "../context/Context";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/20/solid";

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
  />
</svg>;

export default function ModalAddAndEdit() {
  const {
    modalOpen,
    setModalOpen,
    selectedAction,
    setPatientsInfo,
    patientsInfo,
    petType,
    setPetType,
    createAnAppointment,
    delAnAppointment,
    selectedId,
    editAnAppointment,
  } = useAppContext();

  const cancelButtonRef = useRef(null);
  const handleDelete = () => {
    let answer = window.confirm("Delete this appointment?");
    if (answer) {
      delAnAppointment(selectedId);
    } else {
      return;
    }
  };

  const handleClose = () => {
    setModalOpen(false);
    setPatientsInfo("");
  };

  const handleTitle = () => {
    if (selectedAction === "Add") {
      return <div className="mx-2 mb-4">Add a new item to the list</div>;
    } else if (selectedAction === "Edit") {
      return (
        <div className="flex items-center justify-between mx-2 mb-2">
          <div>Edit item on the list</div>

          <ArchiveBoxXMarkIcon className="w-10" onClick={handleDelete} />
        </div>
      );
    } else {
      throw new Error("This function is not work properly");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    console.log(patientsInfo.petType);
    console.log(petType);
    console.log(patientsInfo);

    if (patientsInfo.petType === undefined) {
      patientsInfo.petType = petType;
    } else {
      patientsInfo.petType = petType;
    }

    await editAnAppointment(patientsInfo);
    alert("You successfully edited an appointment");
    setModalOpen(false);
    Router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    patientsInfo.petType = petType;

    await createAnAppointment(patientsInfo);
    alert("You successfully created new appointment");
    setModalOpen(false);
    Router.push("/");
  };

  return (
    <>
      <Transition.Root show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-90"
          initialFocus={cancelButtonRef}
          onClose={handleClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity " />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className="flex min-h-400 items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-10 sm:w-full sm:max-w-lg min-h-200">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 "
                    >
                      {handleTitle}
                    </Dialog.Title>
                    <ModalInputs />
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleClose}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>

                    {selectedAction === "Add" && (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleSubmit}
                      >
                        Add
                      </button>
                    )}
                    {selectedAction === "Edit" && (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleEdit}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
