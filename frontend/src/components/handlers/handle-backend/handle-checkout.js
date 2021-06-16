const API =
  "https://mighty-badlands-17333.herokuapp.com/api/auth/create-checkout-session";

export const fetchFromAPI = async (opts) => {
  const { method, body } = { method: "POST", body: null, ...opts };
  const res = await fetch(`${API}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error(res.statusText);
  }
};
