export interface Data {
  row1: string;
  row2: string;
}

export interface IdData extends Data {
  id: number;
}

export type TableProps = {
  tabeleName: string;
  headerNames: string[];
  data: IdData[];
};
