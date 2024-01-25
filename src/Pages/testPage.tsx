import "./main.scss";
import Table from "../components/table/table";

function TestPage() {
  const tabeleName = "Test page";
  const headerNames = ["1", "2"];

  // type cell: text, checkBox, file, StatusBox

  const testData = [
    { id: 1, row1: "q1", row2: "cera" },
    { id: 2, row1: "d2", row2: "cebe" },
    { id: 3, row1: "w3", row2: "bera" },
  ];

  return (
    <div className="main">
      <Table
        tabeleName={tabeleName}
        headerNames={headerNames}
        data={testData}
      />
    </div>
  );
}

export default TestPage;
