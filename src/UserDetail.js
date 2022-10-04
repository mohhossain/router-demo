import { React, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function UserDetail() {
  const location = useLocation();
  const state = location.state;

  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (!state) {
      fetch(`https://large-sunset-yttrium.glitch.me/users/${id}`)
        .then((res) => res.json())
        .then((user) => setUserData(user));
    }
  }, []);

  return (
    <div>
      {state ? (
        <>
          <h1>{state.user.name}</h1>
          <h1>{state.user.age}</h1>
          <h1>{state.user.email}</h1>
          <img src={state.user.image} />
        </>
      ) : (
        <>
          <h1>{userData.name}</h1>
          <h1>{userData.age}</h1>
          <h1>{userData.email}</h1>
          <img src={userData.image} />
        </>
      )}
    </div>
  );
}

export default UserDetail;
