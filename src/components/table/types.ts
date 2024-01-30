export type StatusType = 0 | 1 | 2 ;

export type CellType = "text" | "checkBox" | "fileURL" | "statusBox";

export interface TableEntries {
  name: string;
  type: CellType;
}

export interface Data {
  row1: string;
  row2: boolean;
  row3: string;
  row4: number;
}

export interface IdData extends Data {
  id: number;
}

export type TableProps = {
  tabeleName: string;
  tableEntries: TableEntries[];
  data: IdData[];
};

