import "./table.scss";

export const THead = ({ names }: { names: string[] }) => {
  return (
    <thead>
      <tr>
        {names.map((name) => (
          <th key={name}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};
