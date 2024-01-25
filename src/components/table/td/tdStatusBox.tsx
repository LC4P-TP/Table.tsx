const StatusBox = ({ status }: { status: number }) => {
  switch (status) {
    case 0:
      return <div id="0" className="green" />;
    case 1:
      return <div id="1" className="yelow" />;
    case 2:
      return <div id="2" className="red" />;
    default:
      break;
  }
};

export const TdText = ({ key, value }: { key: string; value: number }) => {
  return (
    <td key={key}>
      <StatusBox status={value} />
    </td>
  );
};
