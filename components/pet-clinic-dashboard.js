import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import PencilIconcomponent from "../components/PencilIcon";
import DropdownHome from "@/components/DropDownHomePage";
import ModalAddAndEdit from "./ModalAddAndEdit";
import SearchBar from "./SearchBar";
import { useAppContext } from "@/context/Context";
import {
  ChevronUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export const PetClinicDashboard = ({ users }) => {
  return (
    <>
      <div className="bg-gray-800 min-w-xl p-4">
        <Title />
      </div>
      <div className="grid grid-rows-auto-1fr gap-y-4 p-0 md:p-0 max-w-screen-lg mx-auto ">
        <SearchBar users={users} />
        <Table users={users} />
      </div>
    </>
  );
};

const Title = () => {
  return (
    <h1 className="flex text-white gap-2 font-bold text-3xl ml-60 ">
      <Link href="/">Pet Clinic Dashboard</Link>
    </h1>
  );
};

const Table = ({ users }) => {
  const { searchedUser } = useAppContext();
  let data = null;
  // if (searchedUser && searchedUser.length > 0) {
  // data = searchedUser;
  data = useMemo(
    () => (searchedUser && searchedUser.length > 0 ? searchedUser : users),
    [searchedUser, users]
  );
  // } else {
  // data = useMemo(() => users, [users]);
  // }

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "userName",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Pet name",
        accessor: "petName",
      },
      {
        Header: "Pet age",
        accessor: "petAge",
      },
      {
        Header: "Pet Birth Date",
        accessor: "petBirthDate",
      },
      {
        Header: "Pet type",
        accessor: "petType",
      },
      {
        header: "Edit",
        accessor: "icon",
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
                    <div className="inline-flex gap-2">
                      {column.Header}

                      <DropdownHome value={data} className="w-5 align-center" />
                    </div>
                  ) : column.id === "userName" || column.id === "petName" ? (
                    column.isSorted ? (
                      column.isSortedDesc ? (
                        <div className="inline-flex gap-2">
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
