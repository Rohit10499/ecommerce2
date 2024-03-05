import { useState } from "react";
import { useAuth } from "../store/auth";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(true);
  const [contact, setContact] = useState({
    username: user.username,
    email: user.email,
    message: "",
  });
  if (userData && user) {
    // console.log(user);
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2410/api/v1/form/contact",
        contact
      );
      // console.log(response);
      if (response.statusText === "OK") {
        setContact({
          username: "",
          email: "",
          message: "",
        });
        toast.success("Message sent successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row w-100">
          <div className="col-6">
            <h1>Contact Us</h1>
            <img
              src="/images/support.png"
              alt="contact"
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-3">
                  <label>Username</label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    name="username"
                    value={contact.username}
                    placeholder="Enter user name"
                    required
                    autoComplete="off"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <label>Email</label>
                </div>
                <div className="col-9">
                  <input
                    type="email"
                    name="email"
                    value={contact.email}
                    id="email"
                    placeholder="Enter Email"
                    required
                    autoComplete="off"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-3">Message</div>
                <div className="col-9">
                  <textarea
                    type="text"
                    name="message"
                    value={contact.message}
                    cols="30"
                    rows="8"
                    id="message"
                    required
                    autoComplete="off"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <button className="btn btn-primary btn-sm mt-1" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
