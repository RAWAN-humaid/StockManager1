import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import registerImg from "../../assets/register.jpg";
import { registerSchema } from "./RegisterSchema.js";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
    };

    try {
      registerSchema.parse(formData);
      console.log("Valid ✅", formData);
    } catch (err) {
      console.log("Error ❌", err.errors);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-right">
          <div className="register-form-box">
            <h1 className="register-title">Create Account</h1>
            <p className="register-subtitle">
              Join us today and start managing your stock easily
            </p>

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="name-row">
                <div className="field half">
                  <label>First name</label>
                  <Input type="text" placeholder="First name" name="firstName" />
                </div>

                <div className="field half">
                  <label>Last name</label>
                  <Input type="text" placeholder="Last name" name="lastName" />
                </div>
              </div>

              <div className="field">
                <label>Email</label>
                <Input type="email" placeholder="Enter your email" name="email" />
              </div>

              <div className="field">
                <label>Phone number</label>
                <Input type="text" placeholder="Enter your phone number" name="phone" />
              </div>

              <div className="field">
                <label>Password</label>
                <Input type="password" placeholder="Enter your password" name="password" />
              </div>

              <div className="register-btn">
                <Button text="Create Account" type="submit" />
              </div>
            </form>
          </div>
        </div>

        <div className="register-left">
          <img src={registerImg} alt="Register" />
        </div>
      </div>
    </div>
  );
}

export default Register;