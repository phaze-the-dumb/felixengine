import Colour from "../Colour";
import { GameObject } from "../GameObject";
import { Component } from "./Component";

class FelixCamera extends Component{
  backgroundColour: Colour = Colour.getBlack();
  scale: number = 1;
  windowSize: { x: number, y: number } = {
    x: window.innerWidth,
    y: window.innerHeight
  };

  constructor( go: GameObject ){
    super(go);

    this.gameObject.addComponent<BoundingBox>(BoundingBox);
    this.requires.push("Bounding Box");

    this.name = 'Camera';

    this.definePublicValues['backgroundColour'] = 'Colour';
    this.definePublicValues['scale'] = 'Number';
  }

  getRect(): number[] {
    return [
      this.gameObject.transform.position.x - (this.windowSize.x / 2) * this.scale,
      this.gameObject.transform.position.y - (this.windowSize.y / 2) * this.scale,
      this.gameObject.transform.position.x + (this.windowSize.x / 2) * this.scale,
      this.gameObject.transform.position.y + (this.windowSize.y / 2) * this.scale
    ]
  }

  renderToScreen( ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ): void {
    ctx.fillStyle = this.backgroundColour.toString();
    ctx.fillRect(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);

    
  }
}

export { FelixCamera };