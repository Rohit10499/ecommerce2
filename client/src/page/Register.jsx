import { useState } from "react";

const Register = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
