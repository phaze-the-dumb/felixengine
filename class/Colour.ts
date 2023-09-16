class Colour{
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a: number){
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  toString(): string {
    return `rgba(${this.r * 255}, ${this.g * 255}, ${this.b * 255}, ${this.a * 255})`;
  }

  static getWhite(): Colour {
    return new Colour(1, 1, 1, 1);
  }

  static getBlack(): Colour {
    return new Colour(0, 0, 0, 1);
  }

  static getRed(): Colour {
    return new Colour(1, 0, 0, 1);
  }

  static getGreen(): Colour {
    return new Colour(0, 1, 0, 1);
  }

  static getBlue(): Colour {
    return new Colour(0, 0, 1, 1);
  }

  static fromHex(hex: string): Colour {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    let a = 1;

    if(hex.length > 7)
      a = parseInt(hex.slice(7, 9), 16) / 255;

    return new Colour(r, g, b, a);
  }
}

export default Colour;