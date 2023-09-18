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

<<<<<<< HEAD
=======
    if(this.gameObject.scene)
      this.gameObject.scene.renderers.push(this.gameObject);

>>>>>>> a33e46b9b7c0bccbd225b90ed6ccbc9887fcd037
    this.render = ( ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ) => {
      
    }
  }
}

export { Sprite };