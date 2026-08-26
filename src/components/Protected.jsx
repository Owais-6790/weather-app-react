import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  let loggedIn = JSON.parse(localStorage.getItem("IsLoggedIn"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, []);

  if (loggedIn) {
    return children;
  }
};

export default Protected;
