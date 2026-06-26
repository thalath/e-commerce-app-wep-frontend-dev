export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.text}>
          <p style={styles.eyebrow}>New Arrivals 2024</p>
          <h1 style={styles.heading}>
            Everything you
            <br />
            <em style={styles.accent}>need, curated.</em>
          </h1>
          <p style={styles.sub}>
            Explore thousands of products across fashion, electronics, jewelry,
            and more — all in one place.
          </p>
          <div style={styles.ctas}>
            <button style={styles.btnPrimary}>Shop Now</button>
            <button style={styles.btnSecondary}>View Categories</button>
          </div>
        </div>

        <div style={styles.visual}>
          <div style={styles.imageGrid}>
            <div style={{ ...styles.gridImg, background: "#f5f5f5" }}>
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                alt="Product"
                style={styles.img}
              />
            </div>
            <div style={{ ...styles.gridImg, background: "#fafafa", marginTop: 32 }}>
              <img
                src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
                alt="Product"
                style={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#fff",
    padding: "80px 24px 60px",
    borderBottom: "1px solid #f0f0f0",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: 64,
    flexWrap: "wrap",
  },
  text: {
    flex: "1 1 380px",
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#999",
    marginBottom: 16,
  },
  heading: {
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(36px, 5vw, 60px)",
    fontWeight: 400,
    lineHeight: 1.15,
    color: "#111",
    margin: "0 0 20px",
  },
  accent: {
    fontStyle: "italic",
    color: "#555",
  },
  sub: {
    fontSize: 16,
    color: "#666",
    lineHeight: 1.7,
    maxWidth: 420,
    marginBottom: 36,
  },
  ctas: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "#111",
    color: "#fff",
    border: "none",
    padding: "14px 32px",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
  },
  btnSecondary: {
    background: "transparent",
    color: "#111",
    border: "1px solid #111",
    padding: "14px 32px",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
  },
  visual: {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
  },
  imageGrid: {
    display: "flex",
    gap: 16,
  },
  gridImg: {
    width: 160,
    height: 220,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: 16,
  },
};
