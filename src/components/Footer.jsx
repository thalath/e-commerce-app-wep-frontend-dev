const FOOTER_LINKS = {
  Shop: ["New Arrivals", "Best Sellers", "Electronics", "Clothing", "Jewelry"],
  Help: ["FAQ", "Shipping", "Returns", "Track Order", "Contact Us"],
  Company: ["About", "Careers", "Press", "Sustainability", "Affiliates"],
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          <span style={styles.logo}>MINKA</span>
          <p style={styles.tagline}>
            Curated goods for everyday life.
            <br />
            Shipped worldwide.
          </p>
          <div style={styles.socials}>
            {["𝕏", "IG", "FB"].map((s) => (
              <a key={s} href="#" style={styles.social}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([group, links]) => (
          <div key={group} style={styles.col}>
            <p style={styles.colTitle}>{group}</p>
            <ul style={styles.list}>
              {links.map((link) => (
                <li key={link}>
                  <a href="#" style={styles.footerLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={styles.bottom}>
        <p style={styles.copy}>
          © {new Date().getFullYear()} Minka. All rights reserved.
        </p>
        <div style={styles.legal}>
          <a href="#" style={styles.legalLink}>Privacy</a>
          <a href="#" style={styles.legalLink}>Terms</a>
          <a href="#" style={styles.legalLink}>Cookies</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
    padding: "64px 24px 32px",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: 48,
    marginBottom: 48,
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  logo: {
    fontFamily: "'Georgia', serif",
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: 4,
    color: "#111",
  },
  tagline: {
    fontSize: 13,
    color: "#888",
    lineHeight: 1.7,
    margin: 0,
  },
  socials: {
    display: "flex",
    gap: 16,
  },
  social: {
    fontSize: 12,
    color: "#555",
    textDecoration: "none",
    fontWeight: 600,
    letterSpacing: 1,
  },
  col: {},
  colTitle: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#111",
    marginBottom: 16,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  footerLink: {
    textDecoration: "none",
    fontSize: 13,
    color: "#777",
    transition: "color 0.2s",
  },
  bottom: {
    maxWidth: 1200,
    margin: "0 auto",
    borderTop: "1px solid #f0f0f0",
    paddingTop: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
  },
  copy: {
    fontSize: 12,
    color: "#aaa",
    margin: 0,
  },
  legal: {
    display: "flex",
    gap: 24,
  },
  legalLink: {
    fontSize: 12,
    color: "#aaa",
    textDecoration: "none",
  },
};
