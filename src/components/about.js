import React, { useState } from "react";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <h1>Welcome</h1>
      <h3>Let's build something awesome together.</h3>
      <p>
        2 years of learning, coding, problem making, problem solving and coffee
        have led to this, a capable, highly motivated developer with an itch to
        do more.
        <br />
        <br />
      </p>
      {readMore ? (
        <p>
          From beautiful Frontend apps with React, to intricate Backend services
          with Node.js, I thrive on tackling complex problems with elegant
          solutions. Core javascript principles are the foundation of my
          knowledge. Fundamentals first, the rest will come.
          <br />
          <br />
          Explore my site to see my work, or drop me a line to chat about what
          we can do together.
          <br />
          <button onClick={() => setReadMore(false)}>Hide</button>
        </p>
      ) : (
        <button onClick={() => setReadMore(true)}>...Click to read more</button>
      )}
    </>
  );
};

export default About;
