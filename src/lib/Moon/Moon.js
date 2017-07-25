export default class Moon {
  constructor(ctx, width, height, isDraw) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.drawMoon = isDraw
  }

  draw() {
    let ctx = this.ctx,
      gradient = ctx.createRadialGradient(
        200, 200, 80, 200, 200, 800)
    //径向渐变
    if(this.drawMoon){
      gradient.addColorStop(0, 'rgb(235,235,235)')
      gradient.addColorStop(0.01, 'rgb(70,70,80)')
      gradient.addColorStop(0.2, 'rgb(40,40,50)')
    }
    gradient.addColorStop(0.4, 'rgb(20,20,30)')
    gradient.addColorStop(1, 'rgb(0,0,10)')
    ctx.save()
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, this.width, this.height)
    ctx.restore()
  }
}