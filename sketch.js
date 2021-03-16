const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body,
  Constraint = Matter.Constraint;

var bg,engine,world,ground,hero_img,hero,sling,blocks=[],monster;

function preload() {
  bg = loadImage("images/bg.png");
  hero_img = loadImage("images/hero.png")
}

function setup() {
  createCanvas(1500, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2-300,height-100,width-300,10);
  hero = new Hero(200,300,160,160);
  sling = new Fly(hero.body,{x:300,y:100});
  for(var i = 0; i < 7;i++){
    blocks[i] = new Block(600,200,50,50);
    blocks[i+7] = new Block(700,200,50,50);
    blocks[i+14] = new Block(800,200,50,50);
  }
  blocks.shift();
  blocks.splice(6,2);
  monster = new Monster(950,300,200,200);
}

function draw() {
  Engine.update(engine);

  background(bg);

  ground.display();
  hero.display();
  sling.display();
    for(var i = 0; i < 18;i++){
      blocks[i].display();
    }
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}