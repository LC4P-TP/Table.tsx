import "./td.scss";
import { StatusType } from "../types";

const StatusBox = ({ status }: { status: StatusType }) => {
  const statusMap = {
    0: <div id="0" className="status greenStatus" />,
    1: <div id="1" className="status yelouStatus" />,
    2: <div id="2" className="status redStatus" />,
  };

  return statusMap[status];
};

export function TdStatusBox({ value }: { value: StatusType }) {
  return (
    <td>
      <div className="boxWrapper">
        <StatusBox status={value} />
      </div>
    </td>
  );
}
