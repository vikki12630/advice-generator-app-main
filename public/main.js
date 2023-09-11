const changebtn = document.getElementById("changebtn");

changebtn.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((status) => {
      return status.json();
    })
    .then((data) => {
      const id = Object.values(data)[0].id;
      const advice = Object.values(data)[0].advice;

      document.getElementById("idNo").innerHTML = `#${id}`;
      document.getElementById("advice").innerHTML = `"${advice}"`;
    })
    .catch((error) => console.log(error));
});
