import { World, Bodies } from 'matter-js';
import { Graphics, Sprite } from 'pixi.js';
import { engine, app, WORLD_HEIGHT,WORLD_WIDTH } from './index';

const options = {
  friction: 0,
  isStatic: true,
  restitution: 1
};

export class Ground {
  constructor(angle = 0) {
    // some constants
    const r = Math.hypot(WORLD_WIDTH, WORLD_HEIGHT);

    // make sprite
    this.graphic = new Graphics();
    this.graphic.beginFill(0x566573);
    this.graphic.drawRect(0, 0, r, WORLD_WIDTH);
    this.graphic.endFill();
    this.graphic = app.renderer.generateTexture(this.graphic);
    this.graphic = new Sprite(this.graphic);
    this.graphic.anchor.set(1, 0);

    // compute x and y given angle
    this.graphic.position.set(WORLD_WIDTH, WORLD_HEIGHT);
    this.graphic.rotation = angle;

    // add texture to stage
    app.stage.addChild(this.graphic);
  }

  show() {
    // const pos = this.body.position;
    // this.graphic.position.set(pos.x, pos.y);
  }
}
