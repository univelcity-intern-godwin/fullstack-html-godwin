

// JSON

const profile = {
    name: "Godwin Ahua",
    stack: "Full Stack Developer",
    company: "Univelcity"
};

const myData = JSON.stringify(profile);


const parsedData = JSON.parse(myData);

// Display name and company in the HTML
document.getElementById("nameSpan").textContent = parsedData.name;
document.getElementById("companySpan").textContent = parsedData.company;






// form validation with regex
 const form = document.querySelector('.form-data');
 const emailInput = document.getElementById('emailInput');
 const emailError = document.getElementById('emailError');
 const emailSuccess = document.getElementById('emailValid');

 form.addEventListener('submit', function(event) {

     // Preventing the default form submission
     event.preventDefault();

     // Validating email input using regular expression
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(emailInput.value)) {

         // checking if email is invalid, display error message and return false to prevent form submission
         emailError.style.display = 'block';
         setTimeout(function() {
            emailError.style.display = 'none';
        }, 2000);
         return false;
     } else {

         // checking If email is valid, hide error message and allow form submission
         emailError.style.display = 'none';

         // display success after submission
         emailSuccess.style.display = 'block';
         setTimeout(function() {
            emailSuccess.style.display = 'none';
        }, 2000);

         // form reset after submission
         form.reset();
     }
 });