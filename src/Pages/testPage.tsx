import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { CellType } from "../components/table/types";
import "./main.scss";
import Table from "../components/table/table";
import { fetchData } from "../redux/slices/TestPageSlice/testPageSlice";

function TestPage() {
  const dispatch = useAppDispatch();

  const testData = useAppSelector((state) => state.testReducer.data);

  const tabeleName = "Test page";
  const tableEntries: { names: string[]; types: CellType[] } = {
    names: ["text", "text 2", "checkbox", "fileURL", "statusBox"],
    types: ["text", "text", "checkBox", "fileURL", "statusBox"],
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
