import * as React from "react";
import { Dropdown } from "flowbite-react";

// import { useAppContext } from "@/context/Context";

import {
  Checkbox,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
export default function DropdownHome() {
  //   const [petsArr, setPetsArr] = React.useState([]);
  const [state, setState] = React.useState({});
  //   const { } = useAppContext();
  const { v4: uuidv4 } = require("uuid");

  const handleselect = (event) => {
    // let value = "";
    // if (event.target.checked === true) {
    //   const userArr = listOfUsers.filter((user) =>
    //     user.petType.toLowerCase().includes(value.toLowerCase())
    //   );
    //   setSearchedUser(userArr);
    // }
    // console.log(
    //   "🚀 ~ file: DropDownHomePage.js ~ line 23 ~ handleselect ~ petsArr",
    //   petsArr
    // );
  };

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
                      //   onClick={""}
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
