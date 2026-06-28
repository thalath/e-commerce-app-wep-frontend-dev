import { useEffect } from "react";

export default function CartDrawer({ cart, open, onClose, onUpdateQty, onRemove }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          ...styles.backdrop,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        style={{
          ...styles.drawer,
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h2 style={styles.title}>Your Cart</h2>
            {itemCount > 0 && (
              <p style={styles.itemCount}>{itemCount} item{itemCount !== 1 ? "s" : ""}</p>
            )}
          </div>
          <button style={styles.closeBtn} onClick={onClose} aria-label="Close cart">
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        {cart.length === 0 ? (
          <EmptyState onClose={onClose} />
        ) : (
          <>
            <div style={styles.items}>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQty={onUpdateQty}
                  onRemove={onRemove}
                />
              ))}
            </div>

            {/* Footer */}
            <div style={styles.footer}>
              <div style={styles.subtotalRow}>
                <span style={styles.subtotalLabel}>Subtotal</span>
                <span style={styles.subtotalValue}>${subtotal.toFixed(2)}</span>
              </div>
              <p style={styles.taxNote}>Taxes and shipping calculated at checkout</p>
              <button style={styles.checkoutBtn}>
                Proceed to Checkout →
              </button>
              <button style={styles.continueBtn} onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

/* ── Cart Item ── */
function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <div style={styles.item}>
      <div style={styles.itemImg}>
        <img src={item.image} alt={item.title} style={styles.img} />
      </div>
      <div style={styles.itemInfo}>
        <p style={styles.itemCategory}>{item.category}</p>
        <p style={styles.itemTitle}>{item.title}</p>
        <p style={styles.itemPrice}>${(item.price * item.qty).toFixed(2)}</p>

        <div style={styles.itemActions}>
          {/* Qty stepper */}
          <div style={styles.stepper}>
            <button
              style={styles.stepBtn}
              onClick={() => onUpdateQty(item.id, item.qty - 1)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span style={styles.qty}>{item.qty}</span>
            <button
              style={styles.stepBtn}
              onClick={() => onUpdateQty(item.id, item.qty + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            style={styles.removeBtn}
            onClick={() => onRemove(item.id)}
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Empty State ── */
function EmptyState({ onClose }) {
  return (
    <div style={styles.empty}>
      <span style={styles.emptyIcon}>🛍️</span>
      <p style={styles.emptyTitle}>Your cart is empty</p>
      <p style={styles.emptySub}>Looks like you haven't added anything yet.</p>
      <button style={styles.emptyBtn} onClick={onClose}>
        Start Shopping
      </button>
    </div>
  );
}

/* ── Icons ── */
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Styles ── */
const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 200,
    transition: "opacity 0.3s ease",
  },
  
  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100dvh",
    width: "min(420px, 100vw)",
    background: "#fff",
    zIndex: 201,
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "-4px 0 32px rgba(0,0,0,0.12)",
  },

  /* Header */
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "24px 24px 20px",
    borderBottom: "1px solid #f0f0f0",
  },
  title: {
    fontFamily: "'Georgia', serif",
    fontSize: 22,
    fontWeight: 400,
    color: "#111",
    margin: "0 0 4px",
  },
  itemCount: {
    fontSize: 12,
    color: "#999",
    margin: 0,
    letterSpacing: 0.5,
  },
  closeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 4,
    color: "#555",
    display: "flex",
    alignItems: "center",
    marginTop: 2,
  },

  /* Items list */
  items: {
    flex: 1,
    overflowY: "auto",
    padding: "8px 0",
  },

  /* Single item */
  item: {
    display: "flex",
    gap: 16,
    padding: "20px 24px",
    borderBottom: "1px solid #f7f7f7",
  },
  itemImg: {
    flexShrink: 0,
    width: 80,
    height: 80,
    background: "#fafafa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: 8,
  },
  itemInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 4,
    minWidth: 0,
  },
  itemCategory: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#bbb",
    margin: 0,
  },
  itemTitle: {
    fontSize: 13,
    color: "#222",
    lineHeight: 1.4,
    margin: 0,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 700,
    color: "#111",
    margin: 0,
  },
  itemActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  stepper: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    border: "1px solid #e8e8e8",
    borderRadius: 2,
    overflow: "hidden",
  },
  stepBtn: {
    background: "none",
    border: "none",
    width: 30,
    height: 30,
    cursor: "pointer",
    fontSize: 16,
    color: "#444",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.15s",
  },
  qty: {
    width: 32,
    textAlign: "center",
    fontSize: 13,
    fontWeight: 600,
    color: "#111",
    borderLeft: "1px solid #e8e8e8",
    borderRight: "1px solid #e8e8e8",
    lineHeight: "30px",
  },
  removeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 11,
    color: "#aaa",
    textDecoration: "underline",
    padding: 0,
    letterSpacing: 0.3,
  },

  /* Footer */
  footer: {
    padding: "20px 24px 32px",
    borderTop: "1px solid #f0f0f0",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  subtotalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtotalLabel: {
    fontSize: 13,
    color: "#555",
    fontWeight: 500,
  },
  subtotalValue: {
    fontSize: 20,
    fontWeight: 700,
    color: "#111",
  },
  taxNote: {
    fontSize: 11,
    color: "#bbb",
    margin: 0,
    textAlign: "center",
  },
  checkoutBtn: {
    background: "#111",
    color: "#fff",
    border: "none",
    padding: "15px 24px",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
    width: "100%",
    borderRadius: 2,
  },
  continueBtn: {
    background: "transparent",
    color: "#555",
    border: "1px solid #e0e0e0",
    padding: "12px 24px",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.5,
    cursor: "pointer",
    width: "100%",
    borderRadius: 2,
  },

  /* Empty state */
  empty: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 40,
    textAlign: "center",
  },
  emptyIcon: {
    fontSize: 52,
    marginBottom: 8,
  },
  emptyTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: 20,
    fontWeight: 400,
    color: "#111",
    margin: 0,
  },
  emptySub: {
    fontSize: 13,
    color: "#999",
    margin: 0,
    lineHeight: 1.6,
  },
  emptyBtn: {
    marginTop: 16,
    background: "#111",
    color: "#fff",
    border: "none",
    padding: "13px 28px",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
    borderRadius: 2,
  },
};
