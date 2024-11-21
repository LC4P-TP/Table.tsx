import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import "./main.scss";
import Table from "../components/table/table";
import { fetchData } from "../redux/slices/TestPageSlice/testPageSlice";
import { TestData } from "../redux/mockAPI/testAPI";

function TestPage() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.test);

  const tableName = "Test page";

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="main">
      <Table tableName={tableName} data={data as TestData[]} />
    </div>
  );
}

export default TestPage;
