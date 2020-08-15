import { World, Bodies } from 'matter-js';
import { Graphics, Sprite } from 'pixi.js';
import { engine, app } from './index';

const options = {
  friction: 0,
  isStatic: true,
};

export class Ground {
  constructor(x, y, width, height, angle = 0) {
    // set angle
    options.angle = angle;

    // create physical object
    this.body = Bodies.rectangle(x, y, width, height, options);

    // make sprite
    this.graphic = new Graphics();
    this.graphic.beginFill(0x566573);
    this.graphic.drawRect(x, y, width, height);
    this.graphic.endFill();
    this.graphic = app.renderer.generateTexture(this.graphic);
    this.graphic = new Sprite(this.graphic);

    this.graphic.anchor.set(0.5, 0.5);

    // this.graphic.position.set(x, y);
    this.graphic.rotation = angle;

    // add body to world
    World.add(engine.world, this.body);

    // add texture to stage
    app.stage.addChild(this.graphic);
  }

  show() {
    const pos = this.body.position;
    this.graphic.position.set(pos.x, pos.y);
  }
}
