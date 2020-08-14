console.log('this is a thing!!!');
import * as Matter from 'matter-js';
import * as PIXI from 'pixi.js';


var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies

// create an engine
const engine = Engine.create();

// create a renderer
// const render = Render.create({
//   element: document.getElementById('app'),
//   engine: engine,
//   width: 800,
//   height: 600,
// });


// create two boxes and a ground
const height = 300;
const COM = (height * (1/3))
let ramp = Bodies.trapezoid(0, 600 - COM, 1600, height, 1, {
  isStatic: true,
  friction: 0,
});
const radius = 40
const particle = Bodies.circle(1, 600 - height - radius, radius, { friction: 0 });


// Matter.Vertices.create([
//   // { x: 100, y: 300 },
//   // { x: 300, y: 610 },
//   // { x: 0, y: 610 },
// ], ramp);

// add all of the bodies to the world
World.add(engine.world, [particle, ramp]);

// run the engine
// Engine.run(engine);

// run the renderer
// Render.run(render);

// make the canvas
let app = new PIXI.Application({ width: 800, height: 600 });
document.getElementById('app').appendChild(app.view)

// show things
