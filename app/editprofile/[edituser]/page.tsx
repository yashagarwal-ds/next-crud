"use client";
import React from "react";
import { IEditUser } from "@/src/interfaces";

const edituser = ({ params }: { params: { edituser: number } }) => {
  console.log("params", params);

  const [data, setData] = React.useState<IEditUser>({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { name, username, email, phone } = data;

  console.log(data);

  const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.edituser}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      edituser
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" value={phone} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default edituser;
