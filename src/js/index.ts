let operationcase: HTMLSelectElement = <HTMLSelectElement> document.getElementById("operation");

let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("TypeAWordInput");

let DoItButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("DoIt");
DoItButton.addEventListener("click", changeCase);

let Output: HTMLSpanElement = <HTMLSpanElement> document.getElementById("output");

function changeCase(){
    let valuesinoperation: string = operationcase.value;
    if (valuesinoperation == "Uppercase")
    {
        Output.innerHTML = inputElement.value.toUpperCase();
    }
    else if (valuesinoperation == "Lowercase")
    {
        Output.innerHTML = inputElement.value.toLowerCase();
    }
}