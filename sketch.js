const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
//var div1;
var div1 = [];
var plin = [];
var part = [];
var divHeight = 300;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,790,800,20);
    //ground1 = new Ground(790,400,20,800);
    //ground2 = new Ground(10,400,20,800);

   

   for(var k = 0; k<= width; k= k + 80){
       div1.push(new Divisions(k, 700,10,divHeight));
   }


   for(i = 20; i <= 760; i = i + 50){
       plin.push(new Plinko(i,100,10));
   }

   for(a = 50; a <= 700; a = a + 50){
    plin.push(new Plinko(a,200,10));
    }

    for(b = 20; b <= 760; b = b + 50){
        plin.push(new Plinko(b,300,10));
    }


    for(c = 50; c <= 700; c = c + 50){
        plin.push(new Plinko(c,400,10));
    }


    for(d = 20; d <= 760; d = d + 50){
        plin.push(new Plinko(d,500,10));
    }

    /*for(b = 0; b <= 700; b = b + 50){
        plin.push(new Plinko(a,300,10));
    }*/

   


   
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    
    



    ground.display();
    //ground1.display();
    //ground2.display();


    for (var k = 0; k < div1.length; k++){
        div1[k].display();
    }

    for (var i = 0; i < plin.length; i++){
        plin[i].display();
    }

    for (var a = 0; a < plin.length; a++){
        plin[a].display();
    }

    for (var b = 0; b < plin.length; b++){
        plin[b].display();
    }

    for (var c = 0; c < plin.length; c++){
        plin[c].display();
    }

    for (var d = 0; d < plin.length; d++){
        plin[d].display();
    }
    
    if(frameCount % 60 === 0){
        part.push(new Particle(random(20,700),10,10));
    }

    for(var e = 0;e < part.length; e++){
        part[e].display();
    }

    //div1.display();


}

