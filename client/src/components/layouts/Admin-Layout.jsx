import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaEnvelope, FaHome, FaRegListAlt } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <>
      <div className="container">
        <ul>
          <li>
            <NavLink to="/admin/users">
              <FaUser />
              users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/contacts">
              <FaEnvelope /> Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              <FaRegListAlt />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default AdminLayout;
