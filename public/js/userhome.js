$(document).ready(() => {
    const modal = document.getElementById("dayModal");
    const span = document.getElementById("class");
    const monthGrid = document.querySelector(".month-grid");
    const dayGrid = document.querySelector(".day-grid");
    const symptomGrid = document.querySelector(".symptom-grid");
    const ratingArea = document.querySelector(".rating-area");
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
    const symptomArray = [
      "Cough",
      "Mental Health",
      "Headache",
      "Muscle Ache",
      "Energy Level",
      "Mood",
      "Appetite"
    ];
    function createMonthGrid() {
      for (let i = 0; i < 12; i++) {
        const monthSquare = document.createElement("div");
        monthSquare.innerHTML = monthArray[i];
        monthSquare.classList.add("month");
        monthSquare.setAttribute("id", monthArray[i]);
        monthGrid.appendChild(monthSquare);
        monthSquares.push(monthSquare);
      }
    }
    function createDayGrid() {
      for (i = 1; i < 32; i++) {
        const daySquare = document.createElement("div");
        daySquare.classList.add("day");
        daySquare.setAttribute("id", "day_" + i);
        daySquare.innerHTML = i;
        dayGrid.appendChild(daySquare);
        daySquares.push(daySquare);
  
        daySquare.addEventListener("click", (e) => {
          dayClick(daySquare);
        })
      }
  
    }
    function dayClick(daySquare) {
      modal.style.display = "block";
      const squareId = daySquare
      for(i = 0; i < 10; i++) {
        const rateSquares = document.createElement("div");
        rateSquares.classList.add("rate");
        rateSquares.setAttribute("id", i);
        rateSquares.innerHTML = i;
        ratingArea.appendChild(rateSquares);
  
      }
    }
    function createSymptomGrid() {
      for (let i = 0; i < 7; i++) {
        const symptomSquare = document.createElement("div");
        symptomSquare.classList.add("symptom");
        symptomSquare.setAttribute("id", "symptom_" + i);
        symptomSquare.innerHTML = symptomArray[i];
        symptomGrid.appendChild(symptomSquare);
        symptomSquares.push(symptomSquare);
      }
    }
    function dayModal() {
      span.onclick = function () {
        modal.style.display = "none";
      }
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    }
  
    dayModal()
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