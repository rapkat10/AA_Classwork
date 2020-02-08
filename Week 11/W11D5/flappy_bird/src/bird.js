export default class Bird {
    
    constructor(dimensions){
        this.dimensions = dimensions;
        this.velocity = 0;
        this.x = this.dimensions.width / 3;
        this.y = this.dimensions.height / 2;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 40, 30);
    }

    animate (){
        this.drawBird(ctx);
    }

}