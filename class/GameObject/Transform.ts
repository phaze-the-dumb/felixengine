import { Component } from "./Component";
import { GameObject } from "../GameObject";

import { Position } from "../Position";
import { Rotation } from "../Rotation";

class Transform extends Component {
  position: Position;
  rotation: Rotation;

  constructor( go: GameObject ){
    super(go);

    this.name = 'Transform';

    this.position = new Position(0, 0);
    this.rotation = new Rotation(0);

    this.definePublicValues = {
      position: 'Position',
      rotation: 'Rotation'
    };
  }
}

export { Transform };