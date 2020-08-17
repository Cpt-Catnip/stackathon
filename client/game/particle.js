import { Graphics, Sprite } from 'pixi.js';
import { app, WORLD_HEIGHT, WORLD_WIDTH, g, s_t, v_t } from './index';
import { pos, vel, acc, addData } from '../plotting';

// closure
const side = 100;
let initialAngle;
let h;
let i = 0;

export class Particle {
  constructor(angle) {
    initialAngle = angle;

    // create sprite
    this.graphic = new Graphics();
    this.graphic.beginFill(0x66ccff);
    this.graphic.drawRect(0, 0, side, side);
    this.graphic.endFill();
    this.graphic = app.renderer.generateTexture(this.graphic);
    this.graphic = new Sprite(this.graphic);
    this.graphic.anchor.set(0, 1);

    h = WORLD_HEIGHT - WORLD_WIDTH * Math.tan(angle);
    this.graphic.position.set(0, h);
    this.graphic.rotation = angle;

    // add sprite to world
    app.stage.addChild(this.graphic);

    // data
    this.data = {
      s: [],
      v: [],
      t: [],
      a: [],
    };
  }

  compute(dt = 1000 / 60) {
    // establish initial conditions
    const a = g * Math.sin(initialAngle);
    const t = [0];
    const s = [0];
    const v = [0];

    // create temp vars to hold previous state
    let sPrev, vPrev, tPrev;

    // compute state for each moment in time while box is on screen
    while (s[s.length - 1] * Math.cos(initialAngle) < WORLD_WIDTH) {
      tPrev = t[t.length - 1];
      vPrev = v[v.length - 1];
      sPrev = s[s.length - 1];

      t.push(tPrev + dt);
      s.push(sPrev + vPrev * dt);
      v.push(vPrev + a * dt);
    }

    // save data to instance
    this.data.t = t;
    this.data.s = s;
    this.data.v = v;
    this.data.a = Array(t.length).fill(a);
  }

  // step allows us to downsample and speed up the playback
  animate(step = 1) {
    // constants
    const a = g * Math.sin(initialAngle);
    const s = this.data.s[i];
    const v = this.data.v[i];
    const t = this.data.t[i];

    // move block
    const x = s * Math.cos(initialAngle);
    const y = h + s * Math.sin(initialAngle);
    this.graphic.position.set(x, y);

    // update plot
    addData(pos, t, s);
    addData(vel, t, v);
    // we know acceleration is constant, so we only need two data points
    if (i < 2) addData(acc, t, a);

    // iterate i for next frame
    i += step;
  }

  remove() {
    app.stage.removeChild(this.graphic);
  }
}
