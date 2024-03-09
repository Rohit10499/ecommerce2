import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Register from "./page/Register";
import Login from "./page/Login";
import Contact from "./page/Contact";
import Navbar from "./components/Navbar";
import Error from "./page/Error";
import Logout from "./page/Logout";
import Services from "./page/Services";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./page/Admin-Users";
import AdminContacts from "./page/Admin-Contacts";
import AdminUpdate from "./page/AdminUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
