import "./main.scss";
import Table from "../components/table/table";
import { CellType } from "../components/table/types";

function TestPage() {
  const tabeleName = "Test page";
  const tableEntries: { name: string; type: CellType }[] = [
    { name: "text", type: "text" },
    { name: "text 2", type: "text" },
    { name: "checkbox", type: "checkBox" },
    { name: "fileURL", type: "fileURL" },
    { name: "statusBox", type: "statusBox" },
  ];
  // type "cell": text, checkBox, fileURL, statusBox

  const testData = [
    { id: 1, row1: "q1", "row1.1": "11", row2: true, row3: "1", row4: 1 },
    { id: 2, row1: "w2", "row1.1": "beavers", row2: false, row3: "2", row4: 0 },
    {
      id: 3,
      row1: "e3",
      "row1.1": "Goose - Hydra",
      row2: true,
      row3: "3",
      row4: 2,
    },
    { id: 3, row1: "r4", "row1.1": "909", row2: true, row3: "4", row4: 1 },
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
