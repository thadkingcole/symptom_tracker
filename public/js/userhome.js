$(document).ready(() => {
  const monthGrid = document.querySelector(".month-grid");
  const dayGrid = document.querySelector(".day-grid");
  const symptomGrid = document.querySelector(".symptom-grid");
  const monthSquares = [];
  const daySquares = [];
  const symptomSquares = [];
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function createMonthGrid() {
    for (let i = 0; i < 12; i++) {
      let monthSquare = document.createElement("div");
      monthSquare.innerHTML = monthArray[i];
      monthSquare.classList.add("month");
      monthSquare.setAttribute("id", i);
      monthGrid.appendChild(monthSquare);
      monthSquares.push(monthSquare);
    }
  }
  function createDayGrid() {
    for (let i = 0; i < 31; i++) {
      let daySquare = document.createElement("div");
      daySquare.classList.add("day");
      daySquare.setAttribute("id", i);
      dayGrid.appendChild(daySquare);
      daySquares.push(daySquare);
    }

  }
  function createSymptomGrid() {
    for (let i = 0; i < 7; i++) {
      let symptomSquare = document.createElement("div");
      symptomSquare.classList.add("symptom");
      symptomSquare.setAttribute("id", i);
      symptomGrid.appendChild(symptomSquare);
      symptomSquares.push(symptomSquare);
    }
  }
  createSymptomGrid();
  createMonthGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
  createDayGrid();
});