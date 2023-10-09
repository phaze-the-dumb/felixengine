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
    this.scale = new Position(1, 1);
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

    if(this.gameObject.parent){
      let parentTransform = this.gameObject.parent.transform.calculatedTransform();

      trans.position.x += parentTransform.position.x;
      trans.position.y += parentTransform.position.y;
      trans.scale.x *= parentTransform.scale.x;
      trans.scale.y *= parentTransform.scale.y;
    }

    return trans;
  }
}

export { Transform };