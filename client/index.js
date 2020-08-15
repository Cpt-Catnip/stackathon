import { Engine, Runner } from 'matter-js';
import {
  app,
  engine,
  Particle,
  Ground,
  WORLD_HEIGHT,
  WORLD_WIDTH,
} from './game';

let particles = [];
let ground = [];
let runner;
let state;

const setup = () => {
  // add particle
  particles.push(new Particle(10, 10, 20));
  particles.push(new Particle(10, 10, 20))

  // add ground
  ground.push(
    new Ground(0, WORLD_HEIGHT / 2, WORLD_WIDTH, WORLD_HEIGHT / 2)
  );

  // set game state
  state = go;

  // start game loop
  runner = Engine.run(engine);
  app.ticker.add((delta) => gameLoop(delta));
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
