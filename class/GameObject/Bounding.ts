import { Component } from "./Component";
import { GameObject } from "../GameObject";

import { Position } from "../Position";
import { FelixCamera } from "./FelixCamera";
import { Transform } from "./Transform";

class BoundingBox extends Component {
  position: Position;
  scale: Position;

  constructor( go: GameObject ){
    super(go);

    this.gameObject.renderables.push(this);
    this.name = 'Bounding Box';

    this.position = new Position(0, 0);
    this.scale = new Position(1, 1);

    this.definePublicValues = {
      position: 'Position',
      scale: 'Position'
    };
  }

  displayBox( display: boolean ){
    if(display){
      this.render = ( ctx: CanvasRenderingContext2D, _canvas: HTMLCanvasElement, camera: FelixCamera ) => {
        let boxTransform = new Transform(this.gameObject);

        boxTransform.position.x = this.gameObject.transform.position.x + this.position.x;
        boxTransform.position.y = this.gameObject.transform.position.y + this.position.y;
        boxTransform.scale.x = this.gameObject.transform.scale.x * this.scale.x;
        boxTransform.scale.y = this.gameObject.transform.scale.y * this.scale.y;

        let rect = camera.worldToScreenSpaceBounding(boxTransform);

        ctx.strokeStyle = '#00ffcc';
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3]);
      }
    } else
      this.render = () => {};
  }

  getRect(): number[] {
    return [
      (this.gameObject.transform.position.x + this.position.x) - (this.scale.x / 2 * this.gameObject.transform.scale.x),
      (this.gameObject.transform.position.y + this.position.y) - (this.scale.y / 2 * this.gameObject.transform.scale.y),
      (this.gameObject.transform.position.x + this.position.x) + (this.scale.x / 2 * this.gameObject.transform.scale.x),
      (this.gameObject.transform.position.y + this.position.y) + (this.scale.y / 2 * this.gameObject.transform.scale.y)
    ]
  }

  inScreen( camera: FelixCamera ): boolean {
    let thisRect = this.getRect();
    let cameraRect = camera.getRect();

    console.log(
      cameraRect[0] < thisRect[2] &&
      cameraRect[1] < thisRect[3] &&
      cameraRect[2] > thisRect[0] &&
      cameraRect[3] > thisRect[1]
    )

    if(
      cameraRect[0] < thisRect[2] &&
      cameraRect[1] < thisRect[3] &&
      cameraRect[2] > thisRect[0] &&
      cameraRect[3] > thisRect[1]
    )
      return true;
    else
      return false;
  }
}

export { BoundingBox };