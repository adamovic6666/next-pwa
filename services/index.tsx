export const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  const { products } = await response.json();
  return products;
};

export const getProduct = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return product;
};
