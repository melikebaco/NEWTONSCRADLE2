class Ball{

  constructor(x){

    var options={
        restitution:1,
         friction:1.0,
         density:1
    }
     
  this.ball = Bodies.circle(x,500,30,options);
  this.x = x;
  this.y = 500;
  this.r = 50;

    World.add(world,this.ball)
  }

  display(){
      var pos = this.ball.position;
      push();
      translate(pos.x,pos.y);
      ellipse(0,0,this.r,this.r); 
      pop();
  }
}