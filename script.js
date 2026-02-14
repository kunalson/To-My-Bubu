// const step1 = document.getElementById("step1");
// const step2 = document.getElementById("step2");
// const step3 = document.getElementById("step3");

// const correctPassword = "iloveyou"; // CHANGE THIS 😎

// const passwordScreen = document.getElementById("passwordScreen");
// const letterScreen = document.getElementById("letterScreen");
// const letterElement = document.getElementById("loveLetter");
// const enterBtn = document.getElementById("enterBtn");

// enterBtn.addEventListener("click", () => {
//   const value = document.getElementById("passwordInput").value;

//   if (value.toLowerCase() === correctPassword) {
//     passwordScreen.classList.add("hidden");
//     step1.classList.remove("hidden");
//     startTypewriter();
//   } else {
//     alert("Wrong password 😜 Try again!");
//   }
// });


// const message = `From the day you became my wife, my world found a new meaning. 
// Home started feeling warmer, days felt lighter, and every ordinary moment turned special just because you were beside me. 
// Loving you is no longer just a feeling — it is my favorite way of living.

// Through the smiles, the arguments, the chaos, and the calm, you have been my partner in everything. 
// You understand my silence, protect my heart, and stand with me even when I am difficult to handle. 
// I may not say it every day, but I notice it, I value it, and I am endlessly grateful for you.

// So today I don’t want to ask you to be mine, because you already are. 
// I simply want to promise that I will keep choosing you, respecting you, and loving you more with every sunrise… ❤️`;


// let index = 0;

// function startTypewriter() {
//   const speed = 40;

//   function type() {
//     if (index < message.length) {
//       letterElement.innerHTML += message.charAt(index);
//       index++;
//       setTimeout(type, speed);
//     }
//   }

//   type();
// }

// // continue button
// document.getElementById("startBtn").addEventListener("click", () => {
//   letterScreen.classList.add("hidden");
//   document.getElementById("step3").classList.remove("hidden");
// });







// // STEP 1 BUTTONS
// document.getElementById("opt1").addEventListener("click", goStep2);
// document.getElementById("opt2").addEventListener("click", goStep2);
// document.getElementById("retryBtn").addEventListener("click", retry);

// // STEP 2 BUTTONS
// document.getElementById("noBtn").addEventListener("click", goStep3);
// document.getElementById("yesBtn").addEventListener("click", turnNo);

// // STEP 3 BUTTONS
// document.getElementById("finalYes").addEventListener("click", goSuccess);
// document.getElementById("finalOfCourse").addEventListener("click", goSuccess);

// // FUNCTIONS
// function retry() {
//   alert("Wrong answer 😜 Try again!");
// }

// function goStep2() {
//   step1.classList.add("hidden");
//   step2.classList.remove("hidden");
// }

// function turnNo() {
//   const btn = document.getElementById("yesBtn");
//   btn.innerText = "No ❤️";
//   btn.removeEventListener("click", turnNo);
//   btn.addEventListener("click", goStep3);
// }

// function goStep3() {
//   step2.classList.add("hidden");
//   letterScreen.classList.remove("hidden");

//   letterElement.innerHTML = "";
//   index = 0;
//   startTypewriter();
// }

// // function goSuccess() {
// //   window.location.href = "success.html";
// // }

// function goSuccess() {
//   // blast confetti for 2 seconds
//   const duration = 2 * 1000;
//   const end = Date.now() + duration;

//   const interval = setInterval(function () {
//     if (Date.now() > end) {
//       clearInterval(interval);
//       window.location.href = "success.html"; // move after celebration
//       return;
//     }

//     confetti({
//       particleCount: 80,
//       spread: 100,
//       origin: { y: 0.6 }
//     });

//   }, 250);
// }


// ================= ELEMENTS =================
const passwordScreen = document.getElementById("passwordScreen");
const letterScreen = document.getElementById("letterScreen");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const letterElement = document.getElementById("loveLetter");

// ================= PASSWORD =================
const correctPassword = "iloveyou"; // change if you want

document.getElementById("enterBtn").addEventListener("click", () => {
  const value = document.getElementById("passwordInput").value;

  if (value.toLowerCase() === correctPassword) {
    passwordScreen.classList.add("hidden");
    step1.classList.remove("hidden");
  } else {
    alert("Wrong password 😜 Try again!");
  }
});

// ================= TYPEWRITER =================
const message = `From the day you became my wife, my world found a new meaning. 
Home started feeling warmer, days felt lighter, and every ordinary moment turned special just because you were beside me. 
Loving you is no longer just a feeling it is my favorite way of living.

Through the smiles, the arguments, the chaos, and the calm, you have been my partner in everything. 
You understand my silence, protect my heart, and stand with me even when I am difficult to handle. 
I may not say it every day, but I notice it, I value it, and I am endlessly grateful for you.

So today I don't want to ask you to be mine, because you already are. 
I simply want to promise that I will keep choosing you, respecting you, and loving you more with every sunrise… ❤️`;

let index = 0;

function startTypewriter() {
  const speed = 40;

  function type() {
    if (index < message.length) {
      letterElement.innerHTML += message.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

// continue after letter
document.getElementById("startBtn").addEventListener("click", () => {
  letterScreen.classList.add("hidden");
  step3.classList.remove("hidden");
});

// ================= STEP 1 =================
document.getElementById("opt1").addEventListener("click", goStep2);
document.getElementById("opt2").addEventListener("click", goStep2);
document.getElementById("retryBtn").addEventListener("click", retry);

function retry() {
  alert("Wrong answer 😜 Try again!");
}

function goStep2() {
  step1.classList.add("hidden");
  step2.classList.remove("hidden");
}

// ================= STEP 2 =================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES → convert to NO
yesBtn.addEventListener("click", turnNo);

// NO → open letter
noBtn.addEventListener("click", goLetter);

function turnNo() {
  yesBtn.innerText = "No 🙈";
  yesBtn.removeEventListener("click", turnNo);
  yesBtn.addEventListener("click", goLetter);
}

function goLetter() {
  step2.classList.add("hidden");
  letterScreen.classList.remove("hidden");

  // reset before typing
  letterElement.innerHTML = "";
  index = 0;

  startTypewriter(); // ❤️ starts ONLY here
}

// ================= FINAL STEP =================
document.getElementById("finalYes").addEventListener("click", goSuccess);
document.getElementById("finalOfCourse").addEventListener("click", goSuccess);

// ================= CONFETTI =================
function goSuccess() {
  const duration = 2000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval);
      window.location.href = "success.html";
      return;
    }

    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 }
    });
  }, 250);
}
