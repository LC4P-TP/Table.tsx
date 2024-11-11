import "./main.scss";
import Table from "../components/table/table";
import { CellType } from "../components/table/types";

function TestPage() {
  const tabeleName = "Test page";
  const tableEntries: { names: string[]; types: CellType[] } = {
    names: ["text", "text 2", "checkbox", "fileURL", "statusBox"],
    types: ["text", "text", "checkBox", "fileURL", "statusBox"],
  };

  const testData = [
    { id: 1, row1: "q1", row2: "11", row3: true, row4: "1", row5: 1 },
    { id: 2, row1: "w2", row2: "Beavers", row3: false, row4: "2", row5: 0 },
    {
      id: 3,
      row1: "e3",
      row2: "Goose-Hydra",
      row3: true,
      row4: "3",
      row5: 2,
    },
    { id: 4, row1: "r4", row2: "909", row3: true, row4: "4", row5: 1 },
  ];

  return (
    <div className="main">
      <Table
        tabeleName={tabeleName}
        tableEntries={tableEntries}
        data={testData}
      />
    </div>
  );
}

export default TestPage;
