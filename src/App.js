import { useState } from "react";
import "./App.css";
import S3MLoadDataFrame1 from "./Entities/S3MLoadDataFrame1";
import S3MLoadDataFrame2 from "./Entities/S3MLoadDataFrame2";
import S3MLoadDataFrame1Component from "./components/S3MLoadDataFrame1Component";
import S3MLoadDataFrame2Component from "./components/S3MLoadDataFrame2Component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import S3MDataLoadFrame1ViewData from "./page/S3MDataLoadFrame1ViewData";
import S3MDataLoadFrame2ViewData from "./page/S3MDataLoadFrame2ViewData";
function App() {
  return (
    <>
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route
            exact
            path="/frame1"
            Component={S3MLoadDataFrame1Component}
          ></Route>
          <Route
            exact
            path="/frame2"
            Component={S3MLoadDataFrame2Component}
          ></Route>
          <Route
            exact
            path="/view-frame1"
            Component={S3MDataLoadFrame1ViewData}
          ></Route>
          <Route
            exact
            path="/view-frame2"
            Component={S3MDataLoadFrame2ViewData}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
