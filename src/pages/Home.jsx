import { useEffect, useState } from "react";
import Hero from "./Hero";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import { ProductService } from "../services/ProductService";
import Newsletter from "./Newsletter";

export default function Home({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    ProductService.getAllCategories()
      .then(setCategories)
      .catch(() => setError("Failed to load categories."));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetch = selectedCategory
      ? ProductService.getProductsByCategory(selectedCategory)
      : ProductService.getLimitedProducts(12);

    fetch
      .then(setProducts)
      .catch(() => setError("Failed to load products."))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <main>
      <Hero />
      <CategorySection
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />
      {error ? (
        <div style={styles.error}>{error}</div>
      ) : (
        <ProductSection
          products={products}
          loading={loading}
          selectedCategory={selectedCategory}
          onClearCategory={() => setSelectedCategory(null)}
          onAddToCart={onAddToCart}
        />
      )}
      <Newsletter />
    </main>
  );
}

const styles = {
  error: {
    padding: "40px 24px",
    textAlign: "center",
    color: "#e53935",
    fontSize: 14,
  },
};
