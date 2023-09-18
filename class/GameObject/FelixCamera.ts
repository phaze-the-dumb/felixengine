import Colour from "../Colour";
import { GameObject } from "../GameObject";
import { Component } from "./Component";

class FelixCamera extends Component{
  backgroundColour: Colour = Colour.getBlack();
  scale: number = 1;

  constructor( go: GameObject ){
    super(go);

    this.name = 'Camera';

    this.definePublicValues['backgroundColour'] = 'Colour';
    this.definePublicValues['scale'] = 'Number';
  }

  renderToScreen( ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ): void {
    // let rect: number[] = this.gameObject.getComponent<BoundingBox>(BoundingBox).getRect();

    // ctx.strokeStyle = '#00ffcc';
    // ctx.strokeRect(rect[0], rect[1], rect[2] - rect[0], rect[3] - rect[1]);

    ctx.fillStyle = this.backgroundColour.toString();
    ctx.fillRect(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);
  }
}

export { FelixCamera };