import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Home() {
  const imageStyle = {
    borderRadius: "50%",
    margin: "20px",
    cursor: "pointer",
  };
  const location = useLocation();
  const state = location.state;

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://large-sunset-yttrium.glitch.me/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <p>{location.state ? state.from : "I did not come from anywhere"}</p>
        {users.map((user) => {
          return (
            <img
              onClick={() => {
                navigate(`/user/${user.id}`, { state: { user: user } });
              }}
              style={imageStyle}
              key={user.id}
              src={user.image}
            />
          );
        })}
      </main>
    </>
  );
}

export default Home;
