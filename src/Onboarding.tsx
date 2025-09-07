import React from "react";

const steps = [
  { label: "Connect your accounts", status: "✓" },
  { label: "Set up invoice insights", status: "✓" },
  { label: "Enable wallet sync", status: "✓" }
];

export default function Onboarding() {
  return (
    <div className="onboarding-container">
      <h1>Welcome to Insight Hunter</h1>
      <p>Get started in a few simple steps</p>
      <div className="icon-circle" />
      <ul>
        {steps.map((step, i) => (
          <li key={i}>
            <span className="step-check">{step.status}</span> {step.label}
          </li>
        ))}
      </ul>
      <button className="continue-btn">Continue</button>
    </div>
  );
}
