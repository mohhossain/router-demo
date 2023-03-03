import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();

  // navigate("/about");

  const handleClick = () => {
    navigate("/", {
      state: {
        from: "I just came from the error page",
      },
    });
  };

  return (
    <div>
      <h1>You landed on a page that doesn't exist!!</h1>
      <h3 onClick={handleClick}>Back to home</h3>
      {/* <Link to="/">Home</Link> */}
    </div>
  );
}

export default Error;
