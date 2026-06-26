import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        {submitted ? (
          <div style={styles.success}>
            <span style={styles.successIcon}>✓</span>
            <p style={styles.successText}>You're on the list. Welcome!</p>
          </div>
        ) : (
          <>
            <div style={styles.text}>
              <h2 style={styles.title}>Stay in the loop</h2>
              <p style={styles.sub}>
                Get early access to new arrivals, exclusive offers, and curated
                picks — straight to your inbox.
              </p>
            </div>
            <div style={styles.form}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                style={styles.input}
              />
              <button style={styles.btn} onClick={handleSubmit}>
                Subscribe
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#111",
    padding: "72px 24px",
  },
  inner: {
    maxWidth: 800,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 32,
    textAlign: "center",
  },
  text: {},
  title: {
    fontFamily: "'Georgia', serif",
    fontSize: 36,
    fontWeight: 400,
    color: "#fff",
    margin: "0 0 12px",
  },
  sub: {
    fontSize: 15,
    color: "#aaa",
    lineHeight: 1.7,
    margin: 0,
  },
  form: {
    display: "flex",
    gap: 0,
    width: "100%",
    maxWidth: 480,
  },
  input: {
    flex: 1,
    padding: "14px 20px",
    fontSize: 14,
    border: "1px solid #333",
    background: "#1a1a1a",
    color: "#fff",
    outline: "none",
    borderRadius: "2px 0 0 2px",
  },
  btn: {
    background: "#fff",
    color: "#111",
    border: "none",
    padding: "14px 28px",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
    borderRadius: "0 2px 2px 0",
  },
  success: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  successIcon: {
    fontSize: 40,
    color: "#4caf50",
  },
  successText: {
    fontSize: 18,
    color: "#fff",
    margin: 0,
  },
};
