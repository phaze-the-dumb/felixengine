import Colour from "../Colour";
import { GameObject } from "../GameObject";
import { Component } from "./Component";

class FelixCamera extends Component{
  backgroundColour: Colour;

  constructor( go: GameObject ){
    super(go);

    this.name = 'Camera';
    this.backgroundColour = Colour.getBlack();

    this.definePublicValues['backgroundColour'] = 'Colour';
  }

  renderToScreen( ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ): void {
    ctx.fillStyle = this.backgroundColour.toString();
    ctx.fillRect(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);
  }
}

export { FelixCamera };