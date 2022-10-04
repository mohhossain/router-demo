import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>404 Page not found</h1>
      <Link to="/" state={{ from: "I just came from the error page" }}>
        Home
      </Link>
    </div>
  );
}

export default Error;
