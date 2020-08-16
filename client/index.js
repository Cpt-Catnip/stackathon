import {
  app,
  engine,
  Particle,
  Ground,
  WORLD_HEIGHT,
  WORLD_WIDTH,
} from './game';

let particle;
let ramp;
let runner;
let state;

const setup = (rampAngle) => {
  // add ground
  ramp = new Ground(rampAngle);

  // add particle
  particle = new Particle(rampAngle);
  particle.show();

  // set game state
  state = go;

  // start game loop
  app.ticker.add(gameLoop);
};

const gameLoop = (delta) => {
  state(delta);
};

const compute = (delta) => {};

const go = (delta) => {
  if (particle.graphic.position.x < WORLD_WIDTH) particle.show()
};

setup(30 * (Math.PI / 180));
