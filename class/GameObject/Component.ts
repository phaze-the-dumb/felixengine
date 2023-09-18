import { GameObject } from "../GameObject";

class Component {
  gameObject: GameObject;
  name: string = 'Unkown';
  publicValues: any;
  definePublicValues: any;
  requires: string[] = [];
  render?: ( ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ) => void;

  constructor( go: GameObject ){
    this.gameObject = go;
    this.publicValues = {};
    this.definePublicValues = {};
  }
}

export { Component };