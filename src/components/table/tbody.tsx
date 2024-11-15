import "./table.scss";
import { StatusType, TableEntries } from "./types";
import { TdText } from "./td/tdText";
import { TdCheckBox } from "./td/tdCheckBox";
import { TdFile } from "./td/tdFile";
import { TdStatusBox } from "./td/tdStatusBox";

const RenderCells = ({ obj, tableEntries }: { obj: object; tableEntries: TableEntries[] }) => {
  const cells = Object.entries(obj).map(([key, value], index) => {
    const mapKey = tableEntries[index].cellType;
    const tdMap = {
      text: <TdText key={key} value={value as string} />,
      checkBox: <TdCheckBox key={key} value={value as boolean} />,
      fileURL: <TdFile key={key} value={value as string} />,
      statusBox: <TdStatusBox key={key} value={value as StatusType} />,
    };

    return tdMap[mapKey];
  });

  return cells;
};

export const TBody = <T extends { id: number }>({
  data,
  tableEntries,
}: {
  data: T[];
  tableEntries: TableEntries[];
}) => {
  return (
    <tbody>
      {data.map((row) => {
        const { id, ...obj } = row;
        return (
          <tr key={id}>
            <RenderCells obj={obj} tableEntries={tableEntries} />
          </tr>
        );
      })}
    </tbody>
  );
};
