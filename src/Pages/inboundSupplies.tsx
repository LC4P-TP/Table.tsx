import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import "./main.scss";
import Table from "../components/table/table";
import { fetchData, TableDataInboundSupplies } from "../redux/slices/InboundSuppliesSlice";

function InboundSupplies() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.inboundSupplies);

  const tableName = "Inbound supplies";

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="main">
      <Table tableName={tableName} data={data as TableDataInboundSupplies[]} />
    </div>
  );
}

export default InboundSupplies;
