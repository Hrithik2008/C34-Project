class Monster{
    constructor(x,y,width,height){
        var options = {
            density : 1,
            airFriction : 0.3,
            friction:1
        }
        this.image = loadImage("images/monster.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}