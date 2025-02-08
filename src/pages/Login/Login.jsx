import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UserName: ", userName);
    console.log("Password: ", password);
    setUserName("");
    setPassword("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="w-96 p-6 py-15 rounded-lg shadow-lg bg-white">
          <form
            action="login"
            onSubmit={(e) => handleSubmit(e)}
            className="space-y-4"
          >
            <h2 className="text-center font-bold text-3xl mb-10">Login </h2>
            <InputField
              type="text"
              id="username"
              name="username"
              value={userName}
              setValue={setUserName}
              text="Username"
            />
            <InputField
              type="password"
              id="password"
              name="password"
              value={password}
              setValue={setPassword}
              text="Password"
            />
            <Button text="Login" />
          </form>
          <p onClick={(e) => Navigate("/signup")} className="mt-4 text-center text-blue-600 cursor-pointer hover:underline">Don't have an account? Sign up now</p>
        </div>
      </div>
    </>
  );
};

export default Login;
