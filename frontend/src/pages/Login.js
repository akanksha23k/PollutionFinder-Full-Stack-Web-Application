import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        username,
        password,
      });

      // backend returns JWT token
      localStorage.setItem("token", response.data.token);

      navigate("/home");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("Login failed. Server error.");
      }
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-heading">
        Welcome to <span>PollutionFinder</span>
      </h1>

      <div className="login-card">
        <div className="login-left">
          <img src="/images/logo.png" alt="logo" className="login-logo" />
          <img src="/images/nature.png" alt="nature" className="login-nature" />
        </div>

        <div className="login-right">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="error-text">{error}</p>}

            <button type="submit">Login</button>
          </form>

          <div className="register-link">
            New user? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
