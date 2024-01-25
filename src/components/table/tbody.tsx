import "./table.scss";
import { Data, IdData } from "./types";
import { TdText } from "./td/tdText";

const RenderCells = ({ obj }: { obj: Data }) => {
  return Object.entries(obj).map(([key, value]) => (
    <TdText key={key} value={value} />
  ));
};

export const TBody = ({ data }: { data: IdData[] }) => {
  return (
    <tbody>
      {data.map((row) => {
        const { id, ...obj } = row;
        return (
          <tr key={id}>
            <RenderCells obj={obj} />
          </tr>
        );
      })}
    </tbody>
  );
};
