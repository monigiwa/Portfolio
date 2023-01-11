hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}
const form = document.getElementById("form");
// const subjectContainer =document.querySelector("subject_container");
// const subject = document.getElementById("subject")
let isValid = false;

function validateForm() {
    isValid = form.checkValidity();
    // subject.textContent
    // console.log(isValid);

}

function storeUser() {
    const user = {
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        subject: form.subject.value,
    };
    console.log(user);
}

function procssFormData(event) {
    event.preventDefault();
    validateForm();
    storeUser();
}
form.addEventListener("sbmit", procssFormData);