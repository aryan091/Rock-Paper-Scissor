const pcChoices = ["rock", "paper", "scissor"];

function comPlay() {
  return pcChoices[Math.floor(Math.random() * pcChoices.length)];
}

const togBtn = document.getElementById("ruleButton");
const togDiv = document.getElementById("ruleList");
const cross = document.getElementById("cross");

togBtn.addEventListener("click", () => {
  togDiv.classList.remove("hidden");
  cross.classList.remove("hidden");
});

cross.addEventListener("click", () => {
  togDiv.classList.add("hidden");
  cross.classList.add("hidden");
});

const iconWrapper = document.getElementById("wrapIcon");
const youPicked = document.getElementById("leftSide");
const ansText1 = document.getElementById("text1");
const ansText2 = document.getElementById("text2");
const pcPicked = document.getElementById("pc-picked");
const right = document.getElementById("rightSide");
const winLoseText = document.getElementById("answerText");

const userRock = document.getElementById("rockWinUs");
const userPaper = document.getElementById("paperWinUs");
const userScissor = document.getElementById("scissorWinUs");

const pcRock = document.getElementById("rockWinCom");
const pcPaper = document.getElementById("paperWinCom");
const pcScissor = document.getElementById("scissorWinCom");

const userGradient = document.getElementById("userEc");
const pcGradient = document.getElementById("pcEc");

const playBtn = document.getElementById("playbtn");
const nextBtn = document.getElementById("next-button");

let userScore = 0;

let pcScore =  0;

localStorage.removeItem(userScore.toString());
localStorage.removeItem(pcScore.toString());


function updateUserScore(updatedScore) {
  userScore = updatedScore;
  document.getElementById("myScore").innerHTML = userScore;
}

function updatePcScore(updatedScore) {
  pcScore = updatedScore;
  document.getElementById("pcScore").innerHTML = pcScore;
}

const rock = document.getElementById("rockI");
const scissor = document.getElementById("scrI");
const paper = document.getElementById("paperI");
let pc;

rock.addEventListener("click", () => {
  pc = comPlay();
  afterClick();
  userRock.classList.remove("hidden");

  if (pc === "rock") {
    pcRock.classList.remove("hidden");
    tie();
  } else if (pc === "scissor") {
    pcScissor.classList.remove("hidden");
    userScore = userScore + 1;
    updateUserScore(userScore);
    userGradient.classList.remove("hidden");
    win();
  } else {
    pcPaper.classList.remove("hidden");
    pcScore = pcScore + 1;
    updatePcScore(pcScore);
    pcGradient.classList.remove("hidden");
    lose();
  }
});

scissor.addEventListener("click", () => {
  pc = comPlay();
  afterClick();
  userScissor.classList.remove("hidden");

  if (pc === "scissor") {
    pcScissor.classList.remove("hidden");
    tie();
  } else if (pc === "paper") {
    pcPaper.classList.remove("hidden");
    userScore =  userScore + 1;
    updateUserScore(userScore);
    userGradient.classList.remove("hidden");
    win();
  } else {
    pcRock.classList.remove("hidden");
    pcScore = pcScore  + 1;
    updatePcScore(pcScore);
    pcGradient.classList.remove("hidden");
    lose();
  }
});

paper.addEventListener("click", () => {
  pc = comPlay();
  afterClick();
  userPaper.classList.remove("hidden");

  if (pc === "paper") {
    pcPaper.classList.remove("hidden");
    tie();
  } else if (pc === "rock") {
    pcRock.classList.remove("hidden");
    userScore = userScore + 1;
    updateUserScore(userScore);
    userGradient.classList.remove("hidden");
    win();
  } else {
    pcScissor.classList.remove("hidden");
    pcScore = pcScore  + 1;
    updatePcScore(pcScore);
    pcGradient.classList.remove("hidden");
    lose();
  }
});

playBtn.addEventListener("click", () => {
  iconWrapper.classList.remove("hidden");
  youPicked.classList.add("hidden");
  ansText1.classList.add("hidden");
  ansText2.classList.add("hidden");
  pcPicked.classList.add("hidden");
  playBtn.classList.add("hidden");
  right.classList.add("hidden");
  winLoseText.classList.add("hidden");

  ansText1.classList.add("hidden");
  ansText2.classList.add("hidden");

  userPaper.classList.add("hidden");

  userRock.classList.add("hidden");
  userScissor.classList.add("hidden");

  pcRock.classList.add("hidden");
  pcPaper.classList.add("hidden");
  pcScissor.classList.add("hidden");

  userGradient.classList.add("hidden");
  pcGradient.classList.add("hidden");
});
function win() {
  document.getElementById("text1").innerHTML = "YOU WIN";
  ansText1.style.left = "705px";
  ansText2.style.left = "715px";
  document.getElementById("playBtnText").innerHTML = "PLAY AGAIN";
  if (userScore > pcScore) {
    nextBtn.classList.remove("hidden");
    togBtn.style.left = "1210px";
  } else {
    nextBtn.classList.add("hidden");
    togBtn.style.left = "1360px";
  }
}

function lose() {
  document.getElementById("text1").innerHTML = "YOU LOSE";
  ansText1.style.left = "710px";
  ansText2.style.left = "725px";
  playBtn.style.left = "715px";
  document.getElementById("playBtnText").innerHTML = "PLAY AGAIN";
  if (userScore > pcScore) {
    nextBtn.classList.remove("hidden");
    togBtn.style.left = "1210px";
  } else {
    nextBtn.classList.add("hidden");
    togBtn.style.left = "1360px";
  }
}

function tie() {
  document.getElementById("text1").innerHTML = "TIE UP";
  ansText1.style.left = "700px";
  ansText2.classList.add("hidden");
  document.getElementById("playBtnText").innerHTML = "REPLAY";
  if (userScore > pcScore) {
    nextBtn.classList.remove("hidden");
    togBtn.style.left = "1210px";
  } else {
    nextBtn.classList.add("hidden");
    togBtn.style.left = "1360px";
  }
}

function afterClick() {
  iconWrapper.classList.add("hidden");
  youPicked.classList.remove("hidden");
  ansText1.classList.remove("hidden");
  ansText2.classList.remove("hidden");
  pcPicked.classList.remove("hidden");
  playBtn.classList.remove("hidden");
  right.classList.remove("hidden");
  winLoseText.classList.remove("hidden");
}
