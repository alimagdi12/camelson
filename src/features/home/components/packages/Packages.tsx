import React, { useState } from "react";
import "./packages.scss";
import type { Package, PackageFeature } from "../../../../core/models/model";
import correctIcon from "../../../../assets/icon/home/correct.png";
import { monthlyPackages, yearlyPackages } from "../../../../constants/plans";
type PackagesProps = { showAll?: boolean };
// Monthly packages data

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

const Packages: React.FC<PackagesProps> = ({ showAll = false }) => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  const handlePackageSelection = (packageId: string) => {
    console.log(`Package selected: ${packageId}`);
    // Here you would typically handle the package selection logic
    // e.g., navigate to checkout, update state, etc.
  };

  const handleTabChange = (tab: "monthly" | "yearly") => {
    setActiveTab(tab);
  };

  const basePackages =
    activeTab === "monthly" ? monthlyPackages : yearlyPackages;
  const currentPackages = showAll ? basePackages : basePackages.slice(0, 3);

  return (
    <div className="packages-container" id="plans">
      <div className="tabs">
        <PackageTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <div
        className={`package-cards ${currentPackages.length > 3 ? "four" : ""}`}
      >
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
