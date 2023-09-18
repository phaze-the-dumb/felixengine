import { Component } from "./Component";
import { GameObject } from "../GameObject";
import { BoundingBox } from "./Bounding";

class Sprite extends Component {
  constructor( go: GameObject ){
    super(go);

    this.gameObject.addComponent<BoundingBox>(BoundingBox);
    this.requires.push("Bounding Box");

    this.gameObject.renderables.push(this);
    this.name = 'Sprite';

    this.definePublicValues = {

    };

    this.render = ( ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ) => {

    }
  }
}

export { Sprite };