import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home({ greeting }) {
  const [users, setUsers] = useState([]);

  let location = useLocation();

  let navigate = useNavigate();

  console.log(location.state);

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
        <h3> {location?.state?.from} </h3>

        <div style={{ display: "flex" }}>
          {users.map((user) => {
            return (
              <div
                onClick={() => {
                  navigate(`/user/${user.id}`, {
                    state: {
                      user: user,
                    },
                  });
                }}
              >
                <img
                  key={user.id}
                  style={imageStyle}
                  height="200px"
                  src={user.image}
                ></img>
                <h3>{user.name}</h3>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Home;
