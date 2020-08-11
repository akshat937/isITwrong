class Plinko{

    constructor(x,y){

    var options = {
      isStatic : true,
    }
      this.body = Bodies.circle(x,y,10,options);
      World.add(world,this.body)
    }

    display(){
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(CENTER);
      fill(255,255,255);
      ellipse(0,0,10,10); 
    }
}