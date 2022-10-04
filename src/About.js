import React from "react";
import { Link } from "react-router-dom";

function About({ val }) {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>{val}</p>
        <p>That feels like an existential question, don't you think?</p>
        <p>Are we real?</p>
      </main>
    </>
  );
}

export default About;
