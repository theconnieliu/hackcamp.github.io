var player;
var playerImage;

var enemyImage;
var isGameOver;
var enemyArray =[];
var score = 0;

function preload() {
    playerImage = loadImage("TreasureSack.png");
    enemyImage = loadImage("CrystalsWhite.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}
function setup() {
    isGameOver = false;
    createCanvas(500, 500);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    
}
function draw() {
    background(backgroundImage);
    
    if(isGameOver) {
        gameOver();
    }else{
   
    if(keyDown(RIGHT_ARROW) && player.position.x < (width-(playerImage.width/2))){
        player.position.x = player.position.x += 3;
    }
    if(keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)){
        player.position.x = player.position.x -= 3;
    }
    for(var i = 0; i<enemyArray.length; i++){
    enemy= enemyArray[i];
    enemy.position.y = enemy.position.y + 3;

    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5);
    }
    if (enemy.overlap(player)){
        score = score + 1;
        //console.log(score);
        removeSprite(enemy);
    }}}
    textAlign(CENTER);
    fill("white");
    text("Score:" + score, width/2, 30);
    drawSprites();
    console.log(enemyArray.length);
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click Anywhere to Try Again", width/2, 3*height/4);
}

function mouseClicked () {
    if (isGameOver){
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-(playerImage.height/2);
    enemy.position.x = width/2;
    enemy.position.y = 0;
}}

function createEnemy () {
    enemy = createSprite (Math.floor(Math.random()*500), 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 10.0;
    return enemy;
   
}

setInterval(
    function() {
       enemyArray.push(createEnemy());
    }, 1000)

    
 
    