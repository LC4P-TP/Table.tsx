import "./td.scss";

export const TdText = ({ key, value }: { key: string; value: string }) => {
  return <td key={`${key}${value}`}>{value}</td>;
};
