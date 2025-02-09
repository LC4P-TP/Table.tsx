import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import "./main.scss";
import Table from "../components/table/table";
import { fetchTestData } from "../redux/slices/testPageSlice";

function TestPage() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.test);

  const tableName = "Test page";

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  return (
    <div className="main">
      <Table tableName={tableName} data={data} />
    </div>
  );
}

export default TestPage;
