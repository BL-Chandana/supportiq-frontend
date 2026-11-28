import { useNavigate } from "react-router-dom";

function LogInPage() {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/customer-help-page');
  }
  return(
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LogInPage;