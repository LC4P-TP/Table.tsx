import "./table.scss";
import { IdData, CellType, StatusType } from "./types";
import { TdText } from "./td/tdText";
import { TdCheckBox } from "./td/tdCheckBox";
import { TdFile } from "./td/tdFile";
import { TdStatusBox } from "./td/tdStatusBox";

const RenderCells = ({ obj, types }: { obj: object; types: CellType[] }) => {
  const cells = Object.entries(obj).map(([key, value], index) => {
    const mapKey = types[index];
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

export const TBody = ({
  data,
  types,
}: {
  data: IdData[];
  types: CellType[];
}) => {
  return (
    <tbody>
      {data.map((row) => {
        const { id, ...obj } = row;
        return (
          <tr key={id}>
            <RenderCells obj={obj} types={types} />
          </tr>
        );
      })}
    </tbody>
  );
};
