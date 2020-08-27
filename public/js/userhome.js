document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("dayModal");
  const span = document.getElementById("class");
  const checkIn = document.getElementById("checkIn");
  const moodDiv = document.getElementById("mood");

  function moodColors() {
    console.log(moodDiv.innerHTML);
    if (moodDiv.innerHTML == 1) {
      moodDiv.style.backgroundColor = "red";
    } else if (moodDiv.innerHTML == 2) {
      moodDiv.style.backgroundColor = "orange";
    } else if (moodDiv.innerHTML == 3) {
      moodDiv.style.backgroundColor = "blue";
    } else if (moodDiv.innerHTML == 4) {
      moodDiv.style.backgroundColor = "yellow";
    } else if (moodDiv.innerHTML == 5) {
      moodDiv.style.backgroundColor = "green";
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
  dayModal();
  dailyCheckIn();
  moodColors();
});
