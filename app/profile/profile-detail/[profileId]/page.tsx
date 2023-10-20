"use client";
import React from "react";
import Image from "next/image";
import ProfileImage from "@/src/assets/profile.png";
import { useRouter } from "next/navigation";
import Spinner from "@/src/common/Spinner/Spinner";
import { IUser } from "@/src/interfaces";

const profile = ({ params }: { params: { profileId: number } }) => {
  console.log("params", params);

  const router = useRouter();

  const [data, setData] = React.useState<IUser>();

  console.log(data);

  const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.profileId}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  };

  const handleClick = () => {
    router.back();
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data ? (
        <div className="card" style={{ width: "18rem" }}>
          <Image
            src={ProfileImage}
            width={50}
            height={50}
            style={{ margin: "0 auto" }}
            alt="Picture of the author"
          />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.email}</p>
            <button className="btn btn-primary" onClick={handleClick}>
              Go back
            </button>
          </div>
        </div>
      ) : <Spinner />}
    </div>
  );
};

export default profile;
