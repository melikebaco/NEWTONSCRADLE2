class Chain{
    constructor(bodyA,bodyB,offsetX){
        var options={
            bodyA :bodyA,
            bodyB : bodyB,
            pointB:{x:offsetX,y:0}
        }
        this.xoffset = offsetX;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y)
        pop();
    
}
}