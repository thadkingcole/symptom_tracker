document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("dayModal");
  const span = document.getElementById("class");
  const checkIn = document.getElementById("checkIn");

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
});
