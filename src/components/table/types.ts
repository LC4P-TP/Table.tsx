export type StatusType = 0 | 1 | 2;

export type CellType = "text" | "checkBox" | "fileURL" | "statusBox";

export interface TableEntries {
  cellType: CellType;
  columnName: string;
  columnTirle: string;
}

export interface IdData {
  id: number;
  [key: string]: string | number | boolean | object | [];
}

export type TableProps = {
  tableName: string;
  data: IdData[];
};
