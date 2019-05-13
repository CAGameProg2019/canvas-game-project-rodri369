let canvas = document.getElementById('main');
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let mpos_x, mpos_y;
let bow;
let arrow;
let apple;
let person;
let count;


function init() {
    bow = new Bow(canvas.width*(0.7), canvas.height*(0.71));
    arrow = new Arrow(bow.x, bow.y);
    apple = new Apple(canvas.width*(7/8), canvas.height * (2/3));
    person = new Person(apple.x, apple.y+apple.radius);
    count = 0;
    document.getElementById("p1").innerHTML = "Count:" + count;


    update();
}

function update() {
    c.clearRect(0,0,canvas.width, canvas.height);

    if(apple.intersects(arrow)){
        alert("you win");
        c.clearRect(0,0,canvas.width,canvas.height);
        bow = new Bow(bow.x-40, bow.y+10);
        arrow = new Arrow(bow.x,bow.y);
        count ++;
        document.getElementById("p1").innerHTML = "Count:" + count;
        requestAnimationFrame(update);
    }else if(person.intersects(arrow)){
        alert("you lose");
        c.clearRect(0,0,canvas.width,canvas.height);
        bow = new Bow(canvas.width*(0.7), canvas.height*(0.71));
        arrow = new Arrow(bow.x,bow.y);
        count = 0;
        document.getElementById("p1").innerHTML = "Count:" + count;
        requestAnimationFrame(update);
    } else if(arrow.x>person.x + person.radius *3){
        alert("you lose");
        c.clearRect(0,0,canvas.width,canvas.height);
        bow = new Bow(canvas.width*(0.7), canvas.height*(0.71));
        arrow = new Arrow(bow.x,bow.y);
        count = 0;
        document.getElementById("p1").innerHTML = "Count:" + count;
        requestAnimationFrame(update);

    }else{
        requestAnimationFrame(update);
    }
    bow.draw(c, mpos_x, mpos_y);
    arrow.draw(c);
    apple.draw(c);
    person.draw(c);

}

window.addEventListener('load', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

window.addEventListener('mousemove', function(event){
    mpos_x = event.clientX - canvas.offsetLeft;
    mpos_y = event.clientY - canvas.offsetTop;
})

window.addEventListener('mousedown', function(event) {
    bow.shoot(arrow);
})
