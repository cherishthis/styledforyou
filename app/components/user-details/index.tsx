"use client";
import { UserType, useUserContext } from "@/app/contexts/user";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const UserDetails = () => {
  const { user, setUser } = useUserContext();
  const [edit, setEdit] = useState<UserType>(user);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const clearField = (
    topic: "name" | "age" | "email" | "location" | "size"
  ) => {
    setEdit({ ...edit, [topic]: "" });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    handleClose();
    e.preventDefault();
    setUser({ ...edit, age: Number(edit.age) });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return !isOpen ? (
    <Button
      style={{ fontWeight: "bold" }}
      variant="contained"
      onClick={() => setIsOpen(true)}
      size="large"
      startIcon={<AccountCircle color="secondary" />}
    >
      Edit User
    </Button>
  ) : (
    <div className="w-full md:w-4/5 flex flex-col items-center justify-center">
      <div className="text-2xl font-bold">User Details</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full justify-center items-center gap-2"
      >
        <TextField
          className="w-full"
          variant="standard"
          label="Name"
          value={edit.name}
          name="name"
          onChange={handleInput}
          style={{ fontFamily: "inherit" }}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton onClick={() => clearField("name")} size="small">
                  <ClearIcon color="secondary" />
                </IconButton>
              ),
            },
          }}
        />
        <TextField
          className="w-full"
          variant="standard"
          value={edit.email}
          label="Email"
          name="email"
          type="email"
          onChange={handleInput}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton onClick={() => clearField("email")} size="small">
                  <ClearIcon color="secondary" />
                </IconButton>
              ),
            },
          }}
        />
        <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
          <TextField
            className="w-full"
            variant="standard"
            label="Size"
            value={edit.size}
            name="size"
            onChange={handleInput}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton onClick={() => clearField("size")} size="small">
                    <ClearIcon color="secondary" />
                  </IconButton>
                ),
              },
            }}
          />
          <TextField
            className="w-full"
            variant="standard"
            label="Age"
            value={edit.age}
            name="age"
            onChange={handleInput}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton onClick={() => clearField("age")} size="small">
                    <ClearIcon color="secondary" />
                  </IconButton>
                ),
              },
            }}
          />
        </div>
        <TextField
          className="w-full"
          variant="standard"
          label="Location"
          value={edit.location}
          name="location"
          onChange={handleInput}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton onClick={() => clearField("location")} size="small">
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
            color="primary"
            style={{ fontWeight: "bold" }}
          >
            Save
          </Button>
          <Button
            type="button"
            color="secondary"
            variant="outlined"
            style={{ fontWeight: "bold" }}
            onClick={() => handleClose()}
          >
            Close
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
