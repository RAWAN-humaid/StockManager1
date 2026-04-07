import API_URL from "./api";

export const updateProfile = async (data) => {
  const response = await fetch(`${API_URL}/api/User`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};