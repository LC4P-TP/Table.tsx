import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "../main.scss";
import Table from "../../components/table/table";
import { fetchTestPageSubMenu } from "../../redux/slices/TestPageSubMenuSlice";

function TestPageSubMenu() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.testPageSubMenu);

  const tableName = "Test Page Sub Menu";

  useEffect(() => {
    dispatch(fetchTestPageSubMenu());
  }, [dispatch]);

  return (
    <div className="main">
      <Table tableName={tableName} data={data} />
    </div>
  );
}

export default TestPageSubMenu;
