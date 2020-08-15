import { Engine } from 'matter-js';
import {
  app,
  engine,
  Particle,
  Ground,
  WORLD_HEIGHT,
  WORLD_WIDTH,
} from './game';

let particles = [];
let bounds = [];
let runner;
let state;

const setup = () => {
  // add particle
  particles.push(new Particle(10, 311, 20));

  // add ground
  bounds.push(
    new Ground(
      WORLD_WIDTH / 2,
      WORLD_HEIGHT,
      2 * WORLD_WIDTH,
      300,
      15 * (Math.PI / 180)
    )
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
  // Engine.update(engine, app.ticker.elapsedMS, delta);
  // console.log(app.ticker.FPS)

  // redraw particles
  particles.forEach((particle) => {
    particle.show();
  });

  for (let i = 0; i < particles.length; i++) {
    if (particles[i].body.position.x > WORLD_WIDTH + 50) {
      particles.splice(i, 1);
      i--;
    }
  }

  // redraw boundaries
  bounds.forEach((bound) => bound.show());
};

setup();
