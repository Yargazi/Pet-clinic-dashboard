import * as React from "react";
import { Dropdown } from "flowbite-react";

import {
  Checkbox,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { useAppContext } from "../context/Context";

export default function DropdownHome() {
  const {
    setSearchedUser,
    patients: users,
    dropdownToggle,
    setDropdownToggle,
  } = useAppContext();

  const [state, setState] = React.useState({});

  const { v4: uuidv4 } = require("uuid");

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name.toLowerCase()]: event.target.checked,
    });
  };

  React.useEffect(() => {
    const userArr = users.filter((user) => state[user.petType.toLowerCase()]);
    setSearchedUser(userArr);
  }, [state]);

  const typesOfPets = ["Dog", "Cat", "fish", "Parrot", "fox"];
  return (
    <Dropdown label="" inline={true} hidden={true}>
      {typesOfPets?.map((pet) => (
        <Dropdown.Item key={uuidv4()}>
          <Box sx={{ display: "flex" }}>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={pet}
                      checked={state[pet.toLowerCase()]}
                      onChange={handleChange}
                      name={pet}
                    />
                  }
                  label={pet}
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
