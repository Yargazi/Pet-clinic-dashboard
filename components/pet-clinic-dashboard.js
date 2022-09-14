import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import PencilIconcomponent from "../components/PencilIcon";
import ModalAdd from "../components/ModalAdd";
import SearchBar from "./SearchBar";
import { useAppContext } from "@/context/Context";
import Link from "next/link";

export const PetClinicDashboard = ({ patients }) => {
  const { modalOpen } = useAppContext();

  return (
    // Change whatever you want here. It's just an example of using tailwind
    <>
      <div className="bg-gray-800 min-w-xl p-4">
        <Title />
      </div>
      <div className="grid grid-rows-auto-1fr gap-y-4 p-0 md:p-0 max-w-screen-lg mx-auto ">
        <SearchBar />
        <Table patients={patients} />
      </div>
    </>
  );
};

const Title = () => {
  return (
    <h1 className="text-white font-bold text-3xl ml-60 ">
      <Link href="/">Pet Clinic Dashboard</Link>|
      <Link href="/test">Go to test</Link>
    </h1>
  );
};

const Table = ({ patients }) => {
  const data = useMemo(() => patients, [patients]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
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
        accessor: "age",
      },
      {
        Header: "Pet type",
        accessor: "petType",
      },
      {
        header: "",
        accessor: "icon",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <ModalAdd />
      <table
        {...getTableProps()}
        style={{
          borderRight: "solid 3px #020675",
          borderLeft: "solid 3px #020675",
          borderBottom: "solid 3px #020675",
        }}
      >
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      key={column.id}
                      {...column.getHeaderProps()}
                      style={{
                        background: "#1F2937",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr key={row.id} {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          key={cell.id}
                          {...cell.getCellProps()}
                          className={"p-2 text-center "}
                          style={{
                            border: "solid 2px white",
                            background: "#c7e2fc",
                          }}
                        >
                          {
                            cell.column.id === "icon" ? (
                              <PencilIconcomponent />
                            ) : (
                              cell.render("Cell")
                            )
                            // Render the cell contents
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
};
