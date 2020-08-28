document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("dayModal");
  const span = document.getElementById("class");
  const checkIn = document.getElementById("checkIn");
  const moodDiv = document.querySelectorAll(".mood");
  const noteBtn = document.querySelectorAll("#noteBtn");
  const noteModalEl = document.getElementById("noteModal");
  const span2 = document.getElementById("classic");

  function noteButton() {
    for (let i = 0; i < noteBtn.length; i++) {
      noteBtn[i].addEventListener("click", () => {
        noteModalEl.style.display = "block";
      });
    }
  }
  function moodColors() {
    for (let i = 0; i < moodDiv.length; i++) {
      if (moodDiv[i].textContent === "1") {
        moodDiv[i].style.backgroundColor = "red";
      } else if (moodDiv[i].textContent === "2") {
        moodDiv[i].style.backgroundColor = "orange";
      } else if (moodDiv[i].textContent === "3") {
        moodDiv[i].style.backgroundColor = "blue";
      } else if (moodDiv[i].textContent === "4") {
        moodDiv[i].style.backgroundColor = "yellow";
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
  function noteModal() {
    span2.onclick = function () {
      noteModalEl.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target === noteModalEl) {
        noteModalEl.style.display = "none";
      }
    };
  }
  noteModal();
  noteButton();
  dayModal();
  dailyCheckIn();
  moodColors();
});
