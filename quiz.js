const duck = document.querySelector(".duck");

duck.addEventListener("click", () => {
  alert("꽥!");
  quiz();
});

function quiz() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
    console.log("4");
  }, 2000);
  console.log("5");
}
