import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "./top100Films";

export default function ComboBox() {
  const [films, setFilms] = React.useState();
  React.useEffect(() => {
    // supabase.
    // setFilms()
  }, []);
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
