import { GameObject } from "../GameObject";
import { Component } from "./Component";

class FelixCamera extends Component{
  constructor( go: GameObject ){
    super(go);

    this.name = 'Camera';
  }

  renderToScreen( ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ): void {
    ctx.fillStyle = '#f00';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

export { FelixCamera };