import { Component } from "./Component";
import { GameObject } from "../GameObject";

class Transform extends Component {
  constructor( go: GameObject ){
    super(go);

    this.name = 'Transform';
    this.colour = '#ffc3c3';
  }
}

export { Transform };