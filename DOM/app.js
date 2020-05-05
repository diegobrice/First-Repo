const title = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

title.style.backgroundColor = "skyblue";

// title.classList.remove("change");

changeColor.addEventListener("click", function () {
  // title.classList.add("change");
  // title.classList.remove("change");
  title.classList.toggle("change");
});

const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".name-input");
const addItem = document.querySelector(".add-item");

// for (user of userList) {
//   user.addEventListener("click", function () {
//     this.style.backgroundColor = "blue";
//   });
// }

addItem.addEventListener("click", function () {
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  newLi.appendChild(liContent);
  userList.appendChild(newLi);
  listInput.value = "";
});
