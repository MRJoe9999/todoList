let array = [];
let dateArray = [];

let button = document.querySelector(".add-button");
button.addEventListener("click", function () {
  let input = document.querySelector(".Todo-Input");
  let dateInput = document.querySelector(".Date-Input");
  if (input.value.trim() === "" || dateInput.value.trim() === "") {
    alert("Please enter a task."); // You can display a custom message or handle the error
    return; // Stop the function if the input is empty
  }
  array.push(input.value);
  dateArray.push(dateInput.value);
  console.log(array);
  write();
  input.value = "";
  dateInput.value = "";
});

function write() {
  let list = document.querySelector(".List");
  list.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    list.innerHTML += `<div class = "elements"><p class = "Todo-List">${array[i]}</p><p>${dateArray[i]}</p><button class = "Delete-Button">Delete</button><div>`;
    let deletebtn = document.querySelectorAll(".Delete-Button");
    for (let j = 0; j < deletebtn.length; j++) {
      deletebtn[j].addEventListener("click", function () {
        array.splice(j, 1);
        dateArray.splice(j, 1);
        write();
      });
    }
  }
}
