import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "../main.scss";
import Table from "../../components/table/table";
import { fetchTestPageMenuData } from "../../redux/slices/TestPageMenuSlice";

function TestPageMenu() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.testPageMenu);

  const tableName = "Test Page Menu";

  useEffect(() => {
    dispatch(fetchTestPageMenuData());
  }, [dispatch]);

  return (
    <div className="main">
      <Table tableName={tableName} data={data} />
    </div>
  );
}

export default TestPageMenu;
