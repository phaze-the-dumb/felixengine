import { FelixCamera } from './GameObject/FelixCamera';

class RenderObject{
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  camera: FelixCamera | null;

  constructor(){
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d")!;

    this.camera = null;
  }

  mount( element: HTMLElement ): void {
    element.appendChild( this.canvas );
  
    window.addEventListener('resize', () => {
      let bounds = element.getBoundingClientRect();

      this.canvas.width = bounds.width;
      this.canvas.height = bounds.height;

      this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    })

    setTimeout(() => {
      let bounds = element.getBoundingClientRect();

      this.canvas.width = bounds.width;
      this.canvas.height = bounds.height;

      this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    }, 10);
  }

  render(){
    let ctx = this.ctx;
    ctx.clearRect(this.canvas.width / -2, this.canvas.height / -2, this.canvas.width, this.canvas.height);

    if(this.camera)
      this.camera.renderToScreen(ctx, this.canvas);
    else {
      ctx.fillStyle = '#000';
      ctx.fillRect(this.canvas.width / -2, this.canvas.height / -2, this.canvas.width, this.canvas.height);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '50px Arial';
      ctx.fillStyle = '#fff';

      ctx.fillText('No Cameras Rendering.', 0, 0);
    }
  }
}

export { RenderObject };