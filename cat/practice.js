let img;
let y = 0;
let x = 0;
let a;
const cats = [];

class Cat {
    constructor (x,y){
        this.x = x;
        this.y = y;
    }

    move(){
        this.x = this.x += 50*2;

        if (this.x >= 400 && this.x == windowWidth){
                this.x = 50;
                this.y = this.y += 50;
            } if ( this.x >= windowWidth ) {
                this.x = 0;
                this.y = this.y += 50;
            }
            
        }
    

    

    draw(){
        image(img,this.x,this.y);

    }

}



function preload() {
    
    img = loadImage('cat.png');
    
}

function setup(){
    img.resize(50,50);
    canvas = createCanvas(windowWidth, windowHeight);
}

const cat = new Cat(0,0);
cats.push(cat);

function draw(){
    
    for ( let a of cats){
    a.draw();
    a.move();}

}






