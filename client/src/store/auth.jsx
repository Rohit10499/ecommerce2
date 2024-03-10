import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");
  const authorizactionToken = `${token}`;
  const [isLoading, setLoading] = useState(true);

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
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
      setLoading(true);
      const response = await axios.get(
        "http://localhost:2410/api/v1/user/user",
        { headers: { Authorization: authorizactionToken } }
      );
      if (response.statusText === "OK") {
        setUser(response.data.userData);
        setLoading(false);
      } else {
        console.error("Error fetching user data");

        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  const getServices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2410/api/v1/data/service"
      );

      if (response.statusText === "OK") {
        setServices(response.data.msg);
      }
    } catch (error) {
      console.log("error in getting servecies data", error);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        LogoutUser,
        isLoggedIn,
        user,
        services,
        authorizactionToken,
        isLoading,
      }}
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
