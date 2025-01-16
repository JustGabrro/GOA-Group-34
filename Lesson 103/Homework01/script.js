const actions = ["Attack", "Defend", "Run"];
const historyList = document.getElementById("history-list");
const resultDisplay = document.getElementById("game-result");
const toggleHistoryBtn = document.getElementById("toggle-history");
const historyContainer = document.getElementById("history-container");
const resetHistoryBtn = document.getElementById("reset-history");
let scores = { wins: 0, losses: 0, draws: 0 };

function updateScores() {
    document.getElementById("wins").textContent = scores.wins;
    document.getElementById("losses").textContent = scores.losses;
    document.getElementById("draws").textContent = scores.draws;
    localStorage.setItem("scores", JSON.stringify(scores));
}

function addHistoryEntry(playerAction, gazelleAction, outcome) {
    const li = document.createElement("li");
    li.textContent = `Player: ${playerAction}, Gazelle: ${gazelleAction}, Outcome: ${outcome}`;
    li.classList.add(outcome.toLowerCase());
    historyList.appendChild(li);

    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push({ playerAction, gazelleAction, outcome });
    localStorage.setItem("history", JSON.stringify(history));
}

function playGame(playerAction) {
    const gazelleAction = actions[Math.floor(Math.random() * actions.length)];
    let outcome;
    if (playerAction === gazelleAction) {
        outcome = "Draw";
        scores.draws++;
    } else if (
        (playerAction === "Attack" && gazelleAction === "Run") ||
        (playerAction === "Defend" && gazelleAction === "Attack") ||
        (playerAction === "Run" && gazelleAction === "Defend")
    ) {
        outcome = "Win";
        scores.wins++;
    } else {
        outcome = "Loss";
        scores.losses++;
    }

    resultDisplay.textContent = `Player chose ${playerAction}, Gazelle chose ${gazelleAction}. Result: ${outcome}!`;
    addHistoryEntry(playerAction, gazelleAction, outcome);
    updateScores();
}

document.querySelectorAll(".actions button").forEach(button => {
    button.addEventListener("click", () => playGame(button.dataset.action));
});

toggleHistoryBtn.addEventListener("click", () => {
    historyContainer.classList.toggle("hidden");
    toggleHistoryBtn.textContent = historyContainer.classList.contains("hidden")
        ? "Show Game History"
        : "Hide Game History";
});

resetHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
    localStorage.removeItem("history");
    scores = { wins: 0, losses: 0, draws: 0 };
    updateScores();
});

window.addEventListener("load", () => {
    const savedScores = JSON.parse(localStorage.getItem("scores"));
    if (savedScores) scores = savedScores;

    const savedHistory = JSON.parse(localStorage.getItem("history")) || [];
    savedHistory.forEach(({ playerAction, gazelleAction, outcome }) =>
        addHistoryEntry(playerAction, gazelleAction, outcome)
    );
    updateScores();
});
