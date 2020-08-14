import { Engine } from 'matter-js';
import { app, engine, particle } from './game';

let particles = [];

const setup = () => {
  particles.push(new particle(10, 10, 20));
  Engine.run(engine)
  app.ticker.add((delta) => gameLoop(delta));
};

const gameLoop = (delta) => {
  particle.forEach((particle) => particle.show());
};

setup();
