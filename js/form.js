//Validation and saving to local storage
const Submit = document.getElementById("btn");
Submit.addEventListener("click",() => 
{
    clientForm();
})
   let Data = localStorage.getItem('clientInformation')
  ? JSON.parse(localStorage.getItem('clientInformation'))
  : [];
   formData = [];
   
   clientForm = () => 
   {
       const text1 = document.getElementById("fName").value;
       const text2 = document.getElementById("lName").value;
       const emailAdd = document.getElementById("email").value;
       const Num = document.getElementById("phone").value;

       if(text1 =="") {
           alert("First name is required.");
           contactForm.fName.focus();
           return false;
       }
       if(text2 =="") {
           alert("Last name is required.");
           contactForm.lName.focus();
           return false;
       }
       if(emailAdd =="") {
           alert("Email is required.");
           contactForm.email.focus();
           return false;
       }
       if(Num =="") {
           alert("Phone number is required.");
           contactForm.phone.focus();
           return false;
       } else if(Num.length < 11) {
           alert("Phone number has a minimum of 11 digits.");
           contactForm.phone.focus();
           return false;
       }

       let confirmation = confirm("Are you sure you want to submit this form?");
       if (confirmation) {
           let fname = document.getElementById("fName").value;
           let lname = document.getElementById("lName").value;
           let email = document.getElementById("email").value;
           let telNum = document.getElementById("phone").value;
           let service = document.querySelectorAll("input[name='checkbox']:checked");
           let selected = [...service].map(checked => checked.value);
           let message = document.getElementById("message").value;

           let client = {
               id: Date.now(),
               firstname: fname,
               lastname: lname,
               email: email,
               telNum: telNum,
               service: selected,
               message: message
           }
           formData.push(client);
           console.log(JSON.stringify(client, null, 2));
           localStorage.setItem("client", JSON.stringify(formData));
           document.contactForm.reset();
           alert("Form submitted.");
       } 
       return(confirmation);
   }

