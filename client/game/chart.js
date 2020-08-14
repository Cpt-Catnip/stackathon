import { app } from './index';
import { Graphics } from 'pixi.js';

const width = 100;

export class Chart {
  constructor(x, y, tracker) {
    this.graphic = new Graphics();
    this.graphic.beginFill(0xffffff);
    this.graphic.drawRect(x, y, width, width);
    this.graphic.endFill();

    app.stage.addChild(this.graphic);
  }
}
