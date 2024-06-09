export const FetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error while fetching products", error);

    throw error;
  }
};
