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
  // make sure the ramp angle is on the range [0, 45]
  if (rampAngle < 0) rampAngle = 0;
  if (rampAngle > Math.PI / 4) rampAngle = Math.PI / 4;

  // add ground
  ramp = new Ground(rampAngle);

  // add particle
  particle = new Particle(rampAngle);

  // set game state
  state = compute;

  // start game loop
  app.ticker.add(gameLoop);
};

const gameLoop = (delta) => {
  state(delta);
};

const compute = (delta) => {
  particle.compute();
  state = animate;
};

const animate = (delta) => {
  if (particle.graphic.position.x < WORLD_WIDTH) {
    particle.animate();
  } else {
    app.ticker.remove(gameLoop);
  }
};

setup(30 * (Math.PI / 180));
