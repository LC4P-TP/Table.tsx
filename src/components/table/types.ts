export type StatusType = 0 | 1 | 2 ;

export type CellType = "text" | "checkBox" | "fileURL" | "statusBox";

export interface TableEntries {
  name: string;
  type: CellType;
}

export interface IdData {
  id: number;
}

export type TableProps = {
  tabeleName: string;
  tableEntries: TableEntries[];
  data: IdData[];
};

