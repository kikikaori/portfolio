
/**
 * グルーバル変数
 */
let img;
let mySound;
const cats = [];

/**
 * クラス定義
 */
class Cat {
    constructor(x, y,a) {
        //上のカッコで定義したらクラスを呼び出すとき（①）で定義しなきゃいけない
        this.x = x;
        this.y = y;
        this._x = random(-10, 10);
        this._y = random(-10, 10);
        this.a = a;
        this.w = random(50,150);
        this.h = random(50,150);
    }
    move() {
        this.x = this.x + this._x;
        this.y = this.y + this._y;
        
    }
    draw() {
        imageMode(CENTER);//画像の起点をセンター？
        image(img, this.x, this.y, this.w, this.h);
        
    }
}

/**
 * p5jsの関数
 */
function preload() {
    img = loadImage('cat.png');
    mySound = loadSound('cat1.mp3');
}


function mousePressed() {
    const cat = new Cat(width / 2, height / 2, 0.1);//①　描写をセンター
    cats.push(cat);
    mySound.play();
}

function setup() {
    canvas = createCanvas(400, 400);
}

function draw() {
    background(255);
    for (let a of cats) {
        a.move();
        a.draw();
        
    }
}

