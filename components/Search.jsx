import { Dropdown, TextInput } from "flowbite-react";

export default function Search() {
  return (
    <div className="w-full mr-4 inline-flex flex-row ">
      <Dropdown label="Dropdown" inline={true}>
        <Dropdown.Item>Search by name</Dropdown.Item>
        <Dropdown.Item>Search by pet name</Dropdown.Item>
      </Dropdown>
      <TextInput id="search" type="text" placeholder="Search" className="" />
    </div>
  );
}
module.exports = Search;
