
var wall, bullet;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
 
  bullet = createSprite(50,200,50,50);
  
  thickness = random(22,55);
  thickness = Math.round(thickness);
  speed = random(22,55);
  speed = Math.round(speed);
  weight = random(30,52);
  weight = Math.round(weight);
 
}

function draw() {
  background(255,255,255); 
 
bullet.velocityX = speed;
//text(thickness,800,50);
//text(weight,800,100);
//text(speed,800,150);


  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    damage = Math.round(damage);
    //text(damage,800,200);

    if(damage < 0.5){
      //("1",800,175);
      wall.shapeColor = color(0,225,0);
    }

    if(damage > 0.5){
      //text("2",800,125);
      wall.shapeColor = color(255,0,0);
    }
  }
 
   drawSprites();

}


function hasCollided(lbullet,lwall ){

  var bulletRightEdge=lbullet.x + lbullet.width;
 var  wallLeftEdge = lwall.x;


  if(bulletRightEdge>= wallLeftEdge){
    return true;
  } 


    return false;
  }
