import { useState } from "react";

const CATEGORY_VISUALS = {
  "electronics": { emoji: <ElectronicIcon />, bg: "#f0f4ff" },
  "jewelery": { emoji: <JewelerIcon />, bg: "#fff8f0" },
  "men's clothing": { emoji: <MenClothesIcons />, bg: "#f5f5f5" },
  "women's clothing": { emoji: <WomenClotheIcon />, bg: "#fff0f5" },
};

function ElectronicIcon() {
  return (
    <svg fill="#000000" height="40" width="40" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512" xml:space="preserve">
      <g>
        <g>
          <g>
            <path d="M506.372,243.686V57.558c0-22.727-18.49-41.216-41.216-41.216H41.216C18.49,16.342,0,34.831,0,57.558v286.901
				c0,22.727,18.49,41.216,41.216,41.216h145.477l-18.105,74.655h-22.365c-9.755,0-17.664,7.909-17.664,17.664
				s7.909,17.664,17.664,17.664c13.855,0,330.279-0.005,336.336-0.005c16.233,0,29.44-13.207,29.44-29.44V261.05
				C512,254.65,509.979,248.618,506.372,243.686z M204.941,460.33l18.103-74.652h60.282l18.103,74.652H204.941z M330.708,408.896
				c0,2.961,0,3.933,0,3.913c0,3.258,0,8.924,0,18.351l-11.031-45.485h11.031C330.708,398.076,330.708,405.112,330.708,408.896z
				 M330.708,350.347H41.216c-3.247,0-5.888-2.641-5.888-5.888v-29.352h295.38V350.347z M330.708,261.049v18.73H35.328V57.558
				c0-3.245,2.641-5.888,5.888-5.888h423.94c3.247,0,5.888,2.641,5.888,5.888v174.051H360.148
				C343.915,231.609,330.708,244.816,330.708,261.049z M366.036,315.107h110.634v80.769H366.036
				C366.036,376.916,366.036,332.088,366.036,315.107z M476.672,460.324H366.036v-29.12h110.635V460.324z M476.672,279.78H366.036
				v-12.842h110.635V279.78z"/>
            <circle cx="421.349" cy="445.772" r="10.226" />
          </g>
        </g>
      </g>
    </svg>
  );
}

function JewelerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" class="lucide lucide-gem-icon lucide-gem">
      <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
      <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 
        2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 
        2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"
      />
      <path d="M2 9h20" /></svg>
  );
}

function MenClothesIcons() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-shirt-icon lucide-shirt">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 
      2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 
      2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
    </svg>
  );
}

function WomenClotheIcon() {
  return (
    <svg fill="#000000" height="40" width="40" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 297.857 297.857" xml:space="preserve">
      <path d="M247.116,50.68l-5.156-7.169c-0.158-8.142-2.77-16.734-8.29-24.386c-6.39-8.881-19.699-18.16-32.468-19.073
        c-0.288-0.016-4.986-0.033-12.237-0.049c-2.469-0.005-4.587,1.733-5.07,4.155c-3.271,16.403-17.605,28.795-34.97,28.795
        c-17.366,0-31.709-12.392-34.973-28.796c-0.481-2.417-2.604-4.161-5.068-4.157c-7.196,0.013-11.875,0.037-12.237,0.052
        c-12.74,0.91-26.065,10.175-32.468,19.073c-5.509,7.651-8.132,16.244-8.289,24.386l-5.146,7.169c-0.806,1.1-1.139,2.485-0.913,3.84
        c0.225,1.366,0.972,2.563,2.082,3.369l31.025,22.314c2.308,1.679,5.538,1.159,7.209-1.159l4.704-6.551
        c5.659,14.137,8.122,29.256,7.271,44.275c-12.198,25.747-20.33,60.831-20.33,99.506c0,15.275,9.307,51.939,16.072,75.721
        c0.986,3.466,4.153,5.863,7.756,5.863h86.612c3.608,0,6.769-2.392,7.756-5.862c6.767-23.782,16.082-60.445,16.082-75.721
        c0-38.647-8.121-73.709-20.302-99.451c-0.859-15.031,1.599-30.16,7.252-44.3l4.694,6.521c1.669,2.318,4.891,2.838,7.199,1.159
        l31.034-22.314c1.11-0.805,1.857-2.003,2.083-3.369C248.246,53.165,247.921,51.781,247.116,50.68z"/>
    </svg>
  );
}

function ReloadingDataIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-database-backup-icon lucide-database-backup">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 12a9 3 0 0 0 5 2.69" />
      <path d="M21 9.3V5" />
      <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
      <path d="M12 12v4h4" />
      <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
    </svg>
  );
}

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
