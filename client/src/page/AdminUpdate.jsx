import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";

const AdminUpdate = () => {
  const { authorizactionToken } = useAuth();
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
  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

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
