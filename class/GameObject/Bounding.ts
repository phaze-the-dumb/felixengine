import { Component } from "./Component";
import { GameObject } from "../GameObject";

import { Position } from "../Position";
import { FelixCamera } from "./FelixCamera";

class BoundingBox extends Component {
  position: Position;
  scale: Position;

  constructor( go: GameObject ){
    super(go);

    this.name = 'Bounding Box';

    this.position = new Position(0, 0);
    this.scale = new Position(1, 1);

    this.definePublicValues = {
      position: 'Position',
      scale: 'Position'
    };
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