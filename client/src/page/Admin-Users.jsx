import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminUsers = () => {
  const { authorizactionToken } = useAuth();
  const [users, setUsers] = useState([]);
  const getAllUsersData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2410/api/v1/admin/users",
        { headers: { Authorization: authorizactionToken } }
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:2410/api/v1/admin/user/delete/${id}`,
        { headers: { Authorization: authorizactionToken } }
      );

      if (response.statusText === "OK") {
        getAllUsersData();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-user-section">
        <div className="container">
          <h1>Admin User Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className="updateLink">Edit</button>
                  </td>
                  <td>
                    <button
                      className="deleteLink"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
