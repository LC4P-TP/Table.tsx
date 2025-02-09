import { TableEntries } from "../../components/table/types";

export const tableColumns: Record<string, TableEntries[]> = {
  "Test page": [
    { cellType: "text", columnName: "Column 1", columnTirle: "TEXT column 1" },
    { cellType: "text", columnName: "Text colun 2", columnTirle: "" },
    { cellType: "checkBox", columnName: "Checbox", columnTirle: "" },
    {
      cellType: "fileURL",
      columnName: "File",
      columnTirle: "Technical data sheet file",
    },
    { cellType: "statusBox", columnName: "statusBox", columnTirle: "" },
  ],
  "Test Page Menu": [
    { cellType: "text", columnName: "Column 1", columnTirle: "" },
    { cellType: "text", columnName: "Column 2", columnTirle: "" },
    { cellType: "text", columnName: "Column 3", columnTirle: "" },
    { cellType: "text", columnName: "Column 4", columnTirle: "" },
    { cellType: "text", columnName: "Column 5", columnTirle: "" },
    { cellType: "checkBox", columnName: "Column 6", columnTirle: "" },
    { cellType: "text", columnName: "Column 7", columnTirle: "" },
    { cellType: "text", columnName: "Column 8", columnTirle: "" },
    { cellType: "fileURL", columnName: "Column 9", columnTirle: "" },
    { cellType: "text", columnName: "Column 10", columnTirle: "" },
  ],

  "Test Page Sub Menu": [
    { cellType: "text", columnName: "Column 1", columnTirle: "" },
    { cellType: "text", columnName: "Column 2", columnTirle: "" },
    { cellType: "statusBox", columnName: "Column 3", columnTirle: "" },
  ],
};
