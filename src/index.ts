import {formData} from "./forms";

console.log("Hello");
console.log("Hello again");
console.log("Third hello");



const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = formData(form);
    console.log(data);
})