class Bow {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directionX = 0;
        this.directionY = 0;
    }

    draw (c, mouseX, mouseY) {
        let x = mouseX - this.x;
        let y = mouseY - this.y;
        let dist = Math.sqrt((x*x) + (y*y));
        if(dist>0){
        x /= dist;
        y /= dist;
        this.directionX = x;
        this.directionY = y;
        x *= 100;
        y *= 100;
        c.beginPath();
        c.moveTo(this.x,this.y);
        c.lineTo(x + this.x, y + this.y);
        c.stroke();
        }
    }

    shoot(arrow) {
        arrow.fly(this.directionX, this.directionY);
    }
}
