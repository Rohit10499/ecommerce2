import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../store/auth";

const Register = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleInput = (e) => {
    // console.log(e);
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
        "http://localhost:2410/api/v1/user/register",
        user
      );

      if (response.status == 201) {
        storeTokenInLS(response.data.token);

        // localStorage.setItem("token", response.data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log("error in posting in data", error);
    }
  };
  return (
    <>
      <div className="container ">
        <div className="row w-100">
          <div className=" col-6 ">
            <img
              src="/images/register.png"
              alt="a girl trying to do registration"
              width="400"
              height="400"
            />
          </div>
          <div className=" col-6  text-center ">
            <h1>REGISTRATION FORM</h1>
            <form className="from-group" onSubmit={handleSubmit}>
              <div>
                <label>username</label>
                <input
                  type="text"
                  name="username"
                  onChange={handleInput}
                  placeholder="enter your username"
                  value={user.username}
                  id="username"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label>email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  value={user.email}
                  onChange={handleInput}
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label>phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="enter your phone"
                  onChange={handleInput}
                  value={user.phone}
                  id="phone"
                  required
                  autoComplete="off"
                />
              </div>

              <div>
                <label>password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  value={user.password}
                  id="password"
                  required
                  autoComplete="off"
                  onChange={handleInput}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm mt-1">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
