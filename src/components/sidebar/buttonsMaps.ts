import { AccessType } from "../../redux/mockAPI/loginUserAPI";

export interface subMenu {
  [key: string]: string[];
}

type block = string | subMenu;

export const buttonsMap: Record<string, block[]> = {
  Logistic: ["Inbound supplies", "Consumption", "Stock", { "Logistic settings": ["Warehouse"] }],
};

export const buttonsPathMap: Record<string, string> = {
  Home: "/",
  "Personal account": "/UsersPersonalAccount",
  "Test page": "/TestPage",

  // RawMaterials
  "Raw materials": "/RawMaterials",
  // RawMaterials/Specification
  "Particle Size": "/ParticleSize",
  "Magnetic analizers": "/Magnetic",
  "Sieve analizers": "/Sieve",
  "Refractive index": "/RefractiveIndex",
  "PH-Value": "/PHValue",
  "Melt volume index": "/MVI",
  Viscosity: "/Viscosity",
  "Chemical analysis": "/Chemical",
  BET: "/BET",
  Density: "/Density",
  Others: "/AditionalDetails",
  // RawMaterials/MaterialSettings
  Usage: "/Usage",
  "Material Type": "/Materialtype",
  Department: "/Department",
  "Chemical compound": "/ChemicalBonds",
  Sediment: "/Sediment",
  Granule: "/Granule",

  // Orders
  Order: "/Order",
  "Setup orders": "/SetupOrder",
  // Orders/OrderSetteings
  Supplier: "/Supplier",

  // Logistic
  "Inbound supplies": "/InboundSupplies",
  Consumption: "/Consumption",
  Stock: "/Stock",
  // Logistic/LogisticSetteings
  Warehouse: "/Warehouse",

  // Quality control
  "Quality control": "/Measurement",

  // UserManagment
  User: "/Users",
  "User Access": "/UserAccess",
  // Default Page
  "Default Page": "/*",
};

export const buttonsAccessMap: Record<string, AccessType> = {
  "Raw materials": "material",
  // RawMaterials/Specification
  "Particle Size": "specification",
  "Magnetic analizers": "specification",
  "Sieve analizers": "specification",
  "Refractive index": "specification",
  "PH-Value": "specification",
  "Melt volume index": "specification",
  Viscosity: "specification",
  "Chemical analysis": "specification",
  BET: "specification",
  Density: "specification",
  Others: "specification",
  // RawMaterials/MaterialSettings
  Usage: "materialSettings",
  "Material Type": "materialSettings",
  Department: "materialSettings",
  "Chemical compound": "materialSettings",
  Sediment: "materialSettings",
  Granule: "materialSettings",

  // Orders
  Order: "order",
  "Setup orders": "setupOrder",
  // Orders/OrderSetteings
  Supplier: "orderSettings",

  // Logistic
  "Inbound supplies": "income",
  Consumption: "consumption",
  Stock: "stock",
  // Logistic/LogisticSetteings
  "Logistic settings": "logisticSettings",

  // Quality control
  "Quality control": "measurements",

  // UserManagment
  User: "isManager",
  "User Access": "isManager",
};
