import { Component } from "./Component";
import { GameObject } from "../GameObject";
import { BoundingBox } from "./Bounding";
import { FelixCamera } from "./FelixCamera";

class Sprite extends Component {
  constructor( go: GameObject ){
    super(go);

    this.gameObject.addComponent<BoundingBox>(BoundingBox);
    this.requires.push("Bounding Box");

    this.gameObject.renderables.push(this);
    this.name = 'Sprite';

    if(this.gameObject.scene)
      this.gameObject.scene.renderers.push(this.gameObject);

    this.render = ( ctx: CanvasRenderingContext2D, _canvas: HTMLCanvasElement, camera: FelixCamera ) => {
      let rect = camera.worldToScreenSpaceBounding(this.gameObject.transform);

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(rect[0], rect[1], rect[2], rect[3]);
    }
  }
}

export { Sprite };