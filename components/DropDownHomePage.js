import * as React from "react";
import { HiChevronDown } from "react-icons/hi";

import {
  Checkbox,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  IconButton,
  Popover,
} from "@mui/material";
import { useAppContext } from "../context/Context";

export default function DropdownHome() {
  const { setSearchedUser, patients: users } = useAppContext();

  const [state, setState] = React.useState({});

  const [open, setOpen] = React.useState(false);

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

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const typesOfPets = ["Dog", "Cat", "fish", "Parrot", "fox"];
  return (
    <>
      <IconButton component="button" onClick={handleClick}>
        <HiChevronDown color="white" />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {typesOfPets?.map((pet) => (
          <Box key={pet} sx={{ display: "flex" }}>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={pet}
                      checked={state[pet.toLowerCase()] || false}
                      onChange={handleChange}
                      name={pet}
                    />
                  }
                  label={pet}
                  className="px-4  "
                />
              </FormGroup>
            </FormControl>
          </Box>
        ))}
      </Popover>
    </>
  );
}
