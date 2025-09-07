import React from "react";

const onboardingItems = [
  "Connect your accounts",
  "Set up invoice insights",
  "Enable wallet sync",
];

const WalletIcon = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4ade80"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 11h2a2 2 0 0 1 0 4h-2" />
  </svg>
);

export default function Onboarding() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <header
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          fontWeight: "bold",
          fontSize: 18,
          color: "#f87171", // orange-pink shade as per screenshot
          letterSpacing: 3,
          userSelect: "none",
        }}
      >
        INSIGHT HUNTER
      </header>

      <h1 style={{ fontSize: 32, fontWeight: "800", marginBottom: 10 }}>
        Welcome to <br /> Insight Hunter
      </h1>
      <p style={{ fontSize: 16, color: "#cbd5e1", marginBottom: 40 }}>
        Get started in a few simple steps
      </p>

      <WalletIcon />

      <div
        style={{
          marginTop: 40,
          width: "100%",
          maxWidth: 360,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {onboardingItems.map((item) => (
          <div
            key={item}
            style={{
              background: "#1e293b",
              borderRadius: 8,
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 16,
              userSelect: "none",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "#4ade80",
                display: "inline-block",
                marginRight: 8,
              }}
            >
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: 40,
          backgroundColor: "#334155",
          color: "white",
          border: "none",
          borderRadius: 24,
          padding: "14px 60px",
          fontWeight: "bold",
          fontSize: 18,
          cursor: "pointer",
          userSelect: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#475569";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#334155";
        }}
        onClick={() => alert("Continue clicked")}
      >
        Continue
      </button>
    </div>
  );
}
