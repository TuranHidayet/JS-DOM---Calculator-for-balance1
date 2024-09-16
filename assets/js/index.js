let form= document.querySelector(".todoForm");
let todoList= document.querySelector(".todoList");

let operationList = [];

form.addEventListener ("submit", function (e) {
    e.preventDefault();

    let amountInp = e.target.elements["todoText"];
    let checkInp = e.target.elements["type"];

let operation = {
    id: Math.floor(Math.random() * 10000),
    amount: Number(amountInp.value),
    type: checkInp.value,
    createdAt: new Date (),
};

operationList.push(operation);

amountInp.value = "";
amountInp.focus();
document.querySelector("input[value='Medaxil'").checked = false;
document.querySelector("input[value='Mexaric'").checked = false;

ShowOperations(operationList);
});

function ShowOperations(operations) {
    todoList.innerHTML = "";
    operations.forEach((operation) => {
        let liElement = document.createElement("li");
        liElement.classList.add("todo-item");
        liElement.textContent = `${operation.type === "Medaxil" ? "+" : "-"} ${
            operation.amount
        } AZN`;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Sil";
        liElement.append(deleteBtn);
        todoList.append(liElement);
    });
    
}







