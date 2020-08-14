import { Engine } from 'matter-js';
import { Application } from 'pixi.js';

// PIXI canvas
export const app = new Application({ width: 800, height: 600 });

// Matter-js physics engine
export const engine = Engine.create();
