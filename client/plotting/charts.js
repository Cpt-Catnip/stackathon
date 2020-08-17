import { Chart } from 'chart.js';

const options = {
  elements: { line: { tension: 0 } },
  animation: {
    duration: 0, // general animation time
  },
  hover: {
    animationDuration: 0, // duration of animations when hovering an item
  },
  responsiveAnimationDuration: 0, // animation duration after a resize
  responsive: false,
  legend: { display: false },
  scales: {
    yAxes: [
      {
        gridLines: { drawBorder: false },
        ticks: { callback: () => '' },
      },
    ],
    xAxes: [
      {
        gridLines: { display: false },
        ticks: { callback: () => '' },
      },
    ],
  },
};

export const pos = new Chart(document.getElementById('pos'), {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 0,
        lineTension: 0,
      },
    ],
  },

  // Configuration options go here
  options: {
    title: {
      display: true,
      text: 'Position vs. Time',
      fontSize: 20,
    },
    ...options,
  },
});

export const vel = new Chart(document.getElementById('vel'), {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 0,
        lineTension: 0,
      },
    ],
  },

  // Configuration options go here
  options: {
    title: {
      display: true,
      text: 'Velocity vs. Time',
      fontSize: 20,
    },
    ...options,
  },
});
export const acc = new Chart(document.getElementById('acc'), {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 0,
        lineTension: 0,
      },
    ],
  },

  // Configuration options go here
  options: {
    title: {
      display: true,
      text: 'Acceleration vs. Time',
      fontSize: 20,
    },
    ...options,
  },
});

export const addData = (chart, label, data) => {
  chart.data.labels.push(label);
  // chart.data.labels = label;
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
    // dataset.data = data;
  });
  chart.update();
};
