import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [slowServerMsg, setSlowServerMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
    setSlowServerMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSlowServerMsg(
        "Slow server response. Please wait or refresh the page."
      );
    }, 5000);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate("/about");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
        setLoading(false);
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
        setLoading(false);
      } else if (err.response?.status === 401) {
        setErrMsg("Username or Password incorrect");
        setLoading(false);
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="login-form">
      <p ref={errRef} aria-live="assertive">
        {errMsg ? errMsg : slowServerMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="login-form-inputs">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button type="submit">
          {loading ? (
            <ClipLoader
              color="rgba(184, 1, 255, 1)"
              loading={loading}
              size={"0.8rem"}
              aria-label="Loading Spinner"
            />
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </section>
  );
};

export default Login;
