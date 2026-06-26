import CategoryCard from "./CategoryCard";

export default function CategorySection({ categories, onSelectCategory }) {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.header}>
          <p style={styles.eyebrow}>Browse By</p>
          <h2 style={styles.title}>Shop Categories</h2>
        </div>
        <div style={styles.grid}>
          {categories.map((cat) => (
            <CategoryCard
              key={cat}
              category={cat}
              onClick={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "72px 24px",
    background: "#fff",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  header: {
    marginBottom: 40,
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 16,
  },
};
