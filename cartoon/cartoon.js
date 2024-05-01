// Author: Hae Rin Hong

var dateText = [
  "July 27, 2022",
  "November 18, 2022",
  "August 9, 2022",
  "January 17, 2022",
  "November 9, 2022",
  "February 10, 2022",
  "September 13, 2022",
  "April 17, 2022",
  "March 18, 2022",
  "January 30, 2022",
];

var cartoonData = [
  // Your existing cartoonData objects
];

function getCartoonByDate(dateObj) {
  let monthDay = dateObj.getMonth() + 1 + "/" + dateObj.getDate();
  return (
    cartoonData.find((cartoon) => cartoon.date === monthDay) || {
      character: "Unknown",
      image: "default.jpeg",
      fact: "No special character for today.",
    }
  );
}

function updatePage() {
  var dateString = getTestDate();
  var dateObj = makeDate(dateString);
  var cartoon = getCartoonByDate(dateObj);

  document.getElementById("date").innerText = formatDate(dateObj);
  document.getElementById("characterName").innerText = cartoon.character;
  document.getElementById("characterFact").innerText = cartoon.fact;
  document.getElementById("characterImage").src = cartoon.image;
}

document.getElementById("nextButton").addEventListener("click", updatePage);

function formatDate(dateObj) {
  let currentDay = dateObj.toDateString().split(" ")[0];
  let month = dateObj.getMonth() + 1;
  let date = dateObj.getDate();
  let year = dateObj.getFullYear();
  return `${currentDay}, ${month}/${date}/${year}`;
}

function makeDate(string) {
  return new Date(string);
}

function randomElt(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getTestDate() {
  return randomElt(dateText);
}

var cartoonData = [
  {
    date: "7/27",
    character: "Bugs Bunny",
    image: "BugsBunny.jpeg",
    fact: "Known for his clever antics and the catchphrase 'What's up, Doc?'",
  },
  {
    date: "11/18",
    character: "Mickey Mouse",
    image: "MickeyMouse.jpeg",
    fact: "Iconic Disney character known for his cheerful optimism and adventures.",
  },
  {
    date: "8/9",
    character: "Betty Boop",
    image: "BettyBoop.jpeg",
    fact: "Recognized for her flapper dress style and heart-shaped face, symbolizing the Jazz Age.",
  },
  {
    date: "1/17",
    character: "Popeye the Sailor Man",
    image: "Popeye.jpeg",
    fact: "Famous for gaining superhuman strength after eating spinach.",
  },
  {
    date: "11/9",
    character: "Felix the Cat",
    image: "FelixtheCat.jpeg",
    fact: "A black cat with a magical bag of tricks, one of the first animated film stars.",
  },
  {
    date: "2/10",
    character: "Tom and Jerry",
    image: "TomandJerry.jpeg",
    fact: "A comedic duo known for their chaotic chase sequences.",
  },
  {
    date: "9/13",
    character: "Scooby-Doo",
    image: "Scooby-Doo.jpeg",
    fact: "A talking Great Dane who goes on spooky adventures with his teenage friends.",
  },
  {
    date: "4/17",
    character: "Daffy Duck",
    image: "DaffyDuck.jpeg",
    fact: "Famous for his explosive temperament and rivalry with Bugs Bunny.",
  },
  {
    date: "3/18",
    character: "Pink Panther",
    image: "PinkPanther.jpeg",
    fact: "Known for his cool demeanor and silent slapstick humor.",
  },
  {
    date: "1/30",
    character: "Yogi Bear",
    image: "YogiBear.jpeg",
    fact: "Always on the lookout to steal picnic baskets in Jellystone Park.",
  },
];

function getCartoonByDate(dateObj) {
  let monthDay = dateObj.getMonth() + 1 + "/" + dateObj.getDate(); // Create a month/day string
  return (
    cartoonData.find((cartoon) => cartoon.date === monthDay) || {
      character: "Unknown",
      image: "default.jpeg",
      fact: "No special character for today.",
    }
  );
}

function updatePage() {
  var dateString = getTestDate();
  var dateObj = makeDate(dateString);
  var cartoon = getCartoonByDate(dateObj);

  document.getElementById("date").innerText = formatDate(dateObj);
  document.getElementById("characterName").innerText = cartoon.character;
  document.getElementById("characterFact").innerText = cartoon.fact;
  document.getElementById("characterImage").src = cartoon.image;
}

document.getElementById("nextButton").addEventListener("click", updatePage);

function formatDate(dateObj) {
  let month = dateObj.getMonth() + 1;
  let date = dateObj.getDate();
  return month + "/" + date;
}

function makeDate(string) {
  return new Date(string);
}

function randomElt(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getTestDate() {
  return randomElt(dateText);
}
