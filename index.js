const charLengthDisplay = document.querySelector('.char-length-display');
const btn = document.querySelector('.btn');
const slider = document.querySelector('.input-slider');
const genPassword = document.getElementById('textfield');
const checkboxUppercase = document.getElementById('uppercase');
const checkboxLowercase = document.getElementById('lowercase');
const checkboxNumbers = document.getElementById('numbers');
const checkboxSymbols = document.getElementById('symbols');
const strengthDisplay = document.querySelector('.strength-display');
const copiedSuccess = document.querySelector('.copied-success');
const pgDisplay = document.querySelector('.pg-display');
const pgOptions = document.querySelector('.pg-options');
const passSelection = document.querySelectorAll('input[type="checkbox"]');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const bar4 = document.querySelector('.bar4');

const min = slider.min;
const max = slider.max;
const value = slider.value;


// DESIGN SLIDER (RANGE) ⬇⬇
slider.style.background = `linear-gradient(to right, #a3ffae 0%, #a3ffae ${(value-min)/(max-min)*100}%, hsl(248, 15%, 11%) ${(value-min)/(max-min)*100}%, hsl(248, 15%, 11%) 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, #a3ffae 0%, #a3ffae ${(this.value-this.min)/(this.max-this.min)*100}%, hsl(248, 15%, 11%) ${(this.value-this.min)/(this.max-this.min)*100}%, hsl(248, 15%, 11%) 100%)`
};
// DESIGN SLIDER (RANGE)⬆⬆

const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['1', '2', '3', '4', '5','6', '7', '8', '9', '0'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', '\'', '"', ',', '.', '<', '>', '/', '?', '`', '~'];

let strengthDifficulty = 0;
// charLengthDisplay.textContent = slider.value;
bar1.style.background = 'hsl(13, 95%, 66%)';
bar1.style.border = 'hsl(13, 95%, 66%)';
bar2.style.background = 'hsl(13, 95%, 66%)';
bar2.style.border = 'hsl(13, 95%, 66%)';


function checkboxValidation() {
  const arr = [];
  if(checkboxUppercase.checked === true) {
    arr.push(uppercaseLetters);
  }
  if(checkboxLowercase.checked === true) {
    arr.push(lowercaseLetters);
  }
  if(checkboxNumbers.checked === true) {
    arr.push(numbers);
  }
  if(checkboxSymbols.checked === true) {
    arr.push(symbols);
  }
  return arr;
}

function measurement () {
  if(strengthDifficulty === 0) {
    genPassword.classList.add('disabled');
    strengthDisplay.textContent = ''
    bar1.style.background = 'transparent';
    bar1.style.border = '2px solid white';
    bar2.style.background = 'transparent';
    bar2.style.border = '2px solid white';
    bar3.style.background = 'transparent';
    bar3.style.border = '2px solid white';
    bar4.style.background = 'transparent';
    bar4.style.border = '2px solid white';
  } else if(strengthDifficulty === 1) {
    strengthDisplay.textContent = 'TOO WEAK!'
    bar1.style.background = 'hsl(0, 91%, 63%)';
    bar1.style.border = 'hsl(0, 91%, 63%)';
    bar2.style.background = 'transparent';
    bar2.style.border = '2px solid white';
    bar3.style.background = 'transparent';
    bar3.style.border = '2px solid white';
    bar4.style.background = 'transparent';
    bar4.style.border = '2px solid white';
    genPassword.classList.remove('disabled');
  } else if (strengthDifficulty === 2) {
    strengthDisplay.textContent = 'WEAK';
    bar1.style.background = 'hsl(13, 95%, 66%)';
    bar1.style.border = 'hsl(13, 95%, 66%)';
    bar2.style.background = 'hsl(13, 95%, 66%)';
    bar2.style.border = 'hsl(13, 95%, 66%)';
    bar3.style.background = 'transparent';
    bar3.style.border = '2px solid white';
    bar4.style.background = 'transparent';
    bar4.style.border = '2px solid white';
    genPassword.classList.remove('disabled');
  } else if (strengthDifficulty === 3) {
    strengthDisplay.textContent = 'MEDIUM';
    bar1.style.background = 'hsl(42, 91%, 68%)';
    bar1.style.border = 'hsl(42, 91%, 68%)';
    bar2.style.background = 'hsl(42, 91%, 68%)';
    bar2.style.border = 'hsl(42, 91%, 68%)';
    bar3.style.background = 'hsl(42, 91%, 68%)';
    bar3.style.border = 'hsl(42, 91%, 68%)';
    bar4.style.background = 'transparent';
    bar4.style.border = '2px solid white';
    genPassword.classList.remove('disabled');
  } else if (strengthDifficulty === 4) {
    strengthDisplay.textContent = 'STRONG';
    bar1.style.background = 'hsl(127, 100%, 82%)';
    bar1.style.border = 'hsl(127, 100%, 82%)';
    bar2.style.background = 'hsl(127, 100%, 82%)';
    bar2.style.border = 'hsl(127, 100%, 82%)';
    bar3.style.background = 'hsl(127, 100%, 82%)';
    bar3.style.border = 'hsl(127, 100%, 82%)';
    bar4.style.background = 'hsl(127, 100%, 82%)';
    bar4.style.border = 'hsl(127, 100%, 82%)';
    genPassword.classList.remove('disabled');
  }
}

function barMeasurement() {
  const arrValidationResult = checkboxValidation();
  if(charLengthDisplay.textContent == 0) {
    strengthDifficulty = 0;
    if(arrValidationResult.length == 0) {
      strengthDifficulty = 0;
    }
  } else if(charLengthDisplay.textContent <= 8) {
    // TOO WEAK STRENGTH
    strengthDifficulty = 1;
  } else if(charLengthDisplay.textContent <= 12) {
    // WEAK STRENGTH
    strengthDifficulty = 2;
    if(arrValidationResult.length == 4) {
      strengthDifficulty = 3;
    }
  } else if(charLengthDisplay.textContent <= 15) {
    // MEDIUM STRENGTH
    strengthDifficulty = 3;
    if(arrValidationResult.length == 4) {
      strengthDifficulty = 4;
    }
  } else if(charLengthDisplay.textContent <= 20) {
    // STRONG STRENGTH
    if(strengthDifficulty <= 3|| strengthDifficulty > 3) {
      strengthDifficulty = 4;
    }
  }
}

slider.addEventListener('input', (e) => {
  charLengthDisplay.textContent = e.target.value;
  barMeasurement();
  measurement();
});

function passwordGenerator () {
  const difficulty = checkboxValidation();
  let generatedPassword = '';
  while (generatedPassword.length != charLengthDisplay.textContent) {
    const firstNumber = Math.floor(Math.random() * difficulty.length);
    const firstSelection = difficulty[firstNumber];
    const secondNumber = Math.floor(Math.random() * firstSelection.length);
    const secondSelection = firstSelection[secondNumber];
    generatedPassword += secondSelection;
  }
  genPassword.textContent = generatedPassword
  return generatedPassword;
}

pgDisplay.addEventListener('click', () => {
  copiedSuccess.classList.add('d-inline');
  navigator.clipboard.writeText(genPassword.textContent) // to copy the textfield
  setTimeout(() => {
    copiedSuccess.classList.remove('d-inline');
  }, 2000)
});

for(let checkbox of passSelection) {
  checkbox.addEventListener('input', (e) => {
    if(e.target.checked === true) {
      strengthDifficulty += 1;
    } else {
      strengthDifficulty -= 1;
    }
    barMeasurement();
    measurement();
  });
}

btn.addEventListener('click', () => {
  passwordGenerator();
});



