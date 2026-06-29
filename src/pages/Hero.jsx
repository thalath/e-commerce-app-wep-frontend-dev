import "../css/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-eyebrow">New Arrivals 2024</p>

          <h1 className="hero-heading">
            Everything you
            <br />
            <em className="hero-accent">need, curated.</em>
          </h1>

          <p className="hero-sub">
            Explore thousands of products across fashion, electronics, jewelry,
            and more — all in one place.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary">
              Shop Now
            </button>

            <button className="btn-secondary">
              View Categories
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-grid">
            <div
              className="hero-grid-img"
              style={{ background: "#f5f5f5" }}
            >
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                alt="Product"
                className="hero-img"
              />
            </div>

            <div
              className="hero-grid-img"
              style={{
                background: "#fafafa",
                marginTop: "32px",
              }}
            >
              <img
                src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
                alt="Product"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}