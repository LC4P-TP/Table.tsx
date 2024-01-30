import "./td.scss";
import { StatusType } from "../types";

const StatusBox = ({ status }: { status: StatusType }) => {
  const statusMap = {
    0: <div id="0" className="greenStatus" />,
    1: <div id="1" className="yelouStatus" />,
    2: <div id="2" className="redStatus" />,
  };

  return statusMap[status];
};

export const TdStatusBox = ({
  key,
  value,
}: {
  key: string;
  value: StatusType;
}) => {
  return (
    <td key={`${key}${value}`}>
      <div className="boxWrapper">
        <StatusBox status={value} />
      </div>
    </td>
  );
};
