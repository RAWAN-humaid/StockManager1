import "./Login.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import loginImg from "../../assets/Login.jpg";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <div className="form-box">
            

            <h1 className="title">Welcome Back!</h1>
            <p className="subtitle">Please enter your details</p>

            <form className="form">
              <label>Email Address</label>
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
              />

              <label>Password</label>
              <Input
                type="password"
                placeholder="Password"
                name="password"
              />

              <div className="options">

                <span className="forgot">Forgot password?</span>
              </div>

              <Button text="Sign in" type="submit" />

              <p className="footer">
                Don&apos;t have an account? <span>Sign up</span>
              </p>
            </form>
          </div>
        </div>

        <div className="login-right">
          <div className="right-overlay"></div>
          <img src={loginImg} alt="Login illustration" />
        </div>
      </div>
    </div>
  );
}

export default Login;