import { fetchJSON } from "../utils/api";


export const ProductService = {
  getAllProducts: () => fetchJSON("/products"),
  getProductById: (id) => fetchJSON(`/products/${id}`),
  getProductsByCategory: (category) =>
    fetchJSON(`/products/category/${encodeURIComponent(category)}`),
  getAllCategories: () => fetchJSON("/products/categories"),
  getLimitedProducts: (limit = 8) => fetchJSON(`/products?limit=${limit}`),
};
