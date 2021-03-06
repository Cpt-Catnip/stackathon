import { app, Particle, Ground, WORLD_WIDTH } from './game';

let particle;
let ramp;
let state;

const setup = (rampAngle) => {
  // make sure the ramp angle is on the range [0, 45] degrees
  if (rampAngle < 0) rampAngle = 0;
  if (rampAngle > Math.PI / 4) rampAngle = Math.PI / 4;

  // add ground
  ramp = new Ground(rampAngle);

  // add box
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
    particle.remove();
    app.ticker.remove(gameLoop);
  }
};

setup(30 * (Math.PI / 180));
