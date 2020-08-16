import { Chart } from 'chart.js';

const options = {
  animation: {
    duration: 0, // general animation time
  },
  hover: {
    animationDuration: 0, // duration of animations when hovering an item
  },
  responsiveAnimationDuration: 0, // animation duration after a resize
};

export const pos = new Chart(document.getElementById('pos'), {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: [],

  // Configuration options go here
  options: options,
});

export const vel = new Chart(document.getElementById('vel'), {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: [],

  // Configuration options go here
  options: options,
});

export const acc = new Chart(document.getElementById('acc'), {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: [],

  // Configuration options go here
  options: options,
});

export const addData = (chart, dataPoint) {
  chart.data.push(dataPoint)
  chart.update();
}
