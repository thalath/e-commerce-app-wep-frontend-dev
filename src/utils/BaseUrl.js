// const BaseUrl = 'https://dummyjson.com/products';

// export default BaseUrl;

const BaseUrl = "https://fakestoreapi.com";

export async function fetchJSON(getApiUrl) {
  const response = await fetch(`${BaseUrl}${getApiUrl}`);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}