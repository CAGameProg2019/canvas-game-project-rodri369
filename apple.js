class Apple {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = 10;
    }


    draw(c){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        c.closePath();
        c.fill();
    }
    dist(arrow){
        let x = arrow.x - this.x;
        let y= arrow.y - this.y;
        return Math.sqrt(x*x + y*y);
    }
    intersects(arrow) {
        let distance = this.dist(arrow);
        if(distance <= this.radius + arrow.radius){
            return true;
        }
        return false;
    }
}
