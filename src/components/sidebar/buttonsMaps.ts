import { AccessType } from "../../services/mockAPI/loginUserAPI";

export interface subMenu {
  [key: string]: string[];
}

type block = string | subMenu;

export const buttonsMap: Record<string, block[]> = {
  "Test Page Menu": ["Test page menu", { "Test page sub-menu": ["Test page sub-menu"] }],
};

export const buttonsPathMap: Record<string, string> = {
  Home: "/",
  "Personal account": "/UsersPersonalAccount",
  "Test page": "/testPage",
  "Test page menu": "/testPageMenu",
  "Test page sub-menu": "/testPageSubMenu",
};

export const buttonsAccessMap: Record<string, AccessType> = {
  "Test page": "testPage",
  "Test page menu": "testPageMenu",
  "Test page sub-menu": "testPageSubMenu",
};
