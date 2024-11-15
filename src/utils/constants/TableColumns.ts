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
  "Inbound supplies": [
    { cellType: "text", columnName: "Article №", columnTirle: "" },
    { cellType: "text", columnName: "Material", columnTirle: "" },
    { cellType: "text", columnName: "Received date", columnTirle: "" },
    { cellType: "text", columnName: "Quantity", columnTirle: "" },
    { cellType: "text", columnName: "Backlog", columnTirle: "" },
    { cellType: "checkBox", columnName: "Has sample", columnTirle: "" },
    { cellType: "text", columnName: "Order number", columnTirle: "" },
    { cellType: "text", columnName: "Order index", columnTirle: "" },
    { cellType: "fileURL", columnName: "CMR", columnTirle: "" },
    { cellType: "text", columnName: "Warehouse", columnTirle: "" },
  ],
};
