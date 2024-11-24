import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import "./main.scss";
import Table from "../components/table/table";
import { fetchInboundSuppliesData } from "../redux/slices/InboundSuppliesSlice";
import { IdData } from "../components/table/types";

function InboundSupplies() {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((state) => state.inboundSupplies);
  const transformedData = data.map((item) => ({
    ...item,
    id: item.id,
  })) as IdData[];

  const tableName = "Inbound supplies";

  useEffect(() => {
    dispatch(fetchInboundSuppliesData());
  }, [dispatch]);

  return (
    <div className="main">
      <Table tableName={tableName} data={transformedData} />
    </div>
  );
}

export default InboundSupplies;
