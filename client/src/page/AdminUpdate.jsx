import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  const { authorizactionToken } = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setdata] = useState({
    username: "",
    phone: "",
    email: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({
      ...data,
      [name]: value,
    });
  };
  const getSingleUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2410/api/v1/admin/users/${params.id}`,
        { headers: { Authorization: authorizactionToken } }
      );
      //   console.log(response.data.data);
      setdata(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:2410/api/v1/admin/users/update/${params.id}`,
        data,
        { headers: { Authorization: authorizactionToken } }
      );
      console.log(response);
      if (response.statusText === "OK") {
        toast.success("Update successfully");
        navigate("/admin/users");
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    console.log(data);
  };
  useEffect(() => {
    getSingleUserData();
  }, []);

  return (
    <>
      <div className="edit-section">
        <h3>Edit User deteils</h3>
        <div>
          <form>
            <div className="name">
              <label>Name</label>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="phone">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleSubmit}>Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminUpdate;
