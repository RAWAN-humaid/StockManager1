import { NavLink, useNavigate } from "react-router-dom";
import sidebarImg from "../../assets/sidebar.jpg";
import {
  FaHome,
  FaThLarge,
  FaPlusSquare,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaEnvelope,
  FaSearch,
  FaChevronLeft,
} from "react-icons/fa";
import "./Layout.css";

function Layout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="logo-section">

  <div className="logo-img-box">
    <img src={sidebarImg} alt="Sidebar Logo" />
  </div>

  <h2 className="logo-text">Stock Manager</h2>

</div>

        <div className="sidebar-top">

          <nav className="sidebar-menu">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaHome />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaThLarge />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/add-product"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaPlusSquare />
              <span>Add Product</span>
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaCog />
              <span>Settings</span>
            </NavLink>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <button className="menu-item logout-item" onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      <div className="main-side">
        <header className="topbar">
          <div className="topbar-search">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Try search product..." />
          </div>

          <div className="topbar-right">
            <button className="icon-circle" type="button">
              <FaBell />
            </button>

            <button className="icon-circle" type="button">
              <FaEnvelope />
            </button>

            <div className="user-box">
              <div className="user-avatar">R</div>
              <span>Rawan</span>
            </div>
          </div>
        </header>

        <main className="content-area">{children}</main>
      </div>
    </div>
  );
}

export default Layout;