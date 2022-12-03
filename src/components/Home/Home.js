import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useTitle from "../../hook/useTitle";

const Home = () => {
  useTitle("Home Page");

  const [getdata, setGetdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setGetdata(data));
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUser = [...getdata, data];
        setGetdata(newUser);
      });

    console.log(user);
    e.target.reset();
  };

  return (
    <div>
      <h2>This is home page </h2>

      <form onSubmit={handelSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Search" />
      </form>

      <div>
        {getdata.map((data) => (
          <p key={data.id}>
            {data.name} {data.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
