import "./Settings.css";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock } from "react-icons/fa";

function Settings() {
  return (
    <div className="settings-page">
      <h2 className="settings-title">Settings</h2>

      <div className="settings-card">
        <h3>Account</h3>

        <div className="form-grid">
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-group">
            <FaPhone className="icon" />
            <input type="text" placeholder="Phone Number" />
          </div>
        </div>

        <h3>Business Address</h3>

        <div className="form-grid">
          <div className="input-group">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="City" />
          </div>

          <div className="input-group">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="Country" />
          </div>
        </div>

        <h3>Change Password</h3>

        <div className="form-grid">
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>

        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;