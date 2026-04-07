import "./Home.css";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsSchema } from "./HomeSchema.js";
function Home() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const products = productsSchema.parse([
    {
      id: "PRD-1001",
      name: "Laptop",
      category: "Electronics",
      quantity: 12,
      status: "In Stock",
    },
    {
      id: "PRD-1002",
      name: "Mouse",
      category: "Accessories",
      quantity: 4,
      status: "Low Stock",
    },
    {
      id: "PRD-1003",
      name: "Keyboard",
      category: "Accessories",
      quantity: 0,
      status: "Out of Stock",
    },
    {
      id: "PRD-1004",
      name: "Printer",
      category: "Office",
      quantity: 8,
      status: "In Stock",
    },
    {
      id: "PRD-1005",
      name: "Desk Chair",
      category: "Furniture",
      quantity: 3,
      status: "Low Stock",
    },
    {
      id: "PRD-1006",
      name: "Monitor",
      category: "Electronics",
      quantity: 15,
      status: "In Stock",
    },
    {
      id: "PRD-1007",
      name: "Notebook",
      category: "Stationery",
      quantity: 40,
      status: "In Stock",
    },
    {
      id: "PRD-1008",
      name: "USB Cable",
      category: "Accessories",
      quantity: 1,
      status: "Low Stock",
    },
  ]);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase());

      const matchFilter = filter === "All" || item.status === filter;

      return matchSearch && matchFilter;
    });
  }, [products, search, filter]);

  return (
    <div className="home-page">
      <div className="home-header">
        <div>
          <p className="home-label">Inventory Management</p>
          <h1 className="home-title">Products Overview</h1>
        </div>

        <div className="home-actions">
          <input
            type="text"
            placeholder="Search product..."
            className="home-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="add-new-btn"
            onClick={() => navigate("/add-product")}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="table-card">
        <div className="table-topbar">
          <button
            className={`tab-btn ${filter === "All" ? "active" : ""}`}
            onClick={() => setFilter("All")}
          >
            All Products
          </button>

          <button
            className={`tab-btn ${filter === "In Stock" ? "active" : ""}`}
            onClick={() => setFilter("In Stock")}
          >
            In Stock
          </button>

          <button
            className={`tab-btn ${filter === "Low Stock" ? "active" : ""}`}
            onClick={() => setFilter("Low Stock")}
          >
            Low Stock
          </button>

          <button
            className={`tab-btn ${filter === "Out of Stock" ? "active" : ""}`}
            onClick={() => setFilter("Out of Stock")}
          >
            Out of Stock
          </button>
        </div>

        <div className="table-wrapper">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((item) => (
                <tr key={item.id}>
                  <td className="product-id">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        item.status === "In Stock"
                          ? "status-in"
                          : item.status === "Low Stock"
                          ? "status-low"
                          : "status-out"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProducts.length === 0 && (
            <p className="empty-text">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;