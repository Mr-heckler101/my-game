var bg,backgroundimg,ground
var wolf
var invisibleGround        
function preload(){
backgroundimg = loadImage("bg.jpg")
tree_img1 = loadImage("tree1.png")
tree_img2 = loadImage("tree2.png")
tree_img3 = loadImage("tree3.png")
tree_img4 = loadImage("tree4.png")
boy_running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
boy_attack = loadAnimation("boy_attack.png")
lion_runing = loadAnimation("animal2.png","animal3.png","animal4.png")
wolf = loadAnimation("animal1.png");
}
function setup() {
  createCanvas(800,600);
  bg = createSprite(400, 300, 50, 50);
  bg.addImage(backgroundimg)

  boy = createSprite(60,460)
  boy.addAnimation("running", boy_running);
  boy.addAnimation("attack", boy_attack);
  boy.scale = 1

  invisibleGround = createSprite(200,550,500,10);
 
}
    
    


function draw() {
  background("white");
  console.log(boy.y)
  bg.velocityX = -4;
  if(bg.x <300){;
  bg.x = 400;
  }

  animalGroup = new Group();
  treeGroup = new Group();

  if(keyDown("up")&& boy.y >= 496) {
    boy.velocityY = -14;
  }

  boy.velocityY = boy.velocityY+0.5
  boy.collide(invisibleGround);
  invisibleGround.visible = false;
   if(keyWentDown ("space")){
    boy.changeAnimation("attack", boy_attack);
   }
   if(keyWentUp ("space")){
    boy.changeAnimation("running", boy_running);
   }

   if(boy.isTouching(animalGroup)&&keyWentDown("space")){
   animalGroup.destoryEach()
   }

  spawnAnimal();
  spawntree();
  drawSprites();
}

function spawnAnimal(){
  if (frameCount % 100 === 0){
    animal = createSprite(800,500)
    animal.velocityX = -4
    var rand = Math.round(random(1,2));
    switch(rand){
    case 1 : animal.addAnimation("wolfImage",wolf);
    animal.scale = 0.5
    break

    case 2 : animal.addAnimation("lion", lion_runing);
    animal.scale = 1.5
    break
    }
    animal.lifetime = 300;
   
    animalGroup.add(animal);
 }
}

function spawntree(){
if(frameCount % 90 === 0){
tree = createSprite(800,400)
tree.velocityX = -5
var rand = Math.round(random(1,4));
switch(rand){
  case 1 : tree.addImage(tree_img1);
  break

  case 2 : tree.addImage(tree_img2);
  break

  case 3 : tree.addImage(tree_img3);
  break

  case 4 : tree.addImage(tree_img4);
  break
  }
tree.scale = 2
tree.lifetime = 500;

treeGroup.add(tree);
}
}
