// author: Hae Rin Hong

class Question {
  // instance variables

  constructor(qdesc, index) {
    let h1 = $("<h4>");

    let q1 = $("<p/>");
    q1.append(
      $("<label/>")
        .append(
          $("<input/>")
            .attr("type", "radio")
            .attr("name", "Q" + index)
            .attr("value", "A")
        )
        .append(qdesc.A)
    );

    let q2 = $("<p/>");
    q2.append(
      $("<label/>")
        .append(
          $("<input/>")
            .attr("type", "radio")
            .attr("name", "Q" + index)
            .attr("value", "B")
        )
        .append(qdesc.B)
    );

    let q3 = $("<p/>");
    q3.append(
      $("<label/>")
        .append(
          $("<input/>")
            .attr("type", "radio")
            .attr("name", "Q" + index)
            .attr("value", "C")
        )
        .append(qdesc.C)
    );

    let q4 = $("<p/>");
    q4.append(
      $("<label/>")
        .append(
          $("<input/>")
            .attr("type", "radio")
            .attr("name", "Q" + index)
            .attr("value", "D")
        )
        .append(qdesc.D)
    );

    let grade = $("<p/>");
    grade.append(
      $("<label/>").append(
        $("<button/>").attr("type", "button").text("GRADE") //.addClass('grade')
      )
    );
    grade.append($("<span/>"));

    this.parent = $("<div>")
      .attr("class", "inner")
      .attr("data-answer", qdesc.ANS)
      .attr("data-index", "Q" + index);
    var element1 = h1.append("Q" + index + ": " + qdesc.Q);

    this.parent
      .append(element1)
      .append(q1)
      .append(q2)
      .append(q3)
      .append(q4)
      .append(grade);
  }

  addToDOM(where) {
    $(where).append(this.parent);
  }
}
