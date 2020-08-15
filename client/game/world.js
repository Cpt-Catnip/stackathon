import { Engine } from 'matter-js';
import { Application } from 'pixi.js';
import { WORLD_HEIGHT, WORLD_WIDTH } from './index';

// PIXI canvas
export const app = new Application({
  width: WORLD_WIDTH,
  height: WORLD_HEIGHT,
});
document.getElementById('app').appendChild(app.view);

// Matter-js physics engine
export const engine = Engine.create();
