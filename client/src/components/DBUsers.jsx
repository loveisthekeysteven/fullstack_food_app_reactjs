import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUserDetails } from "../context/actions/allUsersAction";
import { getAllUsers } from "../api";
import DataTable from "./DataTable";
import { Avatar } from "../assets";

const DBUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, []);

  return (
    <div className="flex items-center  justify-self-center gap-4 pt-6 w-full">
      <DataTable
        columns={[
          {
            title: "Image",
            field: "photoURL",
            render: (rowData) => (
              <img
                alt=""
                src={rowData.photoURL ? rowData.photoURL : Avatar}
                className="w-32  h-16 object-contain rounded-md "
              />
            ),
          },
          { title: "Name", field: "displayName" },
          { title: "Email", field: "email" },
          {
            title: "Verified",
            field: "emailVerified",
            render: (rowData) => (
              <p
                className={`px-2 py-1 w-32 text-center text-primary rounded-md ${
                  rowData.emailVerified ? "bg-emerald-500" : "bg-red-500"
                }`}
              >
                {rowData.emailVerified ? "Verified" : "Not Verified"}
              </p>
            ),
          },
        ]}
        data={allUsers}
        title="List of Users"
      />
    </div>
  );
};

export default DBUsers;
