import { Graphics, Sprite } from 'pixi.js';
import { app, WORLD_HEIGHT, WORLD_WIDTH, g, s_t, v_t } from './index';

// closure
const side = 100;
let initialAngle;
let h;

export class Particle {
  constructor(angle) {
    initialAngle = angle

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

    // math
    // console.log(this.graphic.position)

    this.data = {
      s: [0],
      v: [0],
      t: [0],
    };
  }

  show(dt = 1000 / 60) {
    const a = g * Math.sin(initialAngle);
    const sPrev = this.data.s[this.data.s.length - 1];
    const vPrev = this.data.v[this.data.v.length - 1];

    const s = sPrev + vPrev * dt;
    this.data.s.push(s);
    this.data.v.push(vPrev + a * dt);


    const x = s * Math.cos(initialAngle)
    const y = h + s * Math.sin(initialAngle)
    this.graphic.position.set(x, y)
  }

  remove() {
    app.stage.removeChild(this.graphic);
  }
}
