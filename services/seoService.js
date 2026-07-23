const BASE_URL = "https://seo-audit-2-j8cn.onrender.com";

export const analyzeWebsite = async (url) => {
  try {
    console.log("URL:", url);

    const response = await fetch(`${BASE_URL}/api/v1/audit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    console.log("Status:", response.status);

    const data = await response.json();
    console.log("Data:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to analyze website");
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};