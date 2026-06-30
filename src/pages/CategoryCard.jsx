import { useState } from "react";
import ElectronicIcon from '../components/IconsSVG/ElectronicIcon';
import JeweleryIcon from '../components/IconsSVG/JeweleryIcon';
import MenClothesIcon from '../components/IconsSVG/MenClothesIcon';
import WomenClothesIcon from '../components/IconsSVG/WomenClothesIcon';
import ReloadingDataIcon from '../components/IconsSVG/ReloadingDataIcon';

const CATEGORY_VISUALS = {
  "electronics": { emoji: <ElectronicIcon />, bg: "#f0f4ff" },
  "jewelery": { emoji: <JeweleryIcon />, bg: "#fff8f0" },
  "men's clothing": { emoji: <MenClothesIcon />, bg: "#f5f5f5" },
  "women's clothing": { emoji: <WomenClothesIcon />, bg: "#fff0f5" },
};


export default function CategoryCard({ category, onClick }) {
  const [hovered, setHovered] = useState(false);
  const visual = CATEGORY_VISUALS[category] || { emoji: < ReloadingDataIcon />, bg: "#f9f9f9" };

  const label = category
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <button
      onClick={() => onClick(category)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.card,
        background: visual.bg,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <span style={styles.emoji}>{visual.emoji}</span>
      <span style={styles.label}>{label}</span>
      <span style={styles.arrow}>→</span>
    </button>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "32px 20px",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    width: "100%",
  },
  emoji: {
    fontSize: 36,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#222",
  },
  arrow: {
    fontSize: 16,
    color: "#888",
    marginTop: 4,
  },
};
