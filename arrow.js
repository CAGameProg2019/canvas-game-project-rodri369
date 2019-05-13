class Arrow {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.velocityX = 0;
        this.velocityY = 0;
        this.flown = false;
        this.radius = 5;
    }

    draw(c){
        this.x += this.velocityX;
        this.y += this.velocityY;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        c.closePath();
        c.fill();
        if (this.flown) this.velocityY += 0.32;
    }


    fly(directionX, directionY) {
        if(this.flown == false){
        this.velocityX = directionX * 20;
        this.velocityY = directionY * 20    ;
        this.flown = true;
    }
    }
}
