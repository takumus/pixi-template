export const mouse: {x: number, y:number} = {x: 0, y: 0};
export const size: {width: number, height: number} = {width: 0, height: 0};
export const container = new PIXI.Container();
export const canvas = new PIXI.Graphics();

export function init(stage: PIXI.Container) {
    stage.addChild(container);
    container.addChild(canvas);
}
export function update() {
}

export function mousedown() {

}
export function mouseup() {
    
}
export function mousemove() {
    canvas.clear();
    canvas.beginFill(0xff0000);
    canvas.drawRect(mouse.x - 50, mouse.y - 50, 100, 100);
}
export function resize(width: number, height: number) {
}