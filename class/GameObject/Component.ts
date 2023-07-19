import { GameObject } from "../GameObject";

class Component {
  gameObject: GameObject;
  name: string = 'Unkown';
  colour: string = '#ffc3c3';

  constructor( go: GameObject ){
    this.gameObject = go;
  }
}

export { Component };