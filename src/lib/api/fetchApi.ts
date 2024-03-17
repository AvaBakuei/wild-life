export const fetchData = async (name: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_API_KEY;
  try {
    if (!apiKey) {
      throw new Error("API key is not available");
    }
    const options: RequestInit = {
      method: "GET",
      headers: { "X-Api-Key": apiKey, "Content-Type": "application/json" },
    };

    const url: string = `https://api.api-ninjas.com/v1/animals?name=${name}`;
    const response = fetch(url, options);
    const data = (await response).json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
