import React, { Component } from 'react';
import './App.css';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const App: React.FC = () => {
  // const root = am5.Root.new("chartdiv")
  // console.log(root)
  return (
    <h1>
      {"hello"}
    </h1>
  )
}

export default React.memo(App)