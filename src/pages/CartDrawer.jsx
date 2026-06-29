import { useEffect } from "react";
import "../css/CartDrawer.css";

export default function CartDrawer({
  cart,
  open,
  onClose,
  onUpdateQty,
  onRemove,
}) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <div
        className="backdrop"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
        }}
        onClick={onClose}
      />

      <aside
        className="drawer"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="header">
          <div>
            <h2 className="title">Your Cart</h2>

            {itemCount > 0 && (
              <p className="item-count">
                {itemCount} item{itemCount !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          <button className="close-btn" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {cart.length === 0 ? (
          <EmptyState onClose={onClose} />
        ) : (
          <>
            <div className="items">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQty={onUpdateQty}
                  onRemove={onRemove}
                />
              ))}
            </div>

            <div className="footer">
              <div className="subtotal-row">
                <span className="subtotal-label">Subtotal</span>
                <span className="subtotal-value">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <p className="tax-note">
                Taxes and shipping calculated at checkout
              </p>

              <button className="checkout-btn">
                Proceed to Checkout →
              </button>

              <button className="continue-btn" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <div className="item">
      <div className="item-img">
        <img src={item.image} alt={item.title} className="img" />
      </div>

      <div className="item-info">
        <p className="item-category">{item.category}</p>

        <p className="item-title">{item.title}</p>

        <p className="item-price">
          ${(item.price * item.qty).toFixed(2)}
        </p>

        <div className="item-actions">
          <div className="stepper">
            <button
              className="step-btn"
              onClick={() => onUpdateQty(item.id, item.qty - 1)}
            >
              −
            </button>

            <span className="qty">{item.qty}</span>

            <button
              className="step-btn"
              onClick={() => onUpdateQty(item.id, item.qty + 1)}
            >
              +
            </button>
          </div>

          <button
            className="remove-btn"
            onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onClose }) {
  return (
    <div className="empty">
      <span className="empty-icon">🛍️</span>

      <p className="empty-title">Your cart is empty</p>

      <p className="empty-sub">
        Looks like you haven't added anything yet.
      </p>

      <button className="empty-btn" onClick={onClose}>
        Start Shopping
      </button>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}