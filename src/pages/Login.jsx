import React, { useState, useEffect } from "react";
import { UserRound, KeyRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RMILogo from "../assets/rmi_logo.png";
import MainScreen from "../assets/login_img.png";
import ReduceRMILogo from "../assets/reduced-rmilogo.png";

const Login = () => {
  const [user_name, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const [user, getUser] = useState([]);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.dev.readymaninc.com/api/v1/recruiters/1")
      .then((response) => response.json())
      .then((data) => getUser(data.data))
      .catch((err) => console.log(err));

    const img = new Image();
    img.src = MainScreen;
    img.onload = () => setBgLoaded(true);
  }, []);

  const navigate = useNavigate();

  const validateLogin = (item) => {
    item.preventDefault();
    if (String(user.employer_id) === user_name && user.user_name === password) {
      navigate("/home");
    } else {
      alert("Incorrect Username or Password");
    }
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        bgLoaded ? "" : "bg-white"
      }`}
      style={
        bgLoaded
          ? {
              backgroundImage: `URL(${MainScreen})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : {}
      }
    >
      <div className="bg-white/75 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 md:rounded-xl shadow-2xl flex flex-col items-center">
        {RMILogo ? (
          <img src={RMILogo} alt="Readyman, Inc" className="w-24 h-24 mb-4" />
        ) : (
          <img
            src={ReduceRMILogo}
            alt="Readyman, Inc"
            className="w-24 h-24 mb-4"
          />
        )}
        <h1 className="font-bold text-2xl mb-4">Readyman, Inc.</h1>
        <form className="flex flex-col w-full px-4" onSubmit={validateLogin}>
          <div className="flex flex-row gap-2 items-center mb-4">
            <UserRound />
            <input
              type="text"
              className="flex-1 rounded-lg border p-2 bg-neutral-200"
              value={user_name}
              onChange={(item) => usernameupdate(item.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="flex flex-row gap-2 items-center mb-4">
            <KeyRound />
            <input
              className="flex-1 rounded-lg border p-2 bg-neutral-200"
              type="password"
              value={password}
              onChange={(item) => passwordupdate(item.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            className="bg-blue-600 text-white rounded-lg p-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
