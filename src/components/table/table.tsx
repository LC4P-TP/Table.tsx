import "./table.scss";
import { TableProps } from "./types";
import { THead } from "./thead";
import { TBody } from "./tbody";
import { tableColumns } from "../../utils/constants/TableColumns";

function Table({ tableName, data }: TableProps) {
  const tableEntries = tableColumns[tableName];

  return (
    <div className="tableWrapper">
      <div className="mainButtonsBox"></div>
      <table key={tableName}>
        <THead tableName={tableName} tableEntries={tableEntries} />
        <TBody data={data} tableEntries={tableEntries} />
      </table>
    </div>
  );
}

export default Table;
