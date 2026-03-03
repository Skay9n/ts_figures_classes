type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  color: Color;

  shape: Shape;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('...');
    }

    const longest = Math.max(a, b, c);
    const sumOfOthers = a + b + c - longest;

    if (longest >= sumOfOthers) {
      throw new Error('...');
    }
    this.color = color;
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    return (
      Math.floor(
        Math.sqrt(
          ((this.a + this.b + this.c) / 2) *
            ((this.a + this.b + this.c) / 2 - this.a) *
            ((this.a + this.b + this.c) / 2 - this.b) *
            ((this.a + this.b + this.c) / 2 - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  color: Color;

  shape: Shape;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('...');
    }

    this.color = color;
    this.shape = 'circle';
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(this.radius * this.radius * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: Color;

  shape: Shape;

  height: number;

  width: number;

  constructor(color: Color, height: number, width: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('...');
    }
    this.color = color;
    this.shape = 'rectangle';
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
