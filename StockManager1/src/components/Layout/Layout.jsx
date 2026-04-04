import { NavLink, useNavigate } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="profile-box">
            <div className="profile-avatar">R</div>
            <div>
              <h3>Rawan</h3>
              <p>Stock Manager</p>
            </div>
          </div>

          <nav className="sidebar-menu">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/add-product"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Add Product
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Settings
            </NavLink>
          </nav>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      </aside>

      <main className="dashboard-main">{children}</main>
    </div>
  );
}

export default Layout;