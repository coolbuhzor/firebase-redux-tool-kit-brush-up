import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/theme";

const ChangeColor = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const handleClick = () => {
    dispatch(changeTheme(color));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button onClick={handleClick}>ChangeColor</button>
    </div>
  );
};

export default ChangeColor;
