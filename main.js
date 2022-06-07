document.querySelectorAll(".account-currency__selected").forEach((o) => {
  o.addEventListener("click", () => {
    f();
    let parent = o.closest(".account-currency__select-box");
    parent.style.zIndex = "2";
    parent
      .querySelector(".account-currency__options-container")
      .classList.toggle("active");
  });
});

document.querySelectorAll(".account-currency__option").forEach((o) => {
  o.addEventListener("click", () => {
    let parent = o
      .closest(".account-currency__options-container")
      .closest(".account-currency__select-box");
    let selected = parent.querySelector(".account-currency__selected");
    selected.innerHTML = o.querySelector("label").innerHTML;
    selected.style.color = "#1F5DDA";
    selected.style.fontWeight = "500";

    f();
  });
});

function f() {
  document
    .querySelectorAll(".account-currency__options-container")
    .forEach((a) => {
      a.classList.remove("active");
      a.closest(".account-currency__select-box").style.zIndex = "1";
    });
}
