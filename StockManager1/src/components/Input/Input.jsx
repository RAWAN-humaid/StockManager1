import "./Input.css";

function Input({ type = "text", placeholder, name }) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;