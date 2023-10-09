import { Component } from "./Component";
import { GameObject } from "../GameObject";

import { Position } from "../Position";
// import { Rotation } from "../Rotation";

class Transform extends Component {
  position: Position;
  scale: Position;
  // rotation: Rotation;

  constructor( go: GameObject ){
    super(go);

    this.name = 'Transform';

    this.position = new Position(0, 0);
    this.scale = new Position(10, 10);
    // this.rotation = new Rotation(0);

    this.definePublicValues = {
      position: 'Position',
      scale: 'Position',
      // rotation: 'Rotation',
    };
  }

  calculatedTransform(): Transform {
    let trans = new Transform(this.gameObject);

    trans.position = this.position;
    trans.scale = this.scale;



    return trans;
  }
}

export { Transform };