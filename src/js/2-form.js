const form = document.querySelector(".feedback-form");

const formData = {
    email: "",
    message: ""
}
const localStorageKey = "feedback-form-state";

const savedFormData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
const email = form.elements.email;
const message = form.elements.message;

email.value = savedFormData.email ?? "";
message.value = savedFormData.message ?? "";

form.addEventListener("input", e => {
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
})

form.addEventListener("submit", e => {
    e.preventDefault();
    if (email.value === "" || message.value === "") {
        alert("Fill please all fields")
        return;
    };
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
});