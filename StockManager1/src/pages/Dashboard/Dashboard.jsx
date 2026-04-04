import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <p className="dashboard-label">Inventory Dashboard</p>
          <h1 className="dashboard-title">Overview</h1>
        </div>

        <div className="dashboard-header-right">
          <input
            type="text"
            placeholder="Search"
            className="dashboard-search"
          />

          <select className="dashboard-filter">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <p>Total Products</p>
          <h3>1284</h3>
          <span>+11.01%</span>
        </div>

        <div className="stat-card">
          <p>Available Quantity</p>
          <h3>982</h3>
          <span>-0.03%</span>
        </div>

        <div className="stat-card">
          <p>Low Stock Alerts</p>
          <h3>34</h3>
          <span>+15.03%</span>
        </div>

        <div className="stat-card">
          <p>Out of Stock Alerts</p>
          <h3>12</h3>
          <span>+6.08%</span>
        </div>
      </div>

      <div className="middle-grid">
        <div className="main-card">
          <div className="card-head">
            <h3>Stock Movement (In / Out)</h3>
            <span>Monthly Stock Activity</span>
          </div>

          <div className="fake-line-chart">
            <div className="line-one"></div>
            <div className="line-two"></div>
          </div>
        </div>

        <div className="side-card">
          <div className="card-head">
            <h3>Most Requested Products</h3>
          </div>

          <div className="request-item">
            <span>Carton Boxes</span>
            <div className="progress">
              <div className="fill w68"></div>
            </div>
          </div>

          <div className="request-item">
            <span>Plastic Containers</span>
            <div className="progress">
              <div className="fill w52"></div>
            </div>
          </div>

          <div className="request-item">
            <span>Office Paper</span>
            <div className="progress">
              <div className="fill w38"></div>
            </div>
          </div>

          <div className="request-item">
            <span>Labels Roll</span>
            <div className="progress">
              <div className="fill w46"></div>
            </div>
          </div>

          <div className="request-item">
            <span>Cleaning Liquid</span>
            <div className="progress">
              <div className="fill w34"></div>
            </div>
          </div>

          <div className="request-item">
            <span>Safety Gloves</span>
            <div className="progress">
              <div className="fill w42"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="chart-card">
          <div className="card-head">
            <h3>Products by Category</h3>
          </div>

          <div className="bar-chart">
            <div className="bar-item">
              <div className="bar h70 c1"></div>
              <span>Raw</span>
            </div>

            <div className="bar-item">
              <div className="bar h120 c2"></div>
              <span>Finished</span>
            </div>

            <div className="bar-item">
              <div className="bar h90 c3"></div>
              <span>Pack</span>
            </div>

            <div className="bar-item">
              <div className="bar h135 c4"></div>
              <span>Spare</span>
            </div>

            <div className="bar-item">
              <div className="bar h55 c5"></div>
              <span>Office</span>
            </div>

            <div className="bar-item">
              <div className="bar h110 c6"></div>
              <span>Cleaning</span>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="card-head">
            <h3>Stock Status</h3>
          </div>

          <div className="status-box">
            <div className="donut-chart"></div>

            <div className="status-list">
              <p><span className="dot d1"></span> In Stock</p>
              <p><span className="dot d2"></span> Low Stock</p>
              <p><span className="dot d3"></span> Out of Stock</p>
              <p><span className="dot d4"></span> Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;