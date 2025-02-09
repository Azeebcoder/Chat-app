import React, { lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";

// Pages with lazy loding

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Chat = lazy(() => import("./pages/Chat/Chat.jsx"));
const Group = lazy(() => import("./pages/Group/Group.jsx"));
const Login = lazy(() => import("./pages/Login/Login.jsx"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp.jsx"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} >
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          </Route>
          <Route path="/group" element={<Group />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
