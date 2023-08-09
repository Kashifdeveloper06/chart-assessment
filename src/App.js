import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataAsia from "./mapDataAsia";
require("highcharts/modules/map")(Highcharts);

const App = () => {
  const data = [
    ["JP", 37],
    ["pk", 44],
    ["at", 20],
    // ... (other data entries)
    ["se", 21],
    ["ye", 6],
  ];

  const mapOptions = {
    title: {
      text: "",
    },
    colorAxis: {
      min: 0,
      stops: [
        [0.4, "#ffff00"],
        [0.65, "#bfff00"],
        [1, "	#40ff00"],
      ],
    },

    series: [
      {
        mapData: mapDataAsia,
        name: "",
        data: data,
      },
    ],
  };
  return (
    <div>
      <h1>Demos</h1>
      <h2>Highmaps</h2>
      <HighchartsReact
        options={mapOptions}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  );
};

export default App;
