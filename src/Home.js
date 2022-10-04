import { React, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Home({ greeting }) {
  const location = useLocation();
  const state = location.state;

  const navigate = useNavigate();

  console.log(state);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://large-sunset-yttrium.glitch.me/users/")
      .then((res) => res.json())
      .then((users) => {
        console.log(users);
        setUsers(users);
      });
  }, []);

  const imageStyle = {
    margin: "20px",
    borderRadius: "50%",
    marginTop: "25px",
    cursor: "pointer",
  };

  return (
    <>
      <main>
        <h2>{greeting}</h2>
        <p>You can do this, I believe in you.</p>
        <p>{state ? state.from : "I did not come from the error page"}</p>

        {users.map((user) => {
          return (
            <img
              onClick={() => {
                console.log(user);
                navigate(`/user/${user.id}`, { state: { user } });
              }}
              key={user.id}
              style={imageStyle}
              height="200px"
              src={user.image}
            ></img>
          );
        })}
      </main>
    </>
  );
}

export default Home;
