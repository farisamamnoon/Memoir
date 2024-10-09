export async function request(route, method = "GET", data, config) {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) options.body = JSON.stringify(data);

    if (config) options.headers = { ...options.headers, ...config };

    const response = await fetch(`http://localhost:8000/${route}`, options);

    if (!response.ok) {
      throw new Error("There was an unexpected error");
    }

    return await response.json();
  } catch (err) {
    throw new Error(err);
  }
}
