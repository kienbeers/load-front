import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { getAllData } from "../service/S3MDataLoadFrame1Service";

export default function S3MDataLoadFrame1ViewData() {
  const [data, setData] = useState();
  const columns = [
    {
      title: "Device ID",
      dataIndex: "deviceId",
      key: "deviceId",
    },
    {
      title: "UAB",
      dataIndex: "uab",
      key: "uab",
    },
    {
      title: "UBC",
      dataIndex: "ubc",
      key: "ubc",
    },
    {
      title: "UCA",
      dataIndex: "uca",
      key: "uca",
    },
    {
      title: "UCN",
      dataIndex: "ucn",
      key: "ucn",
    },
    {
      title: "ULL",
      dataIndex: "ull",
      key: "ull",
    },
    {
      title: "ULN",
      dataIndex: "uln",
      key: "uln",
    },
    {
      title: "IA",
      dataIndex: "ia",
      key: "ia",
    },
    {
      title: "IB",
      dataIndex: "ib",
      key: "ib",
    },
    {
      title: "IC",
      dataIndex: "ic",
      key: "ic",
    },
    {
      title: "IG",
      dataIndex: "ig",
      key: "ig",
    },
    {
      title: "IN",
      dataIndex: "in",
      key: "in",
    },
    {
      title: "PA",
      dataIndex: "pa",
      key: "pa",
    },
    {
      title: "PB",
      dataIndex: "pb",
      key: "pb",
    },
    {
      title: "PC",
      dataIndex: "pc",
      key: "pc",
    },
    {
      title: "P total",
      dataIndex: "ptotal",
      key: "ptotal",
    },
    {
      title: "QA",
      dataIndex: "qa",
      key: "qa",
    },
    {
      title: "QB",
      dataIndex: "qb",
      key: "qb",
    },

    {
      title: "QC",
      dataIndex: "qc",
      key: "qc",
    },
    {
      title: "Q Total",
      dataIndex: "qtotal",
      key: "qtotal",
    },
    {
      title: "SA",
      dataIndex: "sa",
      key: "sa",
    },
    {
      title: "SB",
      dataIndex: "sb",
      key: "sb",
    },
    {
      title: "SC",
      dataIndex: "sc",
      key: "sc",
    },
    {
      title: "S total",
      dataIndex: "stotal",
      key: "stotal",
    },
    {
      title: "PFA",
      dataIndex: "pfa",
      key: "pfa",
    },
    {
      title: "PFB",
      dataIndex: "pfb",
      key: "pfb",
    },
    {
      title: "PFC",
      dataIndex: "pfc",
      key: "pfc",
    },
    {
      title: "Pf Avg",
      dataIndex: "pfavg",
      key: "pfavg",
    },
    {
      title: "T1",
      dataIndex: "t1",
      key: "t1",
    },
    {
      title: "T2",
      dataIndex: "t2",
      key: "t2",
    },
    {
      title: "T3",
      dataIndex: "t3",
      key: "t3",
    },
    {
      title: "Ep",
      dataIndex: "ep",
      key: "ep",
    },
    {
      title: "EpR",
      dataIndex: "epR",
      key: "epR",
    },
    {
      title: "EpDr",
      dataIndex: "epDr",
      key: "epDr",
    },
    {
      title: "EpDrr",
      dataIndex: "epDrr",
      key: "epDrr",
    },
    {
      title: "Eq",
      dataIndex: "eq",
      key: "eq",
    },
    {
      title: "EqR",
      dataIndex: "eqR",
      key: "EqR",
    },
    {
      title: "EqDr",
      dataIndex: "eqDr",
      key: "eqdr",
    },
    {
      title: "EqDrr",
      dataIndex: "eqDrr",
      key: "eqDrr",
    },
    {
      title: "Es",
      dataIndex: "es",
      key: "es",
    },
    {
      title: "EsR",
      dataIndex: "esR",
      key: "EsR",
    },
    {
      title: "EsDr",
      dataIndex: "esDr",
      key: "esdr",
    },
    {
      title: "EsDrr",
      dataIndex: "esDrr",
      key: "esDrr",
    },
    {
      title: "THD_IA",
      dataIndex: "thdIa",
      key: "thdIa",
    },
    {
      title: "THD_IB",
      dataIndex: "thdIb",
      key: "thdIb",
    },
    {
      title: "THD_IC",
      dataIndex: "thdIc",
      key: "thdIc",
    },
    {
      title: "THD_IG",
      dataIndex: "thdIg",
      key: "thdIg",
    },
    {
      title: "THD_IN",
      dataIndex: "thdIn",
      key: "thdIn",
    },
    {
      title: "THD_Vab",
      dataIndex: "thdVab",
      key: "thdVab",
    },
    {
      title: "THD_Vbc",
      dataIndex: "thdVbc",
      key: "thdVbc",
    },
    {
      title: "THD_Vbc",
      dataIndex: "thdVbc",
      key: "thdVbc",
    },
    {
      title: "THD_Vca",
      dataIndex: "thdVca",
      key: "thdVca",
    },
    {
      title: "THD_Van",
      dataIndex: "thdVan",
      key: "thdVan",
    },
    {
      title: "THD_Vbn",
      dataIndex: "thdVbn",
      key: "thdVbn",
    },
    {
      title: "THD_Vcn",
      dataIndex: "thdVcn",
      key: "thdVcn",
    },
    {
      title: "THD_Vll",
      dataIndex: "thdVll",
      key: "thdVll",
    },
    {
      title: "THD_Vln",
      dataIndex: "thdVln",
      key: "thdVln",
    },
  ];

  useEffect(() => {
    var dataSource = [];
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/view-data", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result).data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  });

  return (
    <>
      <Table columns={columns} dataSource={data}></Table>
    </>
  );
}
