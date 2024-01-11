import PasswordInput from "./PasswordInput";
import Password from "./Password";

// : React.FC

// <PasswordInput label="Enter Password:" />
const App = () => {
  return (
    <div>
      <h1>Password Input Example</h1>
      <Password label="Enter your password"/>
    </div>
  );
};

export default App;
