import { UserType, useUserContext } from "@/app/contexts/user";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";

const UserDetails = () => {
  const { user, setUser, resetUser } = useUserContext();
  const [edit, setEdit] = useState<UserType>(user);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEdit({ ...edit });
  };

  const clearField = (
    topic: "name" | "age" | "email" | "location" | "size"
  ) => {
    setEdit({ ...edit, [topic]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form>
      <TextField
        className="w-full"
        variant="standard"
        value={edit.name}
        name="name"
        onChange={handleInput}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton onClick={() => clearField("name")}>
                <ClearIcon color="secondary" />
              </IconButton>
            ),
          },
        }}
      />
      <div className="flex items-center gap-2">
        <Button
          type="submit"
          variant="contained"
          size="small"
          color="primary"
          style={{ fontWeight: "bold", fontFamily: "inherit" }}
        >
          Save
        </Button>
        <Button
          type="button"
          size="small"
          color="secondary"
          variant="outlined"
          style={{ fontWeight: "bold", fontFamily: "inherit" }}
        >
          Close
        </Button>
      </div>
    </form>
  );
};

export default UserDetails;
