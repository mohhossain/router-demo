import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function UserDetails() {
  let params = useParams();

  let location = useLocation();

  const [user, setUser] = useState({});
  const [loading, setLoding] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setUser(location.state.user);
    } else {
      setLoding(true);
      fetch(`https://large-sunset-yttrium.glitch.me/users/${params.user_id}`)
        .then((res) => {
          if (!res.ok) {
            navigate("/error");
          }

          return res.json();
        })
        .then((user) => {
          console.log(user);
          setLoding(false);
          setUser(user);
        });
    }
  }, []);
  return (
    <div>
      User Details
      <h1>{loading ? "loading....." : null}</h1>
      <h1>{params.user_id}</h1>
      <img height={200} src={user.image}></img>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default UserDetails;
