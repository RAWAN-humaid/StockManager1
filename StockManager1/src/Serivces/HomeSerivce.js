import API_URL from "./api";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/api/Product`);
  return response.json();
};