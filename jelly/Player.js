//@author Hae Rin Hong and Sazma Sarwar

var winningDiameter = window.innerHeight / 2; // bigger than this wins
var losingDiameter = 5; // smaller than this loses
var growDiameter = 20; // grow by this many pixels
var shrinkDiameter = 5; // shrink by this many pixels
/**
 * The Player class is a child class of Blob and represents the player of the game.
 */
class Player extends Blob {
  /**
   * Constructor of the Player class
   * @param {String} color the color of the Player blob
   * @param {Number} diameter the diameter of the Player blob
   */
  constructor(color, diameter) {
    super(color, diameter);
  }
  /**
   * Updates the location of the Player blob using parent methods, setX() and setY()
   * @param {Number} xLoc x-coordinate position of the Player object
   * @param {Number} yLoc y-coordinate position of the Player object
   */
  move(xLoc, yLoc) {
    this.setX(xLoc);
    this.setY(yLoc);
  }
  /**
   * Increases the diameter of the Player blob by 20 (growDiameter)
   * Calls on setDiameter() to update variables and CSS
   * Ceiling on growth at winningDiameter -- game ends
   */
  grow() {
    this.diameter += growDiameter;
    this.setDiameter(this.diameter);
    // $(thePlayer).css("width", this.diameter);
    // $(thePlayer).css("height", this.diameter);
    if (this.getDiameter() >= winningDiameter) {
      stopGame("You win!");
    }
  }
  /**
   * Decreases the diameter of the Player blob by 5 (shrinkDiameter)
   * Calls on setDiameter() to update variables and CSS
   * Minimum is losingDiameter -- game ends
   */
  shrink() {
    this.diameter -= shrinkDiameter;
    this.setDiameter(this.diameter);
    // $(thePlayer).css("width", this.diameter);
    // $(thePlayer).css("height", this.diameter);
    if (this.getDiameter() < losingDiameter) {
      stopGame("Booo, you've lost.");
    }
  }
  /**
   * Compares size of thePlayer to size of Enemy blob
   * Grows the Player blob if the Enemy blob is smaller
   * Otherwise, shrinks the Player blob.
   * @param {Blob} enemy an Enemy Blob object
   */
  collide(enemy) {
    if (this.diameter >= enemy.getDiameter()) {
      this.grow();
      enemy.remove();
    } else {
      this.shrink();
    }
  }
}
