const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  options = {
    isStatic:true
  }
  
  playerBase = Bodies.rectangle(200,350,180,150,options)
  World.add(world,playerBase)
  

  //create player body
  
  palyer = Bodies.rectangle(250,playerBase.position.y - 160 , 50,180,options)
  World.add(world,palyer)
 
  playerArcher = new Archer(340,playerBase.position.y-90,120,120)

  arrow = new Arrow(playerArcher.body.position.x,playerArcher.body.position.y,100,10)
  
  
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage,palyer.position.x,palyer.position.y,50,180)

  //show the playerbase image using image() function
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)


  Engine.update(engine);
  
  playerArcher.display()

  arrow.display()

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
 
  

}
