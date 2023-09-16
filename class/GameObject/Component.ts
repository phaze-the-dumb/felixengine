import { GameObject } from "../GameObject";

class Component {
  gameObject: GameObject;
  name: string = 'Unkown';
  publicValues: any;
  definePublicValues: any;

  constructor( go: GameObject ){
    this.gameObject = go;
    this.publicValues = {};
    this.definePublicValues = {};
  }
}

export { Component };