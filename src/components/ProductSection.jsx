import ProductCard from "./ProductCard";

export default function ProductSection({
  products,
  loading,
  selectedCategory,
  onClearCategory,
  onAddToCart,
}) {
  const title = selectedCategory
    ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
    : "Featured Products";

  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.header}>
          <div>
            <p style={styles.eyebrow}>
              {selectedCategory ? "Category" : "Hand-picked"}
            </p>
            <h2 style={styles.title}>{title}</h2>
          </div>
          {selectedCategory && (
            <button style={styles.clearBtn} onClick={onClearCategory}>
              ← All Products
            </button>
          )}
        </div>

        {loading ? (
          <div style={styles.loadingGrid}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={styles.skeleton} />
            ))}
          </div>
        ) : (
          <div style={styles.grid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "72px 24px",
    background: "#fafafa",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 40,
    flexWrap: "wrap",
    gap: 16,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#999",
    marginBottom: 8,
  },
  title: {
    fontFamily: "'Georgia', serif",
    fontSize: 32,
    fontWeight: 400,
    color: "#111",
    margin: 0,
  },
  clearBtn: {
    background: "none",
    border: "1px solid #ddd",
    padding: "10px 20px",
    fontSize: 13,
    cursor: "pointer",
    color: "#555",
    borderRadius: 2,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 20,
  },
  loadingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 20,
  },
  skeleton: {
    height: 360,
    background: "linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    borderRadius: 4,
    animation: "shimmer 1.5s infinite",
  },
};
