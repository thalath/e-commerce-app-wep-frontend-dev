import { useState } from "react";

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const stars = Math.round(product.rating?.rate ?? 0);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-img-wrap">
        <img
          src={product.image}
          alt={product.title}
          className="product-img"
          loading="lazy"
        />

        <button
          className={`add-btn ${hovered ? "show" : ""} ${
            added ? "added" : ""
          }`}
          onClick={handleAdd}
        >
          {added ? "✓ Added" : "Add to Cart"}
        </button>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <p className="product-title">{product.title}</p>

        <div className="product-bottom">
          <span className="product-price">
            ${product.price.toFixed(2)}
          </span>

          <span className="product-stars">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
            <span className="rating-count">
              {" "}
              ({product.rating?.count ?? 0})
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;