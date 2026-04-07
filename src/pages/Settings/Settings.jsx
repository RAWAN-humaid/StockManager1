import "./Settings.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
} from "react-icons/fa";
import { settingsSchema } from "./SettingsSchema.js";

function Settings() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
      country: e.target.country.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    try {
      settingsSchema.parse(formData);
      console.log("Valid ✅", formData);
    } catch (err) {
      console.log("Error ❌", err.errors);
    }
  };

  return (
    <div className="settings-page">
      <h2 className="settings-title">Settings</h2>

      <form className="settings-card" onSubmit={handleSubmit}>
        <h3>Account</h3>

        <div className="form-grid">
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Full Name" name="fullName" />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email Address" name="email" />
          </div>

          <div className="input-group">
            <FaPhone className="icon" />
            <input type="text" placeholder="Phone Number" name="phone" />
          </div>
        </div>

        <h3>Business Address</h3>

        <div className="form-grid">
          <div className="input-group">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="City" name="city" />
          </div>

          <div className="input-group">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="Country" name="country" />
          </div>
        </div>

        <h3>Change Password</h3>

        <div className="form-grid">
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" name="password" />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
          </div>
        </div>

        <button className="save-btn" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Settings;