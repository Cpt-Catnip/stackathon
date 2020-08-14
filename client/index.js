import { Engine, Runner } from 'matter-js';
import { app, engine, Particle, Chart } from './game';

let particles = [];
let runner;
let state;

const setup = () => {
  // add assets to game
  document.getElementById('app').appendChild(app.view);
  particles.push(new Particle(10, 10, 20));

  const plot = new Chart(680, 20);

  // start game loop
  runner = Engine.run(engine);
  app.ticker.add((delta) => gameLoop(delta));

  // set game state
  state = go;
};

const gameLoop = (delta) => {
  state(delta);
};

const go = (delta) => {
  // move physics engine forward
  // Engine.update(engine, app.ticker.elapsedMS);

  // redraw particles
  particles.forEach((particle) => {
    particle.show();
  });
};

setup();
