import { Component } from './GameObject/Component';
import { Transform } from './GameObject/Transform';

let randomUUID = (): string => {
  return Math.random().toString().replace('0.', '');
}

class GameObject{
  components: Array<Component>;
  children: Array<GameObject>;
  parent: GameObject | null;
  childrenCount: number = 0;
  name: string;
  id: string;
  transform: Transform;

  constructor( parent: GameObject | null, name?: string ){
    this.transform = new Transform(this);
    this.components = [ this.transform ];
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
    this.childUpdate(1);

    this.children.push(child);
    return child;
  }

  childUpdate( amount: number ): void {
    if(this.parent)
      this.parent.childUpdate( amount );

    this.childrenCount += amount;
  }

  addComponent( component: any ): Component {
    let h = new component()

    this.components.push(h);
    return h;
  }

  remove(): void {
    if(this.parent){
      this.parent.children = this.parent.children.filter(x => x !== this);
      this.childUpdate(-1);
    } else
      throw new Error('Cannot remove a GameObject without a parent');
  }
}

export { GameObject };