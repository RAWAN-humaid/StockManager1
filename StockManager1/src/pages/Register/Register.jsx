
import "./Register.css"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>

        <form>
          <label>Full Name</label>
          <Input type="text" placeholder="Enter your full name" name="fullName" />

          <label>Email</label>
          <Input type="email" placeholder="Enter your email" name="email" />

          <label>Password</label>
          <Input type="password" placeholder="Enter your password" name="password" />

          <Button text="Register" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Register