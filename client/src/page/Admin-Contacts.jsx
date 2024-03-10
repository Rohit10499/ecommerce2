import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const { authorizactionToken } = useAuth();
  const [contacts, setContacts] = useState([]);
  const getContactsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2410/api/v1/admin/contacts",
        { headers: { Authorization: authorizactionToken } }
      );
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:2410/api/v1/admin/contacts/delete/${id}`,
        { headers: { Authorization: authorizactionToken } }
      );
      console.log(response.data.message);
      if (response.statusText === "OK") {
        toast.success(response.data.message);
        getContactsData();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);
  return (
    <>
      <div className="show-contacts-Data">
        <h3>All Contacts</h3>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm m-0 p-0"
                      onClick={() => handleDelete(contact._id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminContacts;
