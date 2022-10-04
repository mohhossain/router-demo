import { React, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function UserDetail() {
  const location = useLocation();
  const state = location.state;

  console.log(state);

  const param = useParams();
  console.log(param.id);

  const [user, setUser] = useState({});

  useEffect(() => {
    if (!state) {
      fetch(`https://large-sunset-yttrium.glitch.me/users/${param.id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, []);

  console.log(user === null);

  return (
    <div>
      {state ? (
        <>
          <img height="500px" src={state.user.image}></img>
          <h1>{state.user.name}</h1>
          <h1>{state.user.age}</h1>
          <h1>{state.user.email}</h1>
        </>
      ) : (
        <>
          <img height="500px" src={user.image}></img>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <h1>{user.email}</h1>
        </>
      )}
    </div>
  );
}

export default UserDetail;
