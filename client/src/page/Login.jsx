import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const navigate = useNavigate();
  const storeTokenInLS = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2410/api/v1/user/login",
        user
      );
      if (response.statusText === "OK") {
        alert("Login successfull");
        setUser({
          email: "",
          password: "",
        });
        storeTokenInLS(response.data.token);
        // localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      alert("invalide password or email");
      console.log("error in login", error);
    }
  };

  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-6">
          <img
            src="/images/login.png"
            alt="a girl trying to do registration"
            width="400"
            height="400"
          />
        </div>
        <div className="col-6">
          <h3>Login form</h3>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="enter the email "
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="enter the your password "
                onChange={handleInput}
                required
                autoComplete="off"
              />
            </div>
            <button className="btn btn-primary btn-sm mt-1" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
