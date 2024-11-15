import "./table.scss";
import { TableEntries } from "./types";

export const THead = ({ tableName, tableEntries }: { tableName: string; tableEntries: TableEntries[] }) => {
  return (
    <thead>
      <tr>
        {tableEntries.map((obj, index) => (
          <th key={`${tableName}-${obj.columnName}-column-${String(index)}`} title={obj.columnTirle}>
            {obj.columnName}
          </th>
        ))}
      </tr>
    </thead>
  );
};
