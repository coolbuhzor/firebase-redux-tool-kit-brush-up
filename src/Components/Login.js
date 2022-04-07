import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(login({ name: "John", age: "30", email: "john@gmail.com" }));
  };
  return (
    <div>
      <button onClick={handleClick}>Log in</button>
    </div>
  );
}

export default Login;
