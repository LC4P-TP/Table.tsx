import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import "./main.scss";
import Table from "../components/table/table";
import { fetchTestData } from "../redux/slices/TestPageSlice/testPageSlice";
import { IdData } from "../components/table/types";

function TestPage() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.test);
  const transformedData = data.map((item) => ({
    ...item,
    id: item.id,
  })) as IdData[];

  const tableName = "Test page";

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  return (
    <div className="main">
      <Table tableName={tableName} data={transformedData} />
    </div>
  );
}

export default TestPage;
