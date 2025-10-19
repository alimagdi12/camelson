import React, { useState } from "react";
import "./packages.scss";
import type { Package, PackageFeature } from "../../core/models/model";
import correctIcon from "../../assets/icon/home/correct.png";

// Monthly packages data
const monthlyPackages: Package[] = [
  {
    id: "monthly-basic",
    title: "The First Package",
    price: "200EGP",
    features: [
      { id: "1", text: "derstand videos. We help users", included: false },
      { id: "2", text: "derstand videos. We help users", included: true },
      { id: "3", text: "derstand videos. We help users", included: false },
      { id: "4", text: "derstand videos. We help users", included: true },
      { id: "5", text: "derstand videos. We help users", included: true },
      { id: "6", text: "derstand videos. We help users", included: false },
    ],
    buttonText: "Try now",
  },
  {
    id: "monthly-premium",
    title: "Premium Package",
    price: "500EGP",
    features: [
      { id: "1", text: "All basic features included", included: true },
      { id: "2", text: "Advanced video processing", included: true },
      { id: "3", text: "Priority support", included: true },
      { id: "4", text: "Custom integrations", included: true },
      { id: "5", text: "Analytics dashboard", included: true },
      { id: "6", text: "API access", included: false },
    ],
    buttonText: "Get Premium",
  },
];

// Yearly packages data (with discounts)
const yearlyPackages: Package[] = [
  {
    id: "yearly-basic",
    title: "The First Package",
    price: "2000EGP",
    features: [
      { id: "1", text: "derstand videos. We help users", included: false },
      { id: "2", text: "derstand videos. We help users", included: true },
      { id: "3", text: "derstand videos. We help users", included: false },
      { id: "4", text: "derstand videos. We help users", included: true },
      { id: "5", text: "derstand videos. We help users", included: true },
      { id: "6", text: "derstand videos. We help users", included: false },
    ],
    buttonText: "Try now",
  },
  {
    id: "yearly-premium",
    title: "Premium Package",
    price: "5000EGP",
    features: [
      { id: "1", text: "All basic features included", included: true },
      { id: "2", text: "Advanced video processing", included: true },
      { id: "3", text: "Priority support", included: true },
      { id: "4", text: "Custom integrations", included: true },
      { id: "5", text: "Analytics dashboard", included: true },
      { id: "6", text: "API access", included: false },
    ],
    buttonText: "Get Premium",
  },
];

const PackageCard: React.FC<{
  packageData: Package;
  onSelectPackage?: (packageId: string) => void;
}> = ({ packageData, onSelectPackage }) => {
  const handleButtonClick = () => {
    if (onSelectPackage) {
      onSelectPackage(packageData.id);
    }
    console.log(`Selected package: ${packageData.title}`);
  };

  return (
    <div className="package-card">
      <div className="package-header">
        <h3 className="package-title">{packageData.title}</h3>
        <p className="package-price">{packageData.price}</p>
      </div>

      <div className="package-separator"></div>

      <div className="features">
        <ul className="features-list">
          {packageData.features.map((feature: PackageFeature) => (
            <li key={feature.id} className="feature-item">
              <div className="checkbox-container">
                {feature.included ? (
                  <img
                    src={correctIcon}
                    alt="checked"
                    className="checkbox-icon checked"
                  />
                ) : (
                  <div className="checkbox-icon unchecked"></div>
                )}
              </div>
              <span className="feature-text">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="package-button" onClick={handleButtonClick}>
        {packageData.buttonText}
      </button>
    </div>
  );
};

// Tabs component
const PackageTabs: React.FC<{
  activeTab: "monthly" | "yearly";
  onTabChange: (tab: "monthly" | "yearly") => void;
}> = ({ activeTab, onTabChange }) => {
  return (
    <div className="package-tabs">
      <button
        className={`tab-button ${
          activeTab === "monthly" ? "active" : "inactive"
        }`}
        onClick={() => onTabChange("monthly")}
      >
        Monthly packages
      </button>
      <button
        className={`tab-button ${
          activeTab === "yearly" ? "active" : "inactive"
        }`}
        onClick={() => onTabChange("yearly")}
      >
        Yearly packages
      </button>
    </div>
  );
};

const Packages = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  const handlePackageSelection = (packageId: string) => {
    console.log(`Package selected: ${packageId}`);
    // Here you would typically handle the package selection logic
    // e.g., navigate to checkout, update state, etc.
  };

  const handleTabChange = (tab: "monthly" | "yearly") => {
    setActiveTab(tab);
  };

  const currentPackages =
    activeTab === "monthly" ? monthlyPackages : yearlyPackages;

  return (
    <div className="packages-container">
      <div className="tabs">
        <PackageTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <div className="package-cards">
        {currentPackages.map((packageData) => (
          <PackageCard
            key={packageData.id}
            packageData={packageData}
            onSelectPackage={handlePackageSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default Packages;
