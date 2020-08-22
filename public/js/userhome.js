$(document).ready(() => {
    const monthGrid = document.querySelector(".month-grid");
    const dayGrid = document.querySelector(".day-grid");
    let monthSquares = [];
    let daySquares = [];

    function createMonthGrid() {
        for (let i = 0; i < 12; i++) {
            let monthSquare = document.createElement("div");
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
    createMonthGrid();
    createDayGrid();
    createDayGrid();
    createDayGrid();
    createDayGrid();
    createDayGrid();
    createDayGrid();
    createDayGrid();
});