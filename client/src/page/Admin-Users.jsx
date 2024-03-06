import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

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
                  <td className="updateLink">Edit</td>
                  <td>Delete</td>
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
