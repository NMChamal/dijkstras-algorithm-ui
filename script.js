const fromNode = document.getElementById("from");
const toNode = document.getElementById("to");
const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");
const rightPanel = document.getElementById("rightPanel");
const resultPanel = document.getElementById("resultPanel");
const resultBox = document.getElementById("resultBox");
const card = document.querySelector(".card");

function checkSelections() {
  if (fromNode.value && toNode.value && fromNode.value !== toNode.value) {
    calcBtn.disabled = false;
  } else {
    calcBtn.disabled = true;
  }
}

fromNode.addEventListener("change", checkSelections);
toNode.addEventListener("change", checkSelections);

calcBtn.addEventListener("click", () => {
  card.classList.add("result-visible");
  rightPanel.style.display = "none";
  resultPanel.style.display = "flex";

  resultBox.innerHTML = `
    From Node Name = "A", To Node Name = "D" <br /><br />
    Total Distance: 10
  `;
});

clearBtn.addEventListener("click", () => {
  card.classList.remove("result-visible");
  fromNode.value = "";
  toNode.value = "";
  calcBtn.disabled = true;

  rightPanel.style.display = "flex";
  resultPanel.style.display = "none";
});
