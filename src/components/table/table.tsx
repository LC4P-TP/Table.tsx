import "./table.scss";
import { TableProps } from "./types";
import { THead } from "./thead";
import { TBody } from "./tbody";

function Table(props: TableProps) {
  return (
    <div className="tableWrapper">
      <h2>{props.tabeleName}</h2>
      <table key={props.tabeleName}>
        <THead headerNames={props.headerNames} />
        <TBody data={props.data} />
      </table>
    </div>
  );
}

export default Table;
