let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let loginButton = document.querySelector(".clkbtn");
let signupButton = document.querySelector(".clkbtnSign");

signup.addEventListener("click", () => {
  slider.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});

loginButton.addEventListener("click", () => {
  displayAlert("Login successful");
});

function displayAlert(message) {
  alert(message);
}
signupButton.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
	displayAlert("Signup successful");
  });
  
  function displayAlert(message) {
	alert(message);
  }
