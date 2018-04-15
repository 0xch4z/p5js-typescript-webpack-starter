export class Circle {
  private color: string;

  constructor() {
    this.randomizeColor();
    setInterval(() => this.randomizeColor(), 3000);
  }

  private randomizeColor() {
    this.color = Circle.generateRandomColor();
  }

  private static generateRandomColor(): string {
    const val = Math.floor(Math.random() * 16777215);
    return '#' + val.toString(16);
  }

  draw() {
    ellipse(225, 225, 50, 50);
    noStroke();
    fill(this.color);
  }
}
