//@author: Hae Rin Hong and Sazma Sarwar

//global variables to help with animation
var minDiameter = 5;
var maxDiameter = window.innerWidth / 4;
var enemyDuration = 5000;
/** Enemy class is the child of Blob, and creates multiple enemy blobs that the Player interacts with. */
class Enemy extends Blob {
  //instance variable to keep track of whether or not an Enemy object has collided with thePlayer
  collided = false;
  /**
   * Constructor for the Enemy class
   * Assigns a random color and size to the Enemy blob
   * updates the size using setDiameter() and setRadius()
   */
  constructor() {
    let randomColor = random.color();
    let randomSize = random.intBetween(0, maxDiameter);
    let randomRadius = randomSize / 2;
    super(randomColor, randomSize);
    this.setDiameter(randomSize);
    this.setRadius(randomRadius);
  }
  /**
   * Invoked when the Enemy and thePlayer intersect.
   * Changes collided to true from false, and invokes Player collide() method.
   */
  collide() {
    this.collided = true;
    thePlayer.collide(this);
  }
  /**
   * updates the X and Y location of the center from the top/left CSS values
   * Invoke before checking for intersection with thePlayer
   */
  updateLocation() {
    this.setX(parseInt($(this.domElement).css("left"), 10) + this.radius);
    this.setY(parseInt($(this.domElement).css("top"), 10) + this.radius);
  }
  /**
   * checks for a collision
   * invoked during the animation of the enemy
   * updates location & calls Enemy.collide() if the Enemy and thePlayer have not collided already
   */
  maybeCollide() {
    this.updateLocation();
    if (!this.collided && this.intersects(thePlayer)) {
      this.collide();
    }
  }
  /**
   * sets the initial X,Y coordinates of the enemy based on its side
   * records the side in the instance var, enemySide
   * @param {String} side the side from which the Enemy enters the screen,
   * can be "top", "bottom", "left","right"
   */
  setSide(side) {
    this.enemySide = side;
    if (side == "top") {
      this.setY(0);
      this.setX(random.intBetween(0, window.innerWidth));
    } else if (side == "bottom") {
      this.setY(window.innerHeight);
      this.setX(random.intBetween(0, window.innerWidth));
    } else if (side == "left") {
      this.setY(random.intBetween(0, window.innerHeight));
      this.setX(0);
    } else if (side == "right") {
      this.setY(random.intBetween(0, window.innerHeight));
      this.setX(window.innerWidth);
    }
  }
  /**
   * stops the animation and removes the enemy from the board
   */
  remove() {
    //stop an ongoing animation using jQuery .stop() method
    this.domElement.stop();
    this.domElement.remove(); //jQuery function to remove the element from the page
  }
  /**
   * starts the jQuery animation of this enemy moving across the board to final X/Y value
   */
  start() {
    const animateOptions = {
      duration: enemyDuration,
      progress: () => {
        this.maybeCollide();
      },
      complete: () => {
        this.remove();
      },
    };
    if (this.enemySide == "top") {
      this.domElement.animate({ top: window.innerHeight }, animateOptions);
    }
    if (this.enemySide == "bottom") {
      this.domElement.animate({ top: 0 }, animateOptions);
    }
    if (this.enemySide == "left") {
      this.domElement.animate({ left: window.innerWidth }, animateOptions);
    }
    if (this.enemySide == "right") {
      this.domElement.animate({ left: 0 }, animateOptions);
    }
  }
}
