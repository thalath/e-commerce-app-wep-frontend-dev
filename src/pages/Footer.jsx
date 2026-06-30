

function Footer() {
  const FOOTER_LINKS = {
    Shop: ["New Arrivals", "Best Sellers", "Electronics", "Clothing", "Jewelry"],
    Help: ["FAQ", "Shipping", "Returns", "Track Order", "Contact Us"],
    Company: ["About", "Careers", "Press", "Sustainability", "Affiliates"],
  };
  return (
    <footer className="footer" id="about">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">L & T</span>

          <p className="footer-tagline">
            Experience with E-commerce Web-site.
            <br />
            Shipped worldwide.
          </p>

          <div className="footer-socials">
            {["𝕏", "IG", "FB"].map((s) => (
              <a key={s} href="#" className="footer-social">
                {s}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([group, links]) => (
          <div key={group} className="footer-col">
            <p className="footer-col-title">{group}</p>

            <ul className="footer-list">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; 2026 L & T. All rights reserved.
        </p>

        <div className="footer-legal">
          <a href="#" className="footer-legal-link">
            Privacy
          </a>

          <a href="#" className="footer-legal-link">
            Terms
          </a>

          <a href="#" className="footer-legal-link">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;