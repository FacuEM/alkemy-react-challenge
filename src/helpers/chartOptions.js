export const optionsHome = {
  xaxis: {
    categories: [
      "Intelligence",
      "Strength",
      "Speed",
      "Durability",
      "Power",
      "Combat",
    ],
    labels: {
      show: true,
      style: {
        fontSize: "9px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 300,
        cssClass: "apexcharts-xaxis-label",
        colors: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ],
      },
    },
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    theme: "dark",
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 1,
  },
  plotOptions: {
    radar: {
      size: 65,
      offsetY: 10,
    },
  },
};

export const optionsCard = {
  xaxis: {
    categories: [
      "Intelligence",
      "Strength",
      "Speed",
      "Durability",
      "Power",
      "Combat",
    ],
    labels: {
      show: true,
      style: {
        fontSize: "7px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 300,
        cssClass: "apexcharts-xaxis-label",
        colors: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ],
      },
    },
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    theme: "dark",
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 1,
  },
  plotOptions: {
    radar: {
      size: 35,
      offsetY: 5,
      offsetX: -3,
    },
  },
};
