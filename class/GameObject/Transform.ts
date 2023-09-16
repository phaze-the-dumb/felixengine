import { Component } from "./Component";
import { GameObject } from "../GameObject";

import { Position } from "../Position";
import { Rotation } from "../Rotation";

class Transform extends Component {
  constructor( go: GameObject ){
    super(go);

    this.name = 'Transform';

    this.definePublicValues = {
      position: Position,
      rotation: Rotation
    };
  }
}

export { Transform };