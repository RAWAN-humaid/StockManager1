import "./AddProduct.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productSchema } from "./productSchema";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    category: "",
    description: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = productSchema.safeParse({
      ...product,
      image: imagePreview,
    });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="add-product-page">
      <h1 className="page-title">Add New Product</h1>

      <form className="add-product-layout" onSubmit={handleSubmit}>
        <div className="image-section">
          <label className="field-label">Product Image *</label>

          <label htmlFor="imageUpload" className="image-upload-box">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="preview-image" />
            ) : (
              <div className="image-placeholder">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c0c6d4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="9" cy="9" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                  <path d="M16 5h3v3" />
                </svg>
              </div>
            )}
          </label>

          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden-file-input"
          />

          <label htmlFor="imageUpload" className="click-upload-text">
            Click to upload
          </label>

          <p className="image-note">Max File Size : 5MB</p>
        </div>

        <div className="form-section">
          <div className="form-grid">
            <div className="field full-width">
              <label className="field-label">Product Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={product.name}
                onChange={handleInputChange}
                spellCheck={false}
              />
            </div>

            <div className="field">
              <label className="field-label">Quantity *</label>
              <input
                type="number"
                name="quantity"
                placeholder="Enter quantity"
                value={product.quantity}
                onChange={handleInputChange}
                spellCheck={false}
              />
            </div>

            <div className="field">
              <label className="field-label">Category *</label>
              <select
                name="category"
                value={product.category}
                onChange={handleInputChange}
              >
                <option value="">Please Select</option>
                <option value="Food">Food</option>
                <option value="Drinks">Drinks</option>
                <option value="Electronics">Electronics</option>
                <option value="Beauty">Beauty</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div className="field full-width">
              <label className="field-label">
                Product Description (Optional)
              </label>
              <textarea
                name="description"
                placeholder="Write description ..."
                value={product.description}
                onChange={handleInputChange}
                spellCheck={false}
                className="description-textarea"
              />
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/home")}
            >
              Cancel
            </button>

            <button type="submit" className="add-btn">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;