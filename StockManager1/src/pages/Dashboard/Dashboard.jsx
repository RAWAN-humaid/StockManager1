import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-heading">Dashboard</h1>
          <p className="dashboard-subtitle">Bunny Inventory Dashboard</p>
        </div>

        <div className="dashboard-actions">
          <input type="text" placeholder="Search" className="search-box" />
          <div className="icon-circle"></div>
          <div className="icon-circle"></div>
          <div className="icon-circle"></div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Products</h4>
          <h2>1284</h2>
        </div>

        <div className="stat-card">
          <h4>Available Quantity</h4>
          <h2>982</h2>
        </div>

        <div className="stat-card">
          <h4>Low Stock Alerts</h4>
          <h2>34</h2>
        </div>

        <div className="stat-card">
          <h4>Out of Stock Alerts</h4>
          <h2>12</h2>
        </div>
      </div>

      <div className="middle-grid">
        <div className="big-chart-card">
          <div className="card-header">
            <h3>Stock Movement (In / Out)</h3>
            <span>Monthly Stock Activity</span>
          </div>

          <div className="fake-line-chart">
            <div className="line one"></div>
            <div className="line two"></div>
          </div>
        </div>

        <div className="side-card">
          <h3>Most Requested Products</h3>

          <div className="request-item">
            <span>Carton Boxes</span>
            <div className="mini-bar"><div className="fill w70"></div></div>
          </div>

          <div className="request-item">
            <span>Plastic Containers</span>
            <div className="mini-bar"><div className="fill w55"></div></div>
          </div>

          <div className="request-item">
            <span>Office Paper</span>
            <div className="mini-bar"><div className="fill w40"></div></div>
          </div>

          <div className="request-item">
            <span>Labels Roll</span>
            <div className="mini-bar"><div className="fill w50"></div></div>
          </div>

          <div className="request-item">
            <span>Cleaning Liquid</span>
            <div className="mini-bar"><div className="fill w35"></div></div>
          </div>

          <div className="request-item">
            <span>Safety Gloves</span>
            <div className="mini-bar"><div className="fill w60"></div></div>
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="chart-card">
          <h3>Products by Category</h3>
          <div className="bar-chart">
            <div className="bar-col">
              <div className="bar-value h60"></div>
              <span>Raw</span>
            </div>
            <div className="bar-col">
              <div className="bar-value h90"></div>
              <span>Finished</span>
            </div>
            <div className="bar-col">
              <div className="bar-value h70"></div>
              <span>Pack</span>
            </div>
            <div className="bar-col">
              <div className="bar-value h100"></div>
              <span>Spare</span>
            </div>
            <div className="bar-col">
              <div className="bar-value h45"></div>
              <span>Office</span>
            </div>
            <div className="bar-col">
              <div className="bar-value h85"></div>
              <span>Cleaning</span>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>Stock Status</h3>
          <div className="status-box">
            <div className="donut"></div>

            <div className="status-list">
              <p><span className="dot dot1"></span> In Stock</p>
              <p><span className="dot dot2"></span> Low Stock</p>
              <p><span className="dot dot3"></span> Out of Stock</p>
              <p><span className="dot dot4"></span> Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;