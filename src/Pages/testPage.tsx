import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import "./main.scss";
import Table from "../components/table/table";
import { fetchData } from "../redux/slices/TestPageSlice/testPageSlice";
import { TestData } from "../redux/mockAPI/api";

function TestPage() {
  const dispatch = useAppDispatch();

  const testData = useAppSelector((state) => state.testReducer.data);

  const tableName = "Test page";

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="main">
      <Table tableName={tableName} data={testData as TestData[]} />
    </div>
  );
}

export default TestPage;
