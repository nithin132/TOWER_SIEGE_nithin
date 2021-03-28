const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gamestate=0
function preload(){

}

function setup(){
    var canvas = createCanvas(12000,600);
    engine = Engine.create();
    world = engine.world;
    polygon= new Box(200,500,50,50)
    slingshot1 = new slingshot(polygon.body,{x:200, y:200});
    ground1= new Ground(1090,250,200,10)
    block1= new block(1030,235,30,40)
    block2= new block(1060,235,30,40)
    block3= new block(1090,235,30,40)
    block4= new block(1120,235,30,40)
    block5= new block(1150,235,30,40)
    block6= new block(1060,195,30,40)
    block7= new block(1090,195,30,40)
    block8= new block(1120,195,30,40)
    block9= new block(1090,155,30,40)

    ground2= new Ground(700,425,260,10)
    block10= new block(610,400,30,40)
    block11= new block(640,400,30,40)
    block12= new block(670,400,30,40)
    block13= new block(700,400,30,40)
    block14= new block(730,400,30,40)
    block15= new block(760,400,30,40)
    block16= new block(790,400,30,40)
    //block17= new block(700,400,30,40)
    block17= new block(640,360,30,40)
    block18= new block(670,360,30,40)
    block19= new block(700,360,30,40)
    block20= new block(730,360,30,40)
    block21= new block(760,360,30,40)

    block22= new block(670,320,30,40)
    block23= new block(700,320,30,40)
    block24= new block(730,320,30,40)

    block25= new block(700,280,30,40)

    
}

function draw(){
    background(100)
    Engine.update(engine);
    
    polygon.display();
    slingshot1.display();
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    
}

function mouseDragged(){
    if(gamestate===0){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
   
}



function mouseReleased(){
    slingshot1.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot1.attach(polygon.body)
    }
}