import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT Authentication -to get the currently loggedIN user data
  const userAuthentication = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2410/api/v1/user/user",
        { headers: { Authorization: `${token}` } }
      );
      if (response.statusText === "OK") {
        setUser(response.data.userData);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, LogoutUser, isLoggedIn, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
