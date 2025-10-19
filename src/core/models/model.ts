export interface PackageFeature {
  id: string;
  text: string;
  included: boolean;
}

export interface Package {
  id: string;
  title: string;
  price: string;
  features: PackageFeature[];
  buttonText: string;
}

export interface PackageProps {
  packageData: Package;
  onSelectPackage?: (packageId: string) => void;
}
