//@author Hae Rin Hong and Sazma Sarwar

/** provided function that checks for the correct type of value */
function ok(val) {
  if (typeof val === "undefined") {
    throw new Error("value not defined");
  } else {
    return val;
  }
}
/** Blob class creates a blob that can be either an Enemy or a Player */
class Blob {
  //instant variables with default values
  color = "lavender";
  diameter = 2;
  radius = 1;
  xLoc = 0; //x coordinate
  yLoc = 0; //y coordinate
  domElement;
  /**
   * constructs a HTML element that is a div and assigns its a color and diameter
   * @param {String} color the color of the Blob
   * @param {Number} diameter the diameter of the Blob (a circle)
   */
  constructor(color, diameter) {
    this.color = color;
    this.diameter = diameter;
    this.setDOM();
    this.setColor(color);
    this.setDiameter(diameter);
  }
  /**
   * appends the circle div element, Blob, to the page
   */
  addToGame() {
    $("body").append(this.domElement);
  }
  /**
   * initializes the domElement variable by creating a div element of class circle
   */
  setDOM() {
    this.domElement = $("<div>", { class: "circle" });
  }
  /**
   * sets instance variable, color,
   * uses jQuery css function to assign that color to the element
   * @param {String} color the color of the Blob
   */
  setColor(color) {
    this.color = color;
    $(this.domElement).css("background-color", this.color);
  }
  /**
   * sets the diameter, updates the radius to be half of the diameter,
   * sets the css of the domElement so the width and height are equal to the diameter
   * updates the left and top positioning of the domElement using the x and y coordinates
   * @param {Number} diameter the diameter of the Blob
   */
  setDiameter(diameter) {
    this.diameter = diameter;
    var radius = diameter / 2;
    this.radius = radius;
    $(this.domElement).css("width", this.diameter);
    $(this.domElement).css("height", this.diameter);
    $(this.domElement).css("left", this.xLoc - this.radius);
    $(this.domElement).css("top", this.yLoc - this.radius);
  }
  /**
   * sets the radius, using the setDiameter method
   * @param {Number} radius the radius of the Blob
   */
  setRadius(radius) {
    this.setDiameter(radius * 2);
  }
  /**
   * returns the domElement
   * @returns domElement Blob
   */
  getDOM() {
    return this.domElement;
  }
  /**
   * @returns diameter the diameter of the Blob
   */
  getDiameter() {
    return this.diameter;
  }
  /**
   * @returns radius the radius of the Blob
   */
  getRadius() {
    return this.radius;
  }
  /**
   * @returns color the color of the Blob
   */
  getColor() {
    return this.color;
  }
  /**
   * @returns xLoc the x-coordinate of the Blob
   */
  getX() {
    return this.xLoc;
  }
  /**
   * @returns yLoc the y-coordinate of the Blob
   */
  getY() {
    return this.yLoc;
  }
  /**
   * updates the xLoc instance variable, given the x-coordinate of the Blob
   * updates the left positioning in CSS
   * @param {Number} xLoc the x-coordinate of the Blob
   */
  setX(xLoc) {
    this.xLoc = ok(xLoc);
    $(this.domElement).css("left", this.xLoc - this.radius);
  }
  /**
   * updates the yLoc instance variable, given the y-coordinate of the Blob
   * updates the top positioning in CSS
   * @param {Number} yLoc the y-coordinate of the Blob
   */
  setY(yLoc) {
    this.yLoc = ok(yLoc);
    $(this.domElement).css("top", this.yLoc - this.radius);
  }
  /**
   *
   * @param {Blob} other
   * @returns boolean isCloser if the two Blob object intersect
   */
  intersects(other) {
    // four uses of the 'ok' function to make sure all values are defined
    var dx = ok(this.getX()) - ok(other.getX());
    var dy = ok(this.getY()) - ok(other.getY());
    var distance_squared = dx * dx + dy * dy;

    var r1 = this.getRadius();
    var r2 = other.getRadius();
    var rsum = r1 + r2;
    var isCloser = distance_squared <= rsum * rsum;
    return isCloser;
  }
}
