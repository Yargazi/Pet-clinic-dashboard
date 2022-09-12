import React, { useMemo } from "react";
import { useTable } from "react-table";

import PencilIconcomponent from "../components/PencilIcon";
import AddButtonComponent from "../components/AddButton";

import ModalAdd from "../components/ModalAdd";

export const PetClinicDashboard = () => {
  return (
    // Change whatever you want here. It's just an example of using tailwind
    <div className="grid grid-rows-auto-1fr gap-y-4 p-4 md:p-6 max-w-screen-lg mx-auto">
      <Title />
      <Table />
    </div>
  );
};

const Title = () => {
  return (
    <h1 className="text-primary font-bold text-3xl">Pet Clinic Dashboard</h1>
  );
};

const Table = () => {
  const data = useMemo(
    () => [
      {
        name: "Hello",
        phone: "",
      },
      {
        name: "Alice",
        phone: "0547125822",
        petName: "falafel",
        age: "8",
        petType: "dog",
        icon: <PencilIconcomponent />,
      },
      {
        name: "Костя",
        phone: "0547125833",
        petName: "Блинчик",
        age: "1",
        petType: "еда",
        icon: <PencilIconcomponent />,
      },
      {
        name: "Саша",
        phone: "0547125844",
        petName: "Брюс",
        age: "10",
        petType: "dog",
        icon: <PencilIconcomponent />,
      },
      {
        name: "Катя",
        phone: "0547125811",
        petName: "Рекс",
        age: "8",
        petType: "dog",
        icon: <PencilIconcomponent />,
      },
    ],
    []
  );

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
      <AddButtonComponent />

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
                          className={"p-2 "}
                          style={{
                            border: "solid 2px white",
                            background: "#c7e2fc",
                            textAlign: "center",
                          }}
                        >
                          {
                            // Render the cell contents
                            cell.render("Cell")
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
