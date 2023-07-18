import { EventEmitter } from "../base/EventEmitter";
import { Component } from './GameObject/Component';

let randomUUID = (): string => {
  return Math.random().toString().replace('0.', '');
}

class GameObject extends EventEmitter{
  components: Array<Component>;
  children: Array<GameObject>;
  parent: GameObject | null;
  name: string;
  id: string;

  constructor( parent: GameObject | null, name?: string ){
    super();

    this.components = [];
    this.children = [];
    this.parent = parent;
    this.name = name || 'Empty GameObject';

    if(this.parent)
      this.id = this.parent.id + '-' + randomUUID();
    else
      this.id = randomUUID();
  }

  createEmptyChild( name: string ): GameObject {
    let child = new GameObject( this, name );

    this.children.push(child);
    return child;
  }

  remove(): void {
    if(this.parent)
      this.parent.children = this.parent.children.filter(x => x !== this);
    else
      throw new Error('Cannot remove a GameObject without a parent');
  }
}

export { GameObject };