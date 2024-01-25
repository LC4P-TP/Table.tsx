export const TdText = ({ key, value }: { key: string; value: boolean }) => {
  return (
    <td key={key}>
      {value ? (
        <div id="true" className="checkBoxTrue" />
      ) : (
        <div id="false" className="checkBoxFalse" />
      )}
    </td>
  );
};
