import { Engine } from 'matter-js';
import { app, engine, Particle } from './game';

let particles = [];

const setup = () => {
  // add assets to game
  document.getElementById('app').appendChild(app.view);
  particles.push(new Particle(10, 10, 20));

  // start game loop
  Engine.run(engine);
  app.ticker.add((delta) => gameLoop(delta));
};

const gameLoop = (delta) => {
  particles.forEach((particle) => particle.show());
};

setup();
