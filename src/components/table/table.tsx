import "./table.scss";
import { TableProps , CellType} from "./types";
import { THead } from "./thead";
import { TBody } from "./tbody";

function Table(props: TableProps) {
  const { names, types } = props.tableEntries.reduce(
    (
      { names, types }: { names: string[]; types: CellType[] },
      { name, type }
    ) => {
      names.push(name);
      types.push(type);
      
      return { names, types };
    },
    { names: [], types: [] }
  );

  return (
    <div className="tableWrapper">
      <h2 className="tableName">{props.tabeleName}</h2>
      <table key={props.tabeleName}>
        <THead names={names} />
        <TBody data={props.data} types={types} />
      </table>
    </div>
  );
}

export default Table;
