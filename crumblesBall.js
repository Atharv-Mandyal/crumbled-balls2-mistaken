class Ball extends BaseClass{
  constructor(x,y){
   
    this.image = loadImage("sprites/Ball.jpg");
  }
  display(){

    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
   
  }
}