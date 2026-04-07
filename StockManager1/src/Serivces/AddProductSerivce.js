import API_URL from "./api";

export const addProduct = async (data) => {
  const response = await fetch(`${API_URL}/api/Product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};