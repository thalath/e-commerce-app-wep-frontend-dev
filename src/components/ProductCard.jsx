import { useState } from "react";

export default function ProductCard({ product, onAddToCart }) {
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
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={styles.imgWrap}>
        <img
          src={product.image}
          alt={product.title}
          style={styles.img}
          loading="lazy"
        />
        <button
          style={{
            ...styles.addBtn,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            background: added ? "#4caf50" : "#111",
          }}
          onClick={handleAdd}
        >
          {added ? "✓ Added" : "Add to Cart"}
        </button>
      </div>

      {/* Info */}
      <div style={styles.info}>
        <p style={styles.category}>{product.category}</p>
        <p style={styles.title}>{product.title}</p>
        <div style={styles.bottom}>
          <span style={styles.price}>${product.price.toFixed(2)}</span>
          <span style={styles.stars}>
            {"★".repeat(stars)}{"☆".repeat(5 - stars)}
            <span style={styles.ratingCount}> ({product.rating?.count ?? 0})</span>
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    border: "1px solid #f0f0f0",
    borderRadius: 4,
    overflow: "hidden",
    transition: "box-shadow 0.2s",
    cursor: "pointer",
  },
  imgWrap: {
    position: "relative",
    background: "#fafafa",
    height: 240,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: 20,
  },
  addBtn: {
    position: "absolute",
    bottom: 12,
    left: "50%",
    transform: "translateX(-50%) translateY(8px)",
    background: "#111",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0.5,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "opacity 0.2s, transform 0.2s, background 0.2s",
    borderRadius: 2,
  },
  info: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    flex: 1,
  },
  category: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#aaa",
    margin: 0,
  },
  title: {
    fontSize: 13,
    color: "#222",
    lineHeight: 1.5,
    margin: 0,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    flex: 1,
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 700,
    color: "#111",
  },
  stars: {
    fontSize: 11,
    color: "#f5a623",
  },
  ratingCount: {
    color: "#aaa",
    fontSize: 10,
  },
};
