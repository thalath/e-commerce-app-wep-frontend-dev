import ProductCard from "../pages/ProductCard";

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
    <section className="product-section" id="shop">
      <div className="product-section-inner">
        <div className="product-section-header">
          <div>
            <p className="product-section-eyebrow">
              {selectedCategory ? "Category" : "Hand-picked"}
            </p>
            <h2 className="product-section-title">{title}</h2>
          </div>

          {selectedCategory && (
            <button
              className="product-section-clear-btn"
              onClick={onClearCategory}
            >
              ← All Products
            </button>
          )}
        </div>

        {loading ? (
          <div className="product-loading-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="product-skeleton"></div>
            ))}
          </div>
        ) : (
          <div className="product-grid">
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