import React, { useState } from 'react';

// interface PasswordInputProps {
//   label: string;
// }

// : React.FC<PasswordInputProps> 

const PasswordInput = ({ label }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
