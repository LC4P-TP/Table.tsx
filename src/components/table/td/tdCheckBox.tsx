import "./td.scss";

export const TdCheckBox = ({ key, value }: { key: string; value: boolean }) => {
  return (
    <td key={`${key}${value}`}>
      <div className="boxWrapper">
        {value ? (
          <div id="true" className="checkIcon" />
        ) : (
          <div id="false" className="unCheckIcon" />
        )}
      </div>
    </td>
  );
};
