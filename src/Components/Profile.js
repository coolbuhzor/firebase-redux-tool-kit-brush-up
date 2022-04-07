import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: theme }}>
      <h1>Profile Page</h1>
      <p>name: {user.name}</p>
      <p>age: {user.age} </p>
      <p>email: {user.name} </p>
    </div>
  );
}

export default Profile;
