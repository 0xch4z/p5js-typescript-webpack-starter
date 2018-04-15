import { Circle } from './objects';

const circle = new Circle();

window.preload = (): void => {
  // p5 preload hook
  // called once before setup;
  // load any necessary assets here.
};

window.setup = (): void => {
  // p5 setup hook
  // called once before draw loop;
  // setup the page here.
  createCanvas(500, 500);
};

window.draw = (): void => {
  // p5 draw hook
  // main draw loop;
  // draw your objects here.
  background(51);
  circle.draw();
};
