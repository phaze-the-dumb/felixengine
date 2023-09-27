import { GameObject } from "../GameObject";
import { FelixCamera } from "./FelixCamera";

class Component {
  gameObject: GameObject;
  name: string = 'Unkown';
  publicValues: any;
  definePublicValues: any;
  requires: string[] = [];
  renderableLayer: string = 'normal';
  render?: ( ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, camera: FelixCamera ) => void;

  constructor( go: GameObject ){
    this.gameObject = go;
    this.publicValues = {};
    this.definePublicValues = {};
  }
}

export { Component };