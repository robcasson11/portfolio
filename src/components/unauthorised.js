import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorised = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="unauthorised">
      <p>You are not authorised to see this page</p>
      <button onClick={goBack}>Home</button>
    </section>
  );
};

export default Unauthorised;
