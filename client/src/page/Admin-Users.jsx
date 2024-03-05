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
      <div className="data">
        {users.map((cu, index) => (
          <h4 key={index}> {cu.username}</h4>
        ))}
      </div>
    </>
  );
};

export default AdminUsers;
