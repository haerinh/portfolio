//@author: Hae Rin Hong and Sazma Sarwar

//global instance variables
var thePlayer = new Player("#daceff", 30);
thePlayer.addToGame();
var intervalId;
var startingDiameter = 30;
/**
 * stops the game once thePlayer has won or lost
 * stops the generation of new enemies
 * stops the animation of all current enemies
 * announces the results
 * @param {String} result the result of the game, either won or lost
 */
function stopGame(result) {
  clearInterval(intervalId);
  $(".circle").stop();
  $("#winOrLose").text(result);
}
/**
 * Create an Enemy object, assign a random side to enter the screen through,
 * Adds the Enemy to the page and begins animation
 */
function launchEnemy() {
  var enemy = new Enemy();
  enemy.setSide(random.arrayElt(["bottom", "right", "left", "top"]));
  enemy.addToGame();
  enemy.start();
}
/**
 * Clears the page, generates a new enemy every second
 * Sets up the mouse movement event handler for thePlayer Player object
 */
function startGame() {
  $("#intro").text("");
  intervalId = setInterval(launchEnemy, 1000);
  $(document).on("mousemove", function (evt) {
    thePlayer.move(evt.clientX, evt.clientY);
  });
}
//click handler for "Start Game" button
$("#start").click(startGame);
