// import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";

const Password = ({ label }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordToggle = () => {
    setShowPassword((prevState) => !prevState);
    console.log(showPassword);
  };
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          type={showPassword ? "password" : "text"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <span>
        {showPassword ? (
          <EyeOutlined onClick={passwordToggle} />
        ) : (
          <EyeInvisibleOutlined onClick={passwordToggle} />
        )}
      </span>
    </div>
  );
};

export default Password;
