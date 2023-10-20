"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/navigation";
import Spinner from "../../common/Spinner/Spinner";
import Button from "@/src/common/Button/Button";
import {useDispatch} from "react-redux";
import { getData } from "@/src/redux/actions/action";
import { IUser } from "@/src/interfaces";

const Users = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [data, setData] = React.useState([]);

  console.log("data", data);

  const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
        localStorage.setItem("userdata", JSON.stringify(result));
        dispatch(getData(result))
      });
  };

  const handleView = (id: number) => {
    console.log("Clicked", id);
    router.push(`/profile/profile-detail/${id}`);
  };

  const handleEdit = (id : number) => {
    console.log("Clicked", id);
    router.push(`/editprofile/${id}`);
  };

  const handleDelete = (id: number) => {
    console.log("Clicked", id);
    const newData = data.filter(
      (value: IUser, index: number) => value.id !== id
    );
    console.log(newData);
    setData(newData);
  };

  React.useEffect(() => {
    const userData = localStorage.getItem("userdata");
    if(userData){
      setData(JSON.parse(userData));
    }else{
      fetchData();
    }
  }, []);

  return (
    <div>
      <h2 className="text-center">Users List</h2>
      {data.length > 0 ?
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((value: IUser, index: number) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{value.name}</td>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>
                    <Button className="btn btn-primary" onClick={() => handleView(value.id)}>View</Button>
                    <Button className="btn btn-info mx-2" onClick={() => handleEdit(value.id)}>Edit</Button>
                    <Button className="btn btn-danger mx-2" onClick={() => handleDelete(value.id)}>Delete</Button>
                  </td>
                </tr>
              );
            })
          ) : "No Data Found"}
        </tbody>
      </table>
: <Spinner />}
    </div>
  );
};

export default Users;
