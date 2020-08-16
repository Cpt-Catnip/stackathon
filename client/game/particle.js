import { World, Bodies } from 'matter-js';
import { Graphics, Sprite } from 'pixi.js';
import { engine, app } from './index';

const options = {
  friction: 0,
};

export class Particle {
  constructor(x, y, radius) {
    // create physical object
    this.body = Bodies.circle(x, y, radius);

    // add body to world
    World.add(engine.world, this.body);

    // create sprite
    this.graphic = new Graphics();
    this.graphic.beginFill(0x66ccff);
    this.graphic.drawCircle(x, y, radius);
    this.graphic.endFill();
    this.graphic = app.renderer.generateTexture(this.graphic);
    this.graphic = new Sprite(this.graphic);
    this.graphic.anchor.set(0.5, 0.5);

    // add sprite to world
    app.stage.addChild(this.graphic);
  }

  show() {
    const pos = this.body.position;
    this.graphic.position.set(pos.x, pos.y);
    // this.graphic.moveTo(pos.x, pos.y)
    // console.log(pos.x, pos.y)
  }

  remove() {
    World.remove(engine.world, this.body);
    this.graphic.parent.removeChild(this.graphic);
  }
}
