import { GameObject } from "./class/GameObject";

class FelixScene extends GameObject{
  constructor(){
    super(null, 'New Scene');
  }

  findChildInScene( childId: string ){
    let ids = childId.split('-');
    let lastGO: GameObject = this;

    for(let i = 1; i < ids.length; i++){
      let go = lastGO.children.find(x => x.id.endsWith(ids[i]));

      if(!go)
        return null;

      lastGO = go;
    }

    return lastGO;
  }
}

export { FelixScene };