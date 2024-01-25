import "./table.scss";

export const THead = ({ headerNames }: { headerNames: string[] }) => {
  return (
    <thead>
      <tr>
        {headerNames.map((name) => (
          <th key={name}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};
