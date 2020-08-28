document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("dayModal");
  const span = document.getElementById("class");
  const checkIn = document.getElementById("checkIn");
  const moodDiv = document.querySelectorAll(".mood");
  const noteBtn = document.getElementById("noteBtn");

  function noteButton() {
    console.log(noteBtn);
    noteBtn.addEventListener("click", () => {
      alert("add notes modal here");
    });
  }
  function moodColors() {
    console.log(moodDiv[0].textContent);
    for (let i = 0; i < moodDiv.length; i++) {
      if (moodDiv[i].textContent === "1") {
        moodDiv[i].style.backgroundColor = "red";
      } else if (moodDiv[i].textContent === "2") {
        moodDiv[i].style.backgroundColor = "orange";
      } else if (moodDiv[i].textContent === "3") {
        moodDiv[i].style.backgroundColor = "yellow";
      } else if (moodDiv[i].textContent === "4") {
        moodDiv[i].style.backgroundColor = "blue";
      } else if (moodDiv[i].textContent === "5") {
        moodDiv[i].style.backgroundColor = "green";
      }
    }
  }

  function dailyCheckIn() {
    // add event listener to daily check-in link
    // then display form in modal
    checkIn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }
  function dayModal() {
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
  noteButton();
  dayModal();
  dailyCheckIn();
  moodColors();
});
