var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;
var isGameOver;

function preload() {
    enemyImage = loadImage("Bee.png");
    backgroundImage = loadImage("honeycomb.jpg");
}
function setup() {
    createCanvas(500, 250);
    player = createSprite(25, height - 25, 50, 50);
    enemy = createSprite(width - 10, height - enemyImage/2, 0, 0);
    enemy.addImage(enemyImage);
    isGameOver = false;
}

function draw() {
    background(backgroundImage);
    if (isGameOver) {
        gameOver();
    }
    else {
        if (keyDown(RIGHT_ARROW) && player.position.x < (width - 25)) {
            player.position.x = player.position.x + 3;
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 25) {
            player.position.x = player.position.x - 3;
        }
        if (keyDown(38)) {
            player.position.y = player.position.y - 8;
        }
        if (keyDown(40)) {
            player.position.y = player.position.y + 8;
        }
        enemy.position.x = enemy.position.x - 8;
        if (enemy.position.x < 0) {
            enemy.position.x = width - 5;
            enemy.position.y = random(5, width - 10);
        }

        if (enemy.overlap(player)) {
            isGameOver = true;
        }
    }
    drawSprites();
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width / 2, height / 3);
    text("That's what you get for having good hair", width/2, height/2)
}
