import "./td.scss";

export const TdCheckBox = ({ value }: { value: boolean }) => {
  return (
    <td>
      <div className="boxWrapper">
        {value ? <div id="true" className="checkIcon" /> : <div id="false" className="unCheckIcon" />}
      </div>
    </td>
  );
};
