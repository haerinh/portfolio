// author: Hae Rin Hong

questions.forEach(function (elt, index) {
  var question1 = new Question(elt, index);
  if (index < 2) {
    question1.addToDOM("#outer1");
  } else {
    question1.addToDOM("#outer2");
  }
});

$("button").on("click", function (evt) {
  markItemFromButton(evt.target);
});

function markItemFromButton(button) {
  const answer = $(button).closest("div").data("answer");
  const name = $(button).closest("div").data("index");
  const input = $("input[name=" + name + "]:checked").val();

  let span = $($(button).closest("div")).find("span");
  console.log(span);

  if (answer === input) {
    $(span).text(" Correct!");
    $(button).closest("div").removeClass("correct");
    $(button).closest("div").removeClass("incorrect");
    $(button).closest("div").addClass("correct");
  } else {
    $(span).text(" Sorry, that's not correct.");
    $(button).closest("div").removeClass("correct");
    $(button).closest("div").removeClass("incorrect");
    $(button).closest("div").addClass("incorrect");
  }
}
