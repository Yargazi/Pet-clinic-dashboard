import * as React from "react";
import { Dropdown } from "flowbite-react";

import {
  Checkbox,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
export default function DropdownHome() {
  const [state, setState] = React.useState({});

  const { v4: uuidv4 } = require("uuid");

  const handleselect = (event) => {};

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {} = state;

  const typesOfPets = ["Dog", "Cat", "fish", "Parrot", "fox"];
  return (
    <Dropdown label=" " inline={true} className="">
      <Dropdown.Item>
        <Box sx={{ display: "flex" }}>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              {typesOfPets?.map((pet) => (
                <FormControlLabel
                  key={uuidv4()}
                  control={
                    <Checkbox
                      value={state[pet] || ""}
                      checked={state[pet]}
                      onChange={handleChange}
                      name={pet}
                      onClick={(event) => {
                        handleselect(event);
                      }}
                    />
                  }
                  label={pet}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
      </Dropdown.Item>
    </Dropdown>
  );
}
