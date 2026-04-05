import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProduct from "./pages/AddProduct/AddProduct";
import Settings from "./pages/Settings/Settings";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* بدون Layout */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* مع Layout */}
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/add-product"
          element={
            <Layout>
              <AddProduct />
            </Layout>
          }
        />

        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;