let allWords = [
  "banana",
  "mouse",
  "keyboard",
  "apple",
  "delhi",
  "mango",
  "India",
  "Africa",
  "Printer",
  "watermelon",
  "guava",
  "laptop",
  "monitor",
  "cable",
  "america",
  "kolkata",
  "noida",
  "grapes",
  "russia",
  "gurgaon",
  "australia",
  "italy",
  "germany",
  "papaya",
  "mango",
  "bangalore",
  "orange",
  "cherry",
  "canada",
  "hyderabad",
  "iceland"
];

let word = allWords[Math.floor(Math.random() * allWords.length)].toUpperCase();
let chance = 6;
let count = 0;
let cont = document.getElementById("box1");
let attemptsLeft = document.getElementById("box4");
let img = document.getElementById("image");
let win = null;

//to print blank spaces for game
for (let i = 0; i < word.length; i++) {
  let blankSpace = document.createElement("div");
  blankSpace.setAttribute("id", "letter_" + i);
  blankSpace.className = "blank";
  blankSpace.innerHTML = "<p>&nbsp-&nbsp<p>";
  cont.appendChild(blankSpace);
}

let board1 = "QWERTYUIOP";
let board2 = "ASDFGHJKL";
let board3 = "ZXCVBNM";

let key_board1 = document.getElementById("k_board1");

//printintg first row of keyboard
for (let i = 0; i < board1.length; i++) {
  let row1 = document.createElement("div");
  row1.id = board1[i];
  row1.className = "board1";
  row1.innerHTML = board1[i] + " ";
  row1.addEventListener("click", (event) => handleClick(board1[i]));
  key_board1.appendChild(row1);
}

let key_board2 = document.getElementById("k_board2");

for (let i = 0; i < board2.length; i++) {
  let row2 = document.createElement("div");
  row2.id = board2[i];
  row2.className = "board2";
  row2.innerHTML = board2[i] + " ";
  row2.addEventListener("click", (event) => handleClick(board2[i]));
  key_board2.appendChild(row2);
}

let key_board3 = document.getElementById("k_board3");

for (let i = 0; i < board3.length; i++) {
  let row3 = document.createElement("div");
  row3.id = board3[i];
  row3.className = "board3";
  row3.innerHTML = board3[i] + " ";
  row3.addEventListener("click", (event) => handleClick(board3[i]));
  key_board3.appendChild(row3);
}

const handleClick = (el) => {
  //console.log(el);
  if (count === word.length) {
    return;
  }
  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === el) {
      let update_blank = document.getElementById("letter_" + i);
      update_blank.innerText = word[i];
      count++;
      let foundLetter = word[i];
      let foundInner = document.getElementById(foundLetter);
      //foundInner.setAttribute("onclick", "");
      foundInner.classList.add("hide");
      found = true;
    }
    if (word[i] !== el) {
      let foundLetter = el;
      let foundInner = document.getElementById(foundLetter);
      //foundInner.setAttribute("onclick", "");
      foundInner.classList.add("hide");
    }
  }
  if (found === false) {
    chance--;
    let imgsrc = `pictures/${chance}.jpg`;
    img.setAttribute("src", imgsrc);
    //let attemptsLeft = document.getElementById("box4");
    attemptsLeft.innerHTML = `Number of attempts left: ${chance}`;
  }
  if (chance <= 0) {
    let imgsrc = `pictures/lost.jpg`;
    img.setAttribute("src", imgsrc);
    attemptsLeft.innerHTML = `You lost! Correct word is: ${word}`;
    win = false;
    count = word.length;
  }
  if (count === word.length) {
    if (win === false) {
      return;
    }
    attemptsLeft.innerHTML = `You won!`;
    let imgsrc = `pictures/won.jpg`;
    img.setAttribute("src", imgsrc);
  }
};
