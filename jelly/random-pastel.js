//@author Hae Rin Hong
var random = (function () {
  var colors = [
    "#fff2f8",
    "#ffeaf5",
    "#ff82bd",
    "#ffa3ce",
    "#9bedff",
    "#f6f3ff",
    "#ede7ff",
    "#dbf1fd",
    "#ffd8d8",
    "#ffbdbd",
    "#ff9b9b",
    "#ff7b7b",
    "#bcafe7",
    "#ddd6f3",
    "#ffffe3",
    "#ffebcd",
    "#ddfffc",
    "#e6e6fa",
    "#dda0dd",
    "#f9abe7",
    "#faebd7",
    "#e1a9f6",
    "#b5e5ff",
    "#baffab",
    "#9dfbd3",
    "#ff8c00",
    "#aaa8f9",
    "#cf8ef4",
    "#ffb037",
    "#b0e0e6",
    "#e6e5ff",
    "#f08080",
    "#d0fff0",
    "#ff69b4",
    "#ff1493",
    "#d8bfd8",
    "#ffb577",
    "#ffd9aa",
    "#add8e6",
    "#ffb0d9",
    "#f9c9e2",
    "#c9dcf9",
    "#b0cfff",
    "#fbffd5",
    "#ffefff",
    "#ede5ff",
    "#eafff4",
    "#ffe8f4",
    "#d7fffa",
    "#befff7",
    "#ffc8d2",
    "#ffd6e4",
    "#856873",
    "#c4c5ff",
    "#fdf29a",
    "#fb918f",
  ];

  function intBelow(max) {
    return Math.floor(Math.random() * max);
  }

  function intBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function arrayElt(array) {
    var index = intBelow(array.length);
    return array[index];
  }

  function color() {
    return arrayElt(colors);
  }

  return {
    intBetween: intBetween,
    arrayElt: arrayElt,
    color: color,
  };
})();
