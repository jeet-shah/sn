var snake,bug;

function setup() {
  createCanvas(800,800);
  snake = createSprite(400, 400, 20, 50);
  bug = createSprite(100,300,20,20);
}

function draw() {
  background(0);
  if (keyIsDown(UP_ARROW)){
    snake.velocityY=-3;
    snake.velocityX=0;        
  }  
  if (keyIsDown(DOWN_ARROW)){
    snake.velocityY=3;
    snake.velocityX=0;
  }
  if (keyIsDown(LEFT_ARROW)){
    snake.velocityX=-3;
    snake.velocityY=0;
  }
  if (keyIsDown(RIGHT_ARROW)){
    snake.velocityX=3;
    snake.velocityY=0;
  }
  if (snake.isTouching(bug)===true){
    bug.destroy();
    snake.height=snake.height+5;
  }
  drawSprites();
}