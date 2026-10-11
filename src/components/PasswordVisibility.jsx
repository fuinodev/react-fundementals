import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordVisibility = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
  setShowPassword(prev => !prev);
};



  return (
    <div>
      <h1>Password Visibility</h1>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button 
      type="button"
      onClick={togglePassword}
      aria-label={showPassword ? "Hide" : "Show"}
      >
      
        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
      </button>
    </div>
  );
};

export default PasswordVisibility;