class Fly{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 200,
            stiffness : 1
        }
        this.constraint = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.constraint);
    }
    display(){
        if(this.constraint.bodyA){
        push();
        var posA = this.constraint.bodyA.position;
        stroke(255);
        strokeWeight(0);
        line(posA.x,posA.y,this.pointB.x,this.pointB.y);
        pop();
        }
    }
}