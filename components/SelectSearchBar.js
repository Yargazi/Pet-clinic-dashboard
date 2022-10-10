import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAppContext } from "../context/Context";

export default function SelectSearchBar() {
  const { selectedTypeOfSearch, setSelectedTypeOfSearch } = useAppContext();

  const handleChange = (event) => {
    setSelectedTypeOfSearch(event.target.value);
  };

  return (
    <div className="mb-3">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 110 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Search type
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedTypeOfSearch || ""}
          onChange={handleChange}
          autoWidth
          label="Search type"
        >
          <MenuItem value={"OwnerName"}>Owner name</MenuItem>
          <MenuItem value={"PetName"}>Pet name</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
