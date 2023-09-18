import Colour from "../Colour";
import { GameObject } from "../GameObject";
import { Component } from "./Component";
import { BoundingBox } from "./Bounding";
import { Transform } from "./Transform";

class FelixCamera extends Component{
  backgroundColour: Colour = Colour.getBlack();
  scale: number = 10;
  windowSize: { x: number, y: number } = {
    x: 0,
    y: 0
  };

  constructor( go: GameObject ){
    super(go);

    this.gameObject.addComponent<BoundingBox>(BoundingBox);
    this.requires.push("Bounding Box");

    this.name = 'Camera';

    this.definePublicValues['backgroundColour'] = 'Colour';
    this.definePublicValues['scale'] = 'Number';
  }

  worldToScreenSpaceBounding( transform: Transform ): number[] {
    return [
      (transform.position.x - (transform.scale.x / 2) - this.gameObject.transform.position.x) * this.scale,
      (transform.position.y - (transform.scale.y / 2) - this.gameObject.transform.position.y) * this.scale,
      transform.scale.x * this.scale,
      transform.scale.y * this.scale
    ]
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
    this.windowSize = {
      x: canvas.width,
      y: canvas.height
    }

    ctx.fillStyle = this.backgroundColour.toString();
    ctx.fillRect(canvas.width / -2, canvas.height / -2, canvas.width, canvas.height);

    if(!this.gameObject.scene)
      throw new Error("Cannot render without a scene");

    let renderables = this.gameObject.scene.renderers;

    for(let go of renderables) {
      for(let component of go.renderables){
        if(component.render){
          let boundingBox = component.gameObject.getComponent<BoundingBox>(BoundingBox);
          if(!boundingBox)
            continue;

          if(boundingBox.inScreen(this))
            component.render(ctx, canvas, this);
        }
      }
    }
  }
}

export { FelixCamera };