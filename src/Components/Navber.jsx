import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import usericon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {

const {user} = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.name}</div>
      <div className="nav space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="login flex gap-2 items-center text-2xl">
        <div className="">
          <img src={usericon} alt="" />
        </div>
        <Link to="/auth/login" className="btn btn-neutral rounded">Login</Link>
      </div>
    </div>
  );
};

export default Navber;
