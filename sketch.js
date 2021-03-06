const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles =[];
var plinkos =[];
var divisions =[];
var divisionHeight =300;
var score = 0;

function setup(){
    var canvas = createCanvas(1536,715);
    engine = Engine.create();
    world = engine.world;

ground =new Ground(width/2,height,width,30);
for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

}


function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    
    for (var i = 0; i < plinkos.length; i++) {
     
        plinkos[i].display();
        
      }
      if(frameCount%35===0){
        particles.push(new Particle(random(width/2-650, width/2+650), 10,10));
        score++;
      }
    
     for (var j = 0; j < particles.length; j++) {
      
        particles[j].display();
      }
      for (var k = 0; k < divisions.length; k++) {
        
        divisions[k].display();
      }
    
}
