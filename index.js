const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const calculateButton = document.querySelector("#calculate-number");
const outputContainer = document.querySelector("#output-container");
const gifContainer = document.querySelector("#gif-container");

[(dateOfBirth, luckyNumber)].forEach((element) => {
  element.addEventListener("input", () => {
    outputContainer.innerText = "";
    gifContainer.innerHTML = "";
  });
});

calculateButton.addEventListener("click", () => {
  const date = dateOfBirth.value;
  const number = luckyNumber.value;
  if (date && number) {
    const dateSum = sumOfDates(date, number);
    checkLuckyNumber(dateSum, number);
  } else {
    showMessage("Enter both values");
  }
});

function sumOfDates(date) {
  let sum = 0;
  date = date.replace(/-/g, "");
  for (let i in date) {
    sum += Number(date[i]);
  }
  return sum;
}

function checkLuckyNumber(dateSum, number) {
  if (dateSum % number === 0) {
    showMessage(`${number} is a lucky number!! 🥳`);
    gifContainer.innerHTML = `<iframe
      src="https://giphy.com/embed/13G7hmmFr9yuxG"
      width="280"
      frameborder="0"
      class="giphy-embed"
      allowfullscreen
    ></iframe>`;
  } else {
    showMessage(`${number} is not lucky number for you 😕`);
    gifContainer.innerHTML = `<iframe
    src="https://giphy.com/embed/L95W4wv8nnb9K"
    width="280"
    frameborder="0"
    class="giphy-embed"
    allowfullscreen
  ></iframe>`;
  }
}

function showMessage(message) {
  outputContainer.innerText = message;
}
