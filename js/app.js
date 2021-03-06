// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //dt varibale appendded in engine
    this.x = this.x + this.speed * dt;
    // make enemies loop to left side of canvas after reaching canvas.width
    if (this.x >= 505) {
        this.x = 0;
    }

    this.checkCollision();

};

var COLLISION_MARGIN = 75;

Enemy.prototype.checkCollision = function() {

    if (Math.abs(this.x - player.x) < COLLISION_MARGIN &&

        Math.abs(this.y - player.y) < COLLISION_MARGIN / 2) {
        // crash if Enemy touch player
        player.reset();

    }
}


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;


};
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.dt = 150;

    if (this.y < 0) {
        this.reset();

    }

};
Player.prototype.handleInput = function(direction) {

    if (direction === 'left' && this.x > 0) {
        this.x = this.x - 101;
    }
    if (direction === 'up' && this.y > 0) {
        this.y = this.y - 83;
    }
    if (direction === 'right' && this.x < 400) {
        this.x = this.x + 101;
    }
    if (direction === 'down' && this.y < 400) {
        this.y = this.y + 83;
    }
    console.log('direction is: ' + direction);
};
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.reset = function() {
    this.x = 202; //width
    this.y = 400; //high
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
player = new Player(202, 400); // player location  in x,y = 505*606
var allEnemies = [];
allEnemies[0] = new Enemy(0, 70, 50);
allEnemies[1] = new Enemy(0, 140, 100);
allEnemies[2] = new Enemy(0, 220, 200);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
