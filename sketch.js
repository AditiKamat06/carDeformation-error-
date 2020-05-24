var car,wall,speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
}

function draw() {
  background(0);
  car=createSprite(50,200,40,20);
  car.velocity=speed;
  car.shapeColor=(0,255,0);
  wall=createSprite(1500,20,60,height/2);
  wall.shapeColor=(80,80,80);
  
  if ( wall.x - car.x < (wall.width + car.width)/2 ){
      car.velocityX=0;
      var deformation=0.5 * speed * speed * weight / 22500;

      if (deformation<=99){
        car.shapeColor=(0,255,0);
      }

      if (deformation >= 100 && deformation<= 180){
        car.shapeColor=(230,230,0);
      }

      if (deformation > 180){
        car.shapeColor=(255,0,0);
      }
  }
  drawSprites();
}