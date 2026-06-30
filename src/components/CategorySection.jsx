import CategoryCard from "../pages/CategoryCard";

export default function CategorySection({ categories, onSelectCategory }) {
  return (
    <section className="category-section" id="category">
      <div className="category-inner">
        <div className="category-header">
          <p className="category-eyebrow">Browse By</p>
          <h2 className="category-title">Shop Categories</h2>
        </div>

        <div className="category-grid">
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