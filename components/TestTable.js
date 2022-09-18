import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Table } from "flowbite-react";
import PencilIconcomponent from "../components/PencilIcon";
import ModalAddAndEdit from "../components/ModalAddAndEdit";
import SearchBar from "./SearchBar";
import Link from "next/link";

export const TestTable = () => {
  return (
    <>
      <div className="bg-gray-800 min-w-xl p-4">
        <Title />
      </div>
      <div className="grid gap-y-4 max-w-screen-lg mx-auto ">
        <SearchBar />
        <TableList />
      </div>
    </>
  );
};

const Title = () => {
  return (
    <h1 className="text-white font-bold text-3xl ml-60 ">
      <Link href="/">Pet Clinic Dashboard</Link>
    </h1>
  );
};
const TableList = () => {
  const data = useMemo(
    () => [
      {
        name: "Alice",
        phone: "0547125822",
        petName: "falafel",
        age: "8",
        petType: "dog",
      },
      {
        name: "Костя",
        phone: "0547125833",
        petName: "Блинчик",
        age: "1",
        petType: "еда",
      },
      {
        name: "Саша",
        phone: "0547125844",
        petName: "Брюс",
        age: "10",
        petType: "dog",
      },
      {
        name: "Катя",
        phone: "0547125811",
        petName: "Рекс",
        age: "8",
        petType: "dog",
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
      <ModalAddAndEdit />
      <Table hoverable={true} {...getTableProps()} className=" ">
        {headerGroups.map((headerGroup) => (
          <Table.Head
            className="bg-blue-900 text-gray-50 min-w-full"
            key={headerGroup.id}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <Table.HeadCell key={column.id} {...column.getHeaderProps()}>
                {column.render("Header")}
              </Table.HeadCell>
            ))}
          </Table.Head>
        ))}
        <Table.Body className="divide-y" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Table.Row
                key={row.id}
                {...row.getRowProps()}
                className="bg-blue-100 dark:border-gray-700 dark:bg-gray-800"
              >
                {row.cells.map((cell) => {
                  return (
                    <Table.Cell
                      key={cell.id}
                      {...cell.getCellProps()}
                      className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    >
                      {cell.column.id === "icon" ? (
                        <PencilIconcomponent />
                      ) : (
                        cell.render("Cell")
                      )}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};
