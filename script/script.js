const repro = document.querySelector(".tecla");

repro.addEventListener("click", () => {
  tocaSomPom();
});

function tocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}
