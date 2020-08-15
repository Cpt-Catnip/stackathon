import { World, Bodies } from 'matter-js';
import { Graphics } from 'pixi.js';
import { engine, app } from './index';

const options = {
  friction: 0,
  isStatic: true,
};

export class Ground {
  constructor(x, y, width, height) {
    // create body with top edge as reference
    this.body = Bodies.rectangle(x, y + height / 2, width, height);

    // add body to world
    World.add(engine.world, this.body);

    // create sprite
    this.graphic = new Graphics();
    this.graphic.beginFill(0x2e4053);
    this.graphic.drawRect(x, y + width / 2, width, height)
    this.graphic.pivot.set(width / 2, height / 2);

    // add sprite to world
    app.stage.addChild(this.graphic)
  }
}
