import { Button, Input } from "antd";
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import S3MLoadDataFrame1 from "../Entities/S3MLoadDataFrame1";
import { post } from "../service/AllFrameService";
import InputMinMax from "./InputMinMax";
import ButtonRunAndStop from "./ButtonRunAndStop";
const S3MLoadDataFrame1Component = () => {
  const [arr, setArr] = useState([
    "id",
    "uab",
    "ubc",
    "uca",
    "ull",
    "uan",
    "ubn",
    "ucn",
    "uln",
    "ia",
    "ib",
    "ic",
    "i_n",
    "ig",
    "iavg",
    "pa",
    "pb",
    "pc",
    "p_total",
    "qa",
    "qb",
    "qc",
    "q_total",
    "sa",
    "sb",
    "sc",
    "s_total",
    "pfa",
    "pfb",
    "pfc",
    "pfavg",
    "f",
    "ep",
    "ep_r",
    "ep_dr",
    "ep_drr",
    "eq",
    "eq_r",
    "eq_dr",
    "eq_drr",
    "es",
    "es_r",
    "es_dr",
    "es_drr",
    "t1",
    "t2",
    "t3",
    "command_data1",
    "command_data2",
    "command_data3",
    "command_data4",
    "command_data5",
    "command_data6",
    "thd_ia",
    "thd_ib",
    "thd_ic",
    "thd_ig",
    "thd_vab",
    "thd_vbc",
    "thd_vca",
    "thd_vll",
    "thd_van",
    "thd_vbn",
    "thd_vcn",
    "thd_vln",
    "sent_date",
    "transaction_date",
    "thd_in",
  ]);
  const changeTimeout = (event) => {
    setTime(event.target.value);
  };
  const [time, setTime] = useState(10000);
  const [minUab, setMinUab] = useState(0);
  const [maxUab, setMaxUab] = useState(100);
  const [minUbc, setMinUbc] = useState(0);
  const [maxUbc, setMaxUbc] = useState(100);
  const [minUca, setMinUca] = useState(0);
  const [maxUca, setMaxUca] = useState(100);
  const [minUll, setMinUll] = useState(0);
  const [maxUll, setMaxUll] = useState(100);
  const [minUan, setMinUan] = useState(0);
  const [maxUan, setMaxUan] = useState(100);
  const [minUbn, setMinUbn] = useState(0);
  const [maxUbn, setMaxUbn] = useState(100);
  const [minUcn, setMinUcn] = useState(0);
  const [maxUcn, setMaxUcn] = useState(100);
  const [minUln, setMinUln] = useState(0);
  const [maxUln, setMaxUln] = useState(100);
  const [minIa, setMinIa] = useState(0);
  const [maxIa, setMaxIa] = useState(100);
  const [minIb, setMinIb] = useState(0);
  const [maxIb, setMaxIb] = useState(100);
  const [minIc, setMinIc] = useState(0);
  const [maxIc, setMaxIc] = useState(100);
  const [minIN, setMinIN] = useState(0);
  const [maxIN, setMaxIN] = useState(100);
  const [minIG, setMinIG] = useState(0);
  const [maxIG, setMaxIG] = useState(100);
  const [minIAvg, setMinIAvg] = useState(0);
  const [maxIAvg, setMaxIAvg] = useState(100);
  const [minPa, setMinPa] = useState(0);
  const [maxPa, setMaxPa] = useState(100);
  const [minPb, setMinPb] = useState(0);
  const [maxPb, setMaxPb] = useState(100);
  const [minPc, setMinPc] = useState(0);
  const [maxPc, setMaxPc] = useState(100);
  const [minPTotal, setMinPTotal] = useState(0);
  const [maxPTotal, setMaxPTotal] = useState(100);
  const [minQa, setMinQa] = useState(0);
  const [maxQa, setMaxQa] = useState(100);
  const [minQb, setMinQb] = useState(0);
  const [maxQb, setMaxQb] = useState(100);
  const [minQc, setMinQc] = useState(0);
  const [maxQc, setMaxQc] = useState(100);
  const [minQTotal, setMinQTotal] = useState(0);
  const [maxQTotal, setMaxQTotal] = useState(100);
  const [minSa, setMinSa] = useState(0);
  const [maxSa, setMaxSa] = useState(100);
  const [minSb, setMinSb] = useState(0);
  const [maxSb, setMaxSb] = useState(100);
  const [minSc, setMinSc] = useState(0);
  const [maxSc, setMaxSc] = useState(100);
  const [minSTotal, setMinSTotal] = useState(0);
  const [maxSTotal, setMaxSTotal] = useState(100);
  const [minPfa, setMinPfa] = useState(0);
  const [maxPfa, setMaxPfa] = useState(1);
  const [minPfb, setMinPfb] = useState(0);
  const [maxPfb, setMaxPfb] = useState(1);
  const [minPfc, setMinPfc] = useState(0);
  const [maxPfc, setMaxPfc] = useState(1);
  const [minPFAvg, setMinPFAvg] = useState(0);
  const [maxPFAvg, setMaxPFAvg] = useState(1);
  const [minF, setMinF] = useState(45);
  const [maxF, setMaxF] = useState(65);
  const [minEp, setMinEp] = useState(0);
  const [maxEp, setMaxEp] = useState(100);
  const [minEpR, setMinEpR] = useState(0);
  const [maxEpR, setMaxEpR] = useState(100);
  const [minEpDR, setMinEpDR] = useState(0);
  const [maxEpDR, setMaxEpDR] = useState(100);
  const [minEpDRR, setMinEpDRR] = useState(0);
  const [maxEpDRR, setMaxEpDRR] = useState(100);
  const [minEq, setMinEq] = useState(0);
  const [maxEq, setMaxEq] = useState(100);
  const [minEqR, setMinEqR] = useState(0);
  const [maxEqR, setMaxEqR] = useState(100);
  const [minEqDR, setMinEqDR] = useState(0);
  const [maxEqDR, setMaxEqDR] = useState(100);
  const [minEqDRR, setMinEqDRR] = useState(0);
  const [maxEqDRR, setMaxEqDRR] = useState(100);
  const [minEs, setMinEs] = useState(0);
  const [maxEs, setMaxEs] = useState(100);
  const [minEsR, setMinEsR] = useState(0);
  const [maxEsR, setMaxEsR] = useState(100);
  const [minEsDR, setMinEsDR] = useState(0);
  const [maxEsDR, setMaxEsDR] = useState(100);
  const [minEsDRR, setMinEsDRR] = useState(0);
  const [maxEsDRR, setMaxEsDRR] = useState(100);
  const [minT1, setMinT1] = useState(0);
  const [maxT1, setMaxT1] = useState(100);
  const [minT2, setMinT2] = useState(0);
  const [maxT2, setMaxT2] = useState(100);
  const [minT3, setMinT3] = useState(0);
  const [maxT3, setMaxT3] = useState(100);
  const [minCommandData1, setMinCommandData1] = useState(0);
  const [maxCommandData1, setMaxCommandData1] = useState(100);
  const [minCommandData2, setMinCommandData2] = useState(0);
  const [maxCommandData2, setMaxCommandData2] = useState(100);
  const [minCommandData3, setMinCommandData3] = useState(0);
  const [maxCommandData3, setMaxCommandData3] = useState(100);
  const [minCommandData4, setMinCommandData4] = useState(0);
  const [maxCommandData4, setMaxCommandData4] = useState(100);
  const [minCommandData5, setMinCommandData5] = useState(0);
  const [maxCommandData5, setMaxCommandData5] = useState(100);
  const [minCommandData6, setMinCommandData6] = useState(0);
  const [maxCommandData6, setMaxCommandData6] = useState(100);
  const [minThdIa, setMinThdIa] = useState(0);
  const [maxThdIa, setMaxThdIa] = useState(100);
  const [minThdIb, setMinThdIb] = useState(0);
  const [maxThdIb, setMaxThdIb] = useState(100);
  const [minThdIc, setMinThdIc] = useState(0);
  const [maxThdIc, setMaxThdIc] = useState(100);
  const [minThdIn, setMinThdIn] = useState(0);
  const [maxThdIn, setMaxThdIn] = useState(100);
  const [minThdIg, setMinThdIg] = useState(0);
  const [maxThdIg, setMaxThdIg] = useState(100);
  const [minThdVab, setMinThdVab] = useState(0);
  const [maxThdVab, setMaxThdVab] = useState(100);
  const [minThdVbc, setMinThdVbc] = useState(0);
  const [maxThdVbc, setMaxThdVbc] = useState(100);
  const [minThdVca, setMinThdVca] = useState(0);
  const [maxThdVca, setMaxThdVca] = useState(100);
  const [minThdVll, setMinThdVll] = useState(0);
  const [maxThdVll, setMaxThdVll] = useState(100);
  const [minThdVan, setMinThdVan] = useState(0);
  const [maxThdVan, setMaxThdVan] = useState(100);
  const [minThdVbn, setMinThdVbn] = useState(0);
  const [maxThdVbn, setMaxThdVbn] = useState(100);
  const [minThdVcn, setMinThdVcn] = useState(0);
  const [maxThdVcn, setMaxThdVcn] = useState(100);
  const [minThdVln, setMinThdVln] = useState(0);
  const [maxThdVln, setMaxThdVln] = useState(100);

  const random = (min, max) => {
    return min + Math.random() * (max - min);
  };
  const [timerId, setTimerId] = useState();
  const handelClickChay = () => {
    if (validationForm() === true) {
      const timer = setInterval(() => {
        const e = new S3MLoadDataFrame1(
          random(minUab, maxUab).toFixed(2),
          random(minUbc, maxUbc).toFixed(2),
          random(minUca, maxUca).toFixed(2),
          random(minUll, maxUll).toFixed(2),
          random(minUan, maxUan).toFixed(2),
          random(minUbn, maxUbn).toFixed(2),
          random(minUcn, maxUcn).toFixed(2),
          random(minUln, maxUln).toFixed(2),
          random(minIa, maxIa).toFixed(2),
          random(minIb, maxIb).toFixed(2),
          random(minIc, maxIc).toFixed(2),
          random(minIN, maxIN).toFixed(2),
          random(minIG, maxIG).toFixed(2),
          random(minIAvg, maxIAvg).toFixed(2),
          random(minPa, maxPa).toFixed(2),
          random(minPb, maxPb).toFixed(2),
          random(minPc, maxPc).toFixed(2),
          random(minPTotal, maxPTotal).toFixed(2),
          random(minQa, maxQa).toFixed(2),
          random(minQb, maxQb).toFixed(2),
          random(minQc, maxQc).toFixed(2),
          random(minQTotal, maxQTotal).toFixed(2),
          random(minSa, maxSa).toFixed(2),
          random(minSb, maxSb).toFixed(2),
          random(minSc, maxSc).toFixed(2),
          random(minSTotal, maxSTotal).toFixed(2),
          random(minPfa, maxPfa).toFixed(2),
          random(minPfb, maxPfb).toFixed(2),
          random(minPfc, maxPfc).toFixed(2),
          random(minPFAvg, maxPFAvg).toFixed(2),
          random(minF, maxF).toFixed(2),
          Math.floor(random(minEp, maxEp)),
          Math.floor(random(minEpR, maxEpR)),
          Math.floor(random(minEpDR, maxEpDR)),
          Math.floor(random(minEpDRR, maxEpDRR)),
          Math.floor(random(minEq, maxEq)),
          Math.floor(random(minEqR, maxEqR)),
          Math.floor(random(minEpDR, maxEpDR)),
          Math.floor(random(minEpDRR, maxEpDRR)),
          Math.floor(random(minEs, maxEs)),
          Math.floor(random(minEsR, maxEsR)),
          Math.floor(random(minEsDR, maxEsDR)),
          Math.floor(random(minEsDRR, maxEsDRR)),
          random(minT1, maxT2).toFixed(2),
          random(minT2, maxT2).toFixed(2),
          random(minT3, maxT3).toFixed(2),
          Math.floor(random(minCommandData1, maxCommandData1)),
          Math.floor(random(minCommandData2, maxCommandData2)),
          Math.floor(random(minCommandData3, maxCommandData3)),
          Math.floor(random(minCommandData4, maxCommandData4)),
          Math.floor(random(minCommandData5, maxCommandData5)),
          Math.floor(random(minCommandData6, maxCommandData6)),
          random(minThdIa, maxThdIa).toFixed(2),
          random(minThdIb, maxThdIb).toFixed(2),
          random(minThdIc, maxThdIc).toFixed(2),
          random(minThdIg, maxThdIg).toFixed(2),
          random(minThdVab, maxThdVab).toFixed(2),
          random(minThdVbc, maxThdVbc).toFixed(2),
          random(minThdVca, maxThdVca).toFixed(2),
          random(minThdVan, maxThdVan).toFixed(2),
          random(minThdVll, maxThdVll).toFixed(2),
          random(minThdVbn, maxThdVbn).toFixed(2),
          random(minThdVcn, maxThdVcn).toFixed(2),
          random(minThdVln, maxThdVln).toFixed(2),
          new Date(),
          Math.floor(new Date().getTime() / 1000),
          random(minThdIn, maxThdIn).toFixed(2),
          Math.floor(random(0, 10000000)),
          Math.floor(random(1, 100))
        );
        console.log(e);
        post(e);
      }, time);
      setTimerId(timer);
      return () => clearInterval(timer);
    }
  };
  const clichDung = () => {
    clearInterval(timerId);
  };

  const validationForm = () => {
    if (minUab === "") {
      setMinUab(0);
      return true;
    }
    if (maxUab === "") {
      setMaxUab(45000);
      return true;
    }
    if (minUab < 0 || maxUab > 45000 || minUab > maxUab) {
      console.log("Lỗi");
      return false;
    }
    if (minUbc === "") {
      setMinUbc(0);
      return true;
    }
    if (maxUbc === "") {
      setMaxUbc(45000);
      return true;
    }
    if (minUbc < 0 || maxUbc > 45000 || minUbc > maxUbc) {
      console.log("Lỗi");
      return false;
    }
    if (minUca === "") {
      setMinUca(0);
      return true;
    }
    if (maxUca === "") {
      setMaxUca(45000);
      return true;
    }
    if (minUca < 0 || maxUca > 45000 || minUca > maxUca) {
      console.log("Lỗi");
      return false;
    }
    if (minUan === "") {
      setMinUan(0);
      return true;
    }
    if (maxUan === "") {
      setMaxUan(45000);
      return true;
    }
    if (minUan < 0 || maxUan > 45000 || minUan > maxUan) {
      console.log("Lỗi");
      return false;
    }
    if (minUbn === "") {
      setMinUbn(0);
      return true;
    }
    if (maxUbn === "") {
      setMaxUbn(45000);
      return true;
    }
    if (minUbn < 0 || maxUbn > 45000 || minUbn > maxUbn) {
      console.log("Lỗi");
      return false;
    }
    if (minUcn === "") {
      setMinUcn(0);
      return true;
    }
    if (maxUcn === "") {
      setMaxUcn(45000);
      return true;
    }
    if (minUcn < 0 || maxUcn > 45000 || minUcn > maxUcn) {
      console.log("Lỗi");
      return false;
    }
    if (minUln === "") {
      setMinUln(0);
      return true;
    }
    if (maxUln === "") {
      setMaxUln(45000);
      return true;
    }
    if (minUln < 0 || maxUln > 45000 || minUln > maxUln) {
      console.log("Lỗi");
      return false;
    }
    if (minUll === "") {
      setMinUll(0);
      return true;
    }
    if (maxUll === "") {
      setMaxUll(45000);
      return true;
    }
    if (minUll < 0 || maxUll > 45000 || minUll > maxUll) {
      console.log("Lỗi");
      return false;
    }
    if (minIa === "") {
      setMinIa(0);
      return true;
    }
    if (maxIa === "") {
      setMaxIa(10000);
      return true;
    }
    if (minIa < 0 || maxIa > 10000 || minIa > maxIa) {
      console.log("Lỗi");
      return false;
    }
    if (minIb === "") {
      setMinIb(0);
      return true;
    }
    if (maxIb === "") {
      setMaxIb(10000);
      return true;
    }
    if (minIb < 0 || maxIb > 10000 || minIb > maxIb) {
      console.log("Lỗi");
      return false;
    }
    if (minIc === "") {
      setMinIc(0);
      return true;
    }
    if (maxIc === "") {
      setMaxIc(10000);
      return true;
    }
    if (minIc < 0 || maxIc > 10000 || minIc > maxIc) {
      console.log("Lỗi");
      return false;
    }
    if (minIN === "") {
      setMinIN(0);
      return true;
    }
    if (maxIN === "") {
      setMaxIN(10000);
      return true;
    }
    if (minIN < 0 || maxIN > 10000 || minIN > maxIN) {
      console.log("Lỗi");
      return false;
    }
    if (minIG === "") {
      setMinIG(0);
      return true;
    }
    if (maxIG === "") {
      setMaxIG(10000);
      return true;
    }
    if (minIG < 0 || maxIG > 10000 || minIG > maxIG) {
      console.log("Lỗi");
      return false;
    }
    if (minIAvg === "") {
      setMinIAvg(0);
      return true;
    }
    if (maxIAvg === "") {
      setMaxIAvg(10000);
      return true;
    }
    if (minIAvg < 0 || maxIAvg > 10000 || minIAvg > maxIAvg) {
      console.log("Lỗi");
      return false;
    }
    if (minPa === "") {
      setMinPa(-2000000);
      return true;
    }
    if (maxPa === "") {
      setMaxPa(2000000);
      return true;
    }
    if (minPa < -2000000 || maxPa > 2000000 || minPa > maxPa) {
      console.log("Lỗi");
      return false;
    }
    if (minPb === "") {
      setMinPb(-2000000);
      return true;
    }
    if (maxPb === "") {
      setMaxPb(2000000);
      return true;
    }
    if (minPb < -2000000 || maxPb > 2000000 || minPb > maxPb) {
      console.log("Lỗi");
      return false;
    }
    if (minPc === "") {
      setMinPc(-2000000);
      return true;
    }
    if (maxPc === "") {
      setMaxPc(2000000);
      return true;
    }
    if (minPc < -2000000 || maxPc > 2000000 || minPc > maxPc) {
      console.log("Lỗi");
      return false;
    }
    if (minPTotal === "") {
      setMinPTotal(-6000000);
      return true;
    }
    if (maxPTotal === "") {
      setMaxPTotal(6000000);
      return true;
    }
    if (minPTotal < -6000000 || maxPTotal > 6000000 || minPTotal > maxPTotal) {
      console.log("Lỗi");
      return false;
    }
    if (minQa === "") {
      setMinQa(-2000000);
      return true;
    }
    if (maxQa === "") {
      setMaxQa(2000000);
      return true;
    }
    if (minQa < -2000000 || maxQa > 2000000 || minQa > maxQa) {
      console.log("Lỗi");
      return false;
    }
    if (minQb === "") {
      setMinQb(-2000000);
      return true;
    }
    if (maxQb === "") {
      setMaxQb(2000000);
      return true;
    }
    if (minQb < -2000000 || maxQb > 2000000 || minQb > maxQb) {
      console.log("Lỗi");
      return false;
    }
    if (minQc === "") {
      setMinQc(-2000000);
      return true;
    }
    if (maxQc === "") {
      setMaxQc(2000000);
      return true;
    }
    if (minQc < -2000000 || maxQc > 2000000 || minQc > maxQc) {
      console.log("Lỗi");
      return false;
    }
    if (minQTotal === "") {
      setMinQTotal(-6000000);
      return true;
    }
    if (maxQTotal === "") {
      setMaxQTotal(6000000);
      return true;
    }
    if (minQTotal < -6000000 || maxQTotal > 6000000 || minQTotal > maxQTotal) {
      console.log("Lỗi");
      return false;
    }
    if (minSa === "") {
      setMinSa(-2000000);
      return true;
    }
    if (maxSa === "") {
      setMaxSa(2000000);
      return true;
    }
    if (minSa < -2000000 || maxSa > 2000000 || minSa > maxSa) {
      console.log("Lỗi");
      return false;
    }
    if (minSb === "") {
      setMinSb(-2000000);
      return true;
    }
    if (maxSb === "") {
      setMaxSb(2000000);
      return true;
    }
    if (minSb < -2000000 || maxSb > 2000000 || minSb > maxSb) {
      console.log("Lỗi");
      return false;
    }
    if (minSc === "") {
      setMinSc(-2000000);
      return true;
    }
    if (maxSc === "") {
      setMaxSc(2000000);
      return true;
    }
    if (minSc < -2000000 || maxSc > 2000000 || minSc > maxSc) {
      console.log("Lỗi");
      return false;
    }

    if (minSTotal === "") {
      setMinSTotal(-6000000);
      return true;
    }
    if (maxSTotal === "") {
      setMaxSTotal(6000000);
      return true;
    }
    if (minSTotal < -6000000 || maxSTotal > 6000000 || minSTotal > maxSTotal) {
      console.log("Lỗi");
      return false;
    }
    if (minPfa === "") {
      setMinPfa(-1);
      return true;
    }
    if (maxPfa === "") {
      setMaxPfa(1);
      return true;
    }
    if (minPfa < -1 || maxPfa > 1 || minPfa > maxPfa) {
      console.log("Lỗi");
      return false;
    }
    if (minPfb === "") {
      setMinPfb(-1);
      return true;
    }
    if (maxPfb === "") {
      setMaxPfb(1);
      return true;
    }
    if (minPfb < -1 || maxPfb > 1 || minPfb > maxPfb) {
      console.log("Lỗi");
      return false;
    }
    if (minPfc === "") {
      setMinPfc(-1);
      return true;
    }
    if (maxPfc === "") {
      setMaxPfc(1);
      return true;
    }
    if (minPfc < -1 || maxPfc > 1 || minPfc > maxPfc) {
      console.log("Lỗi");
      return false;
    }
    if (minPFAvg === "") {
      setMinPFAvg(-1);
      return true;
    }
    if (maxPFAvg === "") {
      setMaxPFAvg(1);
      return true;
    }
    if (minPFAvg < -1 || maxPFAvg > 1 || minPFAvg > maxPFAvg) {
      console.log("Lỗi");
      return false;
    }
    if (minF === "") {
      setMinF(45);
      return true;
    }
    if (maxF === "") {
      setMaxF(65);
      return true;
    }
    if (minF < 45 || maxF > 65 || minF > maxF) {
      console.log("Lỗi");
      return false;
    }
    if (minEp === "") {
      setMinEp(-2000000000);
      return true;
    }
    if (maxEp === "") {
      setMaxEp(2000000000);
      return true;
    }
    if (minEp < -2000000000 || maxEp > 2000000000 || minEp > maxEp) {
      console.log("Lỗi");
      return false;
    }
    if (minEpR === "") {
      setMinEpR(-2000000000);
      return true;
    }
    if (maxEpR === "") {
      setMaxEpR(2000000000);
      return true;
    }
    if (minEpR < -2000000000 || maxEpR > 2000000000 || minEpR > maxEpR) {
      console.log("Lỗi");
      return false;
    }
    if (minEpDR === "") {
      setMinEpDR(-2000000000);
      return true;
    }
    if (maxEpDR === "") {
      setMaxEpDR(2000000000);
      return true;
    }
    if (minEpDR < -2000000000 || maxEpDR > 2000000000 || minEpDR > maxEpDR) {
      console.log("Lỗi");
      return false;
    }
    if (minEpDRR === "") {
      setMinEpDRR(-2000000000);
      return true;
    }
    if (maxEpDRR === "") {
      setMaxEpDRR(2000000000);
      return true;
    }
    if (
      minEpDRR < -2000000000 ||
      maxEpDRR > 2000000000 ||
      minEpDRR > maxEpDRR
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minEq === "") {
      setMinEq(-2000000000);
      return true;
    }
    if (maxEq === "") {
      setMaxEq(2000000000);
      return true;
    }
    if (minEq < -2000000000 || maxEq > 2000000000 || minEq > maxEq) {
      console.log("Lỗi");
      return false;
    }

    if (minEqR === "") {
      setMinEqR(-2000000000);
      return true;
    }
    if (maxEqR === "") {
      setMaxEqR(2000000000);
      return true;
    }
    if (minEqR < -2000000000 || maxEqR > 2000000000 || minEqR > maxEqR) {
      console.log("Lỗi");
      return false;
    }
    if (minEqDR === "") {
      setMinEqDR(-2000000000);
      return true;
    }
    if (maxEqDR === "") {
      setMaxEqDR(2000000000);
      return true;
    }
    if (minEqDR < -2000000000 || maxEqDR > 2000000000 || minEqDR > maxEqDR) {
      console.log("Lỗi");
      return false;
    }
    if (minEqDRR === "") {
      setMinEqDRR(-2000000000);
      return true;
    }
    if (maxEqDRR === "") {
      setMaxEqDRR(2000000000);
      return true;
    }
    if (
      minEqDRR < -2000000000 ||
      maxEqDRR > 2000000000 ||
      minEqDRR > maxEqDRR
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minEs === "") {
      setMinEs(-2000000000);
      return true;
    }
    if (maxEs === "") {
      setMaxEs(2000000000);
      return true;
    }
    if (minEs < -2000000000 || maxEs > 2000000000 || minEs > maxEs) {
      console.log("Lỗi");
      return false;
    }
    if (minEsR === "") {
      setMinEsR(-2000000000);
      return true;
    }
    if (maxEsR === "") {
      setMaxEsR(2000000000);
      return true;
    }
    if (minEsR < -2000000000 || maxEsR > 2000000000 || minEsR > maxEsR) {
      console.log("Lỗi");
      return false;
    }
    if (minEsDR === "") {
      setMinEsDR(-2000000000);
      return true;
    }
    if (maxEsDR === "") {
      setMaxEsDR(2000000000);
      return true;
    }
    if (minEsDR < -2000000000 || maxEsDR > 2000000000 || minEsDR > maxEsDR) {
      console.log("Lỗi");
      return false;
    }
    if (minEsDRR === "") {
      setMinEsDRR(-2000000000);
      return true;
    }
    if (maxEsDRR === "") {
      setMaxEsDRR(2000000000);
      return true;
    }
    if (
      minEsDRR < -2000000000 ||
      maxEsDRR > 2000000000 ||
      minEsDRR > maxEsDRR
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minT1 === "") {
      setMinT1(-100);
      return true;
    }
    if (maxT1 === "") {
      setMaxT1(200);
      return true;
    }
    if (minT1 < -100 || maxT1 > 200 || minT1 > maxT1) {
      console.log("Lỗi");
      return false;
    }
    if (minT2 === "") {
      setMinT2(-100);
      return true;
    }
    if (maxT2 === "") {
      setMaxT2(200);
      return true;
    }
    if (minT2 < -100 || maxT2 > 200 || minT2 > maxT2) {
      console.log("Lỗi");
      return false;
    }
    if (minT3 === "") {
      setMinT3(-100);
      return true;
    }
    if (maxT3 === "") {
      setMaxT3(200);
      return true;
    }
    if (minT3 < -100 || maxT3 > 200 || minT3 > maxT3) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData1 === "") {
      setMinCommandData1(-1000);
      return true;
    }
    if (maxCommandData1 === "") {
      setMaxCommandData1(1000);
      return true;
    }
    if (
      minCommandData1 < -1000 ||
      maxCommandData1 > 1000 ||
      minCommandData1 > maxCommandData1
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData2 === "") {
      setMinCommandData2(-1000);
      return true;
    }
    if (maxCommandData2 === "") {
      setMaxCommandData2(1000);
      return true;
    }
    if (
      minCommandData2 < -1000 ||
      maxCommandData2 > 1000 ||
      minCommandData2 > maxCommandData2
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData3 === "") {
      setMinCommandData3(-1000);
      return true;
    }
    if (maxCommandData3 === "") {
      setMaxCommandData3(1000);
      return true;
    }
    if (
      minCommandData3 < -1000 ||
      maxCommandData3 > 1000 ||
      minCommandData3 > maxCommandData3
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData4 === "") {
      setMinCommandData4(-1000);
      return true;
    }
    if (maxCommandData4 === "") {
      setMaxCommandData4(1000);
      return true;
    }
    if (
      minCommandData4 < -1000 ||
      maxCommandData4 > 1000 ||
      minCommandData4 > maxCommandData4
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData5 === "") {
      setMinCommandData5(-1000);
      return true;
    }
    if (maxCommandData5 === "") {
      setMaxCommandData5(1000);
      return true;
    }
    if (
      minCommandData5 < -1000 ||
      maxCommandData5 > 1000 ||
      minCommandData5 > maxCommandData5
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData6 === "") {
      setMinCommandData6(-1000);
      return true;
    }
    if (maxCommandData6 === "") {
      setMaxCommandData6(1000);
      return true;
    }
    if (
      minCommandData6 < -1000 ||
      maxCommandData6 > 1000 ||
      minCommandData6 > maxCommandData6
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIa === "") {
      setMinThdIa(0);
      return true;
    }
    if (maxThdIa === "") {
      setMaxThdIa(100);
      return true;
    }
    if (minThdIa < 0 || maxThdIa > 100 || minThdIa > maxThdIa) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIb === "") {
      setMinThdIb(0);
      return true;
    }
    if (maxThdIb === "") {
      setMaxThdIb(100);
      return true;
    }
    if (minThdIb < 0 || maxThdIb > 100 || minThdIb > maxThdIb) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIc === "") {
      setMinThdIc(0);
      return true;
    }
    if (maxThdIc === "") {
      setMaxThdIc(100);
      return true;
    }
    if (minThdIc < 0 || maxThdIc > 100 || minThdIc > maxThdIc) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIg === "") {
      setMinThdIg(0);
      return true;
    }
    if (maxThdIg === "") {
      setMaxThdIg(100);
      return true;
    }
    if (minThdIg < 0 || maxThdIg > 100 || minThdIg > maxThdIg) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIn === "") {
      setMinThdIn(0);
      return true;
    }
    if (maxThdIn === "") {
      setMaxThdIn(100);
      return true;
    }
    if (minThdIn < 0 || maxThdIn > 100 || minThdIn > maxThdIn) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVab === "") {
      setMinThdVab(0);
      return true;
    }
    if (maxThdVab === "") {
      setMaxThdVab(100);
      return true;
    }
    if (minThdVab < 0 || maxThdVab > 100 || minThdVab > maxThdVab) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVbc === "") {
      setMinThdVbc(0);
      return true;
    }
    if (maxThdVbc === "") {
      setMaxThdVbc(100);
      return true;
    }
    if (minThdVbc < 0 || maxThdVbc > 100 || minThdVbc > maxThdVbc) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVca === "") {
      setMinThdVca(0);
      return true;
    }
    if (maxThdVca === "") {
      setMaxThdVca(100);
      return true;
    }
    if (minThdVca < 0 || maxThdVca > 100 || minThdVca > maxThdVca) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVan === "") {
      setMinThdVan(0);
      return true;
    }
    if (maxThdVan === "") {
      setMaxThdVan(100);
      return true;
    }
    if (minThdVan < 0 || maxThdVan > 100 || minThdVan > maxThdVan) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVbn === "") {
      setMinThdVbn(0);
      return true;
    }
    if (maxThdVbn === "") {
      setMaxThdVbn(100);
      return true;
    }
    if (minThdVbn < 0 || maxThdVbn > 100 || minThdVbn > maxThdVbn) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVcn === "") {
      setMinThdVcn(0);
      return true;
    }
    if (maxThdVcn === "") {
      setMaxThdVcn(100);
      return true;
    }
    if (minThdVcn < 0 || maxThdVcn > 100 || minThdVcn > maxThdVcn) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVln === "") {
      setMinThdVln(0);
      return true;
    }
    if (maxThdVln === "") {
      setMaxThdVln(100);
      return true;
    }
    if (minThdVln < 0 || maxThdVln > 100 || minThdVln > maxThdVln) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVll === "") {
      setMinThdVll(0);
      return true;
    }
    if (maxThdVll === "") {
      setMaxThdVll(100);
      return true;
    }
    if (minThdVll < 0 || maxThdVll > 100 || minThdVll > maxThdVll) {
      console.log("Lỗi");
      return false;
    }

    return true;
  };
  return (
    <>
      <div className="row mb-4">
        <ButtonRunAndStop run={handelClickChay} stop={clichDung} />
      </div>
      <div className="row">
        <div className="col-4">
          <InputMinMax
            name="UAB"
            minValue={minUab}
            maxValue={maxUab}
            setminValue={setMinUab}
            setmaxValue={setMaxUab}
            minX={0}
            maxX={44999}
            minY={1}
            maxY={45000}
          />
          <InputMinMax
            name="UBC"
            minValue={minUbc}
            maxValue={maxUbc}
            setminValue={setMinUbc}
            setmaxValue={setMaxUbc}
            minX={0}
            maxX={44999}
            minY={1}
            maxY={45000}
          />
          <InputMinMax
            name="UCA"
            minValue={minUca}
            maxValue={maxUca}
            setminValue={setMinUca}
            setmaxValue={setMaxUca}
            minX={0}
            maxX={44999}
            minY={1}
            maxY={45000}
          />
          <InputMinMax
            name="ULL"
            minValue={minUll}
            maxValue={maxUll}
            setminValue={setMinUll}
            setmaxValue={setMaxUll}
            minX={0}
            maxX={44999}
            minY={1}
            maxY={45000}
          />
          <InputMinMax
            name="UAN"
            minValue={minUan}
            maxValue={maxUan}
            setminValue={setMinUan}
            setmaxValue={setMaxUan}
            minX={0}
            maxX={44999}
            minY={1}
            maxY={45000}
          />
          <InputMinMax
            name="UBN"
            minValue={minUbn}
            maxValue={maxUbn}
            setminValue={setMinUbn}
            setmaxValue={setMaxUbn}
            minX={0}
            maxX={44999}
            minY={1}
            maxY={45000}
          />
          <InputMinMax
            name="UCN"
            minValue={minUcn}
            maxValue={maxUcn}
            setminValue={setMinUcn}
            setmaxValue={setMaxUcn}
            minX={0}
            maxX={44999}
            minY={1}
            maxY={45000}
          />
          <InputMinMax
            name="ULN"
            minValue={minUln}
            maxValue={maxUln}
            setminValue={setMinUln}
            setmaxValue={setMaxUln}
            minX={0}
            maxX={44999}
            minY={1}
            maxY={45000}
          />
          <InputMinMax
            name="IA"
            minValue={minIa}
            maxValue={maxIa}
            setminValue={setMinIa}
            setmaxValue={setMaxIa}
            minX={0}
            maxX={9999}
            minY={1}
            maxY={10000}
          />
          <InputMinMax
            name="IB"
            minValue={minIb}
            maxValue={maxIb}
            setminValue={setMinIb}
            setmaxValue={setMaxIb}
            minX={0}
            maxX={9999}
            minY={1}
            maxY={10000}
          />
          <InputMinMax
            name="IC"
            minValue={minIc}
            maxValue={maxIc}
            setminValue={setMinIc}
            setmaxValue={setMaxIc}
            minX={0}
            maxX={9999}
            minY={1}
            maxY={10000}
          />
          <InputMinMax
            name="IN"
            minValue={minIN}
            maxValue={maxIN}
            setminValue={setMinIN}
            setmaxValue={setMaxIN}
            minX={0}
            maxX={9999}
            minY={1}
            maxY={10000}
          />
          <InputMinMax
            name="IG"
            minValue={minIG}
            maxValue={maxIG}
            setminValue={setMinIG}
            setmaxValue={setMaxIG}
            minX={0}
            maxX={9999}
            minY={1}
            maxY={10000}
          />
          <InputMinMax
            name="IAVG"
            minValue={minIAvg}
            maxValue={maxIAvg}
            setminValue={setMinIAvg}
            setmaxValue={setMaxIAvg}
            minX={0}
            maxX={9999}
            minY={1}
            maxY={10000}
          />
          <InputMinMax
            name="PA"
            minValue={minPa}
            maxValue={maxPa}
            setminValue={setMinPa}
            setmaxValue={setMaxPa}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="PB"
            minValue={minPb}
            maxValue={maxPb}
            setminValue={setMinPb}
            setmaxValue={setMaxPb}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="PC"
            minValue={minPc}
            maxValue={maxPc}
            setminValue={setMinPc}
            setmaxValue={setMaxPc}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="P_Total"
            minValue={minPTotal}
            maxValue={maxPTotal}
            setminValue={setMinPTotal}
            setmaxValue={setMaxPTotal}
            minX={-6000000}
            maxX={5999999}
            minY={-5999999}
            maxY={6000000}
          />
          <InputMinMax
            name="QA"
            minValue={minQa}
            maxValue={maxQa}
            setminValue={setMinQa}
            setmaxValue={setMaxQa}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="QB"
            minValue={minQb}
            maxValue={maxQb}
            setminValue={setMinQb}
            setmaxValue={setMaxQb}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="QC"
            minValue={minQc}
            maxValue={maxQc}
            setminValue={setMinQc}
            setmaxValue={setMaxQc}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="Q_Total"
            minValue={minQTotal}
            maxValue={maxQTotal}
            setminValue={setMinQTotal}
            setmaxValue={setMaxQTotal}
            minX={-6000000}
            maxX={5999999}
            minY={-5999999}
            maxY={6000000}
          />
        </div>
        <div className="col-4">
          <InputMinMax
            name="SA"
            minValue={minSa}
            maxValue={maxSa}
            setminValue={setMinSa}
            setmaxValue={setMaxSa}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="SB"
            minValue={minSb}
            maxValue={maxSb}
            setminValue={setMinSb}
            setmaxValue={setMaxSb}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="SC"
            minValue={minSc}
            maxValue={maxSc}
            setminValue={setMinSc}
            setmaxValue={setMaxSc}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="S_Total"
            minValue={minSTotal}
            maxValue={maxSTotal}
            setminValue={setMinSTotal}
            setmaxValue={setMaxSTotal}
            minX={-2000000}
            maxX={1999999}
            minY={-1999999}
            maxY={2000000}
          />
          <InputMinMax
            name="PFA"
            minValue={minPfa}
            maxValue={maxPfa}
            setminValue={setMinPfa}
            setmaxValue={setMaxPfa}
            minX={-1}
            maxX={0.9999999999}
            minY={-0.9999999999}
            maxY={1}
          />
          <InputMinMax
            name="PFB"
            minValue={minPfb}
            maxValue={maxPfb}
            setminValue={setMinPfb}
            setmaxValue={setMaxPfb}
            minX={-1}
            maxX={0.9999999999}
            minY={-0.9999999999}
            maxY={1}
          />
          <InputMinMax
            name="PFC"
            minValue={minPfc}
            maxValue={maxPfc}
            setminValue={setMinPfc}
            setmaxValue={setMaxPfc}
            minX={-1}
            maxX={0.9999999999}
            minY={-0.9999999999}
            maxY={1}
          />
          <InputMinMax
            name="PFAvg"
            minValue={minPFAvg}
            maxValue={maxPFAvg}
            setminValue={setMinPFAvg}
            setmaxValue={setMaxPFAvg}
            minX={-1}
            maxX={0.9999999999}
            minY={-0.9999999999}
            maxY={1}
          />
          <InputMinMax
            name="EP"
            minValue={minEp}
            maxValue={maxEp}
            setminValue={setMinEp}
            setmaxValue={setMaxEp}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="EP_R"
            minValue={minEpR}
            maxValue={maxEpR}
            setminValue={setMinEpR}
            setmaxValue={setMaxEpR}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="EP_DR"
            minValue={minEpDR}
            maxValue={maxEpDR}
            setminValue={setMinEpDR}
            setmaxValue={setMaxEpDR}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="EP_DRR"
            minValue={minEpDRR}
            maxValue={maxEpDRR}
            setminValue={setMinEpDRR}
            setmaxValue={setMaxEpDRR}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="EQ"
            minValue={minEq}
            maxValue={maxEq}
            setminValue={setMinEq}
            setmaxValue={setMaxEq}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="EQ_R"
            minValue={minEqR}
            maxValue={maxEqR}
            setminValue={setMinEqR}
            setmaxValue={setMaxEqR}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="EQ_DR"
            minValue={minEqDR}
            maxValue={maxEqDR}
            setminValue={setMinEqDR}
            setmaxValue={setMaxEqDR}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="EQ_DRR"
            minValue={minEqDRR}
            maxValue={maxEqDRR}
            setminValue={setMinEqDRR}
            setmaxValue={setMaxEqDRR}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="ES"
            minValue={minEs}
            maxValue={maxEs}
            setminValue={setMinEs}
            setmaxValue={setMaxEs}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="ES_R"
            minValue={minEsR}
            maxValue={maxEsR}
            setminValue={setMinEsR}
            setmaxValue={setMaxEsR}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="ES_DR"
            minValue={minEsDR}
            maxValue={maxEsDR}
            setminValue={setMinEsDR}
            setmaxValue={setMaxEsDR}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="Es_DRR"
            minValue={minEsDRR}
            maxValue={maxEsDRR}
            setminValue={setMinEsDRR}
            setmaxValue={setMaxEsDRR}
            minX={0}
            maxX={3999999999}
            minY={1}
            maxY={4000000000}
          />
          <InputMinMax
            name="T1"
            minValue={minT1}
            maxValue={maxT1}
            setminValue={setMinT1}
            setmaxValue={setMaxT1}
            minX={-100}
            maxX={199}
            minY={-99}
            maxY={200}
          />
          <InputMinMax
            name="T2"
            minValue={minT2}
            maxValue={maxT2}
            setminValue={setMinT2}
            setmaxValue={setMaxT2}
            minX={-100}
            maxX={199}
            minY={-99}
            maxY={200}
          />
          <InputMinMax
            name="T3"
            minValue={minT3}
            maxValue={maxT3}
            setminValue={setMinT3}
            setmaxValue={setMaxT3}
            minX={-100}
            maxX={199}
            minY={-99}
            maxY={200}
          />
        </div>
        <div className="col-4 ">
          <InputMinMax
            name="COMMAND_DATA1"
            minValue={minCommandData1}
            maxValue={maxCommandData1}
            setminValue={setMinCommandData1}
            setmaxValue={setMaxCommandData1}
            minX={-100}
            maxX={199}
            minY={-99}
            maxY={200}
          />
          <InputMinMax
            name="COMMAND_DATA2"
            minValue={minCommandData2}
            maxValue={maxCommandData2}
            setminValue={setMinCommandData2}
            setmaxValue={setMaxCommandData2}
            minX={-100}
            maxX={199}
            minY={-99}
            maxY={200}
          />
          <InputMinMax
            name="COMMAND_DATA3"
            minValue={minCommandData3}
            maxValue={maxCommandData3}
            setminValue={setMinCommandData3}
            setmaxValue={setMaxCommandData3}
            minX={-100}
            maxX={199}
            minY={-99}
            maxY={200}
          />
          <InputMinMax
            name="COMMAND_DATA4"
            minValue={minCommandData4}
            maxValue={maxCommandData4}
            setminValue={setMinCommandData4}
            setmaxValue={setMaxCommandData4}
            minX={-100}
            maxX={199}
            minY={-99}
            maxY={200}
          />
          <InputMinMax
            name="COMMAND_DATA5"
            minValue={minCommandData5}
            maxValue={maxCommandData5}
            setminValue={setMinCommandData5}
            setmaxValue={setMaxCommandData5}
            minX={-100}
            maxX={199}
            minY={-99}
            maxY={200}
          />
          <InputMinMax
            name="COMMAND_DATA6"
            minValue={minCommandData6}
            maxValue={maxCommandData6}
            setminValue={setMinCommandData6}
            setmaxValue={setMaxCommandData6}
            minX={-100}
            maxX={199}
            minY={-99}
            maxY={200}
          />
          <InputMinMax
            name="THD_IA"
            minValue={minThdIa}
            maxValue={maxThdIa}
            setminValue={setMinThdIa}
            setmaxValue={setMaxThdIa}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_IB"
            minValue={minThdIb}
            maxValue={maxThdIb}
            setminValue={setMinThdIb}
            setmaxValue={setMaxThdIb}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_IC"
            minValue={minThdIc}
            maxValue={maxThdIc}
            setminValue={setMinThdIc}
            setmaxValue={setMaxThdIc}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_IG"
            minValue={minThdIg}
            maxValue={maxThdIg}
            setminValue={setMinThdIg}
            setmaxValue={setMaxThdIg}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_IN"
            minValue={minThdIn}
            maxValue={maxThdIn}
            setminValue={setMinThdIn}
            setmaxValue={setMaxThdIn}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_VAB"
            minValue={minThdVab}
            maxValue={maxThdVab}
            setminValue={setMinThdVab}
            setmaxValue={setMaxThdVab}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_VBC"
            minValue={minThdVbc}
            maxValue={maxThdVbc}
            setminValue={setMinThdVbc}
            setmaxValue={setMaxThdVbc}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_VCA"
            minValue={minThdVca}
            maxValue={maxThdVca}
            setminValue={setMinThdVca}
            setmaxValue={setMaxThdVca}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_VAN"
            minValue={minThdVan}
            maxValue={maxThdVan}
            setminValue={setMinThdVan}
            setmaxValue={setMaxThdVan}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_VBN"
            minValue={minThdVbn}
            maxValue={maxThdVbn}
            setminValue={setMinThdVbn}
            setmaxValue={setMaxThdVbn}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_VCN"
            minValue={minThdVcn}
            maxValue={maxThdVcn}
            setminValue={setMinThdVcn}
            setmaxValue={setMaxThdVcn}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_VLN"
            minValue={minThdVln}
            maxValue={maxThdVln}
            setminValue={setMinThdVln}
            setmaxValue={setMaxThdVln}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="THD_VLL"
            minValue={minThdVll}
            maxValue={maxThdVll}
            setminValue={setMinThdVll}
            setmaxValue={setMaxThdVll}
            minX={0}
            maxX={99}
            minY={1}
            maxY={100}
          />
          <InputMinMax
            name="F"
            minValue={minF}
            maxValue={maxF}
            setminValue={setMinF}
            setmaxValue={setMaxF}
            minX={45}
            maxX={64}
            minY={46}
            maxY={65}
          />
          <div className="container mt-5">
            <label className="ms-3 me-3">Time Out</label>
            <Input
              type="number"
              placeholder="time-out"
              style={{ width: "50%" }}
              value={time}
              onChange={(event) => changeTimeout(event)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default S3MLoadDataFrame1Component;
