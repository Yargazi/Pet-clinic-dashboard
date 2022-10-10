import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import PencilIconcomponent from "../components/PencilIcon";
import DropdownHome from "../components/DropDownHomePage";
import ModalAddAndEdit from "./ModalAddAndEdit";
import SearchBar from "./SearchBar";
import { useAppContext } from "../context/Context";
import {
  ChevronUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export const PetClinicDashboard = () => {
  return (
    <div className="touch-auto ">
      <div className="bg-gray-800 p-4 ">
        <Title />
      </div>
      <div className="grid grid-rows-auto-1fr gap-y-4 mx-6 sm:mx-6 md:mx-6 md:p-0  max-w-screen-lg lg:mx-auto xl:mx-auto 2xl:mx-auto ">
        <SearchBar />
        <div className="overflow-x-auto  ">
          <Table />
        </div>
      </div>
    </div>
  );
};

const Title = () => {
  return (
    <h1 className="flex text-white gap-2 font-bold text-3xl ml-10  2xl:ml-60 xl:ml-50 lg:ml-20   ">
      <Link href="/">Pet Clinic Dashboard</Link>
    </h1>
  );
};

const sortItems = (prev, curr, columnId) => {
  if (
    prev.original[columnId].toLowerCase() >
    curr.original[columnId].toLowerCase()
  ) {
    return 1;
  } else if (
    prev.original[columnId].toLowerCase() <
    curr.original[columnId].toLowerCase()
  ) {
    return -1;
  } else {
    return 0;
  }
};

const Table = () => {
  const { searchedUser, patients: users } = useAppContext();

  const data = useMemo(
    () => (searchedUser && searchedUser.length > 0 ? searchedUser : users),
    [searchedUser, users]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "userName",
        sortType: sortItems,
      },
      {
        Header: "Phone",
        accessor: "phone",
        disableSortBy: true,
      },
      {
        Header: "Pet name",
        accessor: "petName",
        sortType: sortItems,
      },
      {
        Header: "Pet age",
        accessor: "petAge",
        disableSortBy: true,
      },
      {
        Header: "Pet Birth Date",
        accessor: "petBirthDate",
        disableSortBy: true,
      },
      {
        Header: "Pet type",
        accessor: "petType",
        disableSortBy: true,
      },
      {
        header: "Edit",
        accessor: "icon",
        disableSortBy: true,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <ModalAddAndEdit />
      <table
        {...getTableProps()}
        className="w-full "
        style={{
          borderRight: "solid 3px #020675",
          borderLeft: "solid 3px #020675",
          borderBottom: "solid 3px #020675",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="px-3 snap-center whitespace-nowrap "
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    background: "#1F2937",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {column.id === "icon" ? (
                    <p className="px-1">Edit</p>
                  ) : column.id === "petType" ? (
                    <div className="flex gap-2 items-center justify-center">
                      {column.Header}

                      <DropdownHome className="w-4 h-4 " />
                    </div>
                  ) : column.id === "userName" || column.id === "petName" ? (
                    column.isSorted ? (
                      column.isSortedDesc ? (
                        <div className="inline-flex gap-2 ">
                          {column.Header}
                          <ChevronDownIcon className="w-5" />
                        </div>
                      ) : (
                        <div className="inline-flex gap-2">
                          {column.Header}
                          <ChevronUpIcon className="w-5" />
                        </div>
                      )
                    ) : (
                      <div className="inline-flex gap-2">
                        {column.Header}
                        <ChevronUpDownIcon className="w-5" />
                      </div>
                    )
                  ) : (
                    column.render("Header")
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            row.id = row.original._id;

            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      {...cell.getCellProps()}
                      className={"p-2 text-center  whitespace-normal"}
                      style={{
                        border: "solid 2px white",
                        background: "#c7e2fc",
                      }}
                    >
                      {cell.column.id === "icon" ? (
                        <PencilIconcomponent value={row.id} />
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
