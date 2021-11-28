//Validation form
function sendData() 
{
    const myForm = document.forms["contactForm"];
    const fName = myForm["fname"].value.trim();
    const lName = myForm["lname"].value.trim();
    const emailAdd = myForm["email"].value.trim();
    const telNum = myForm["phone"].value.trim();
    const services = document.getElementById("box");
    const textBox = myForm["message"].value.trim();

    if(fName =="") {
        alert("Please enter your first name");
        myForm["fname"].focus();
        return false;
    } else if (!isNaN(fName)) {
        alert("Name should be in character.");
        myForm["firstname"].focus();
        return false;
    } else if (lName =="") {
        alert("Please type your last name.");
        myForm["lastname"].focus();
        return false;
    } else if(emailAdd =="") {
        alert("Please enter your email address");
        myForm["email"].focus();
        return false;
    } else if(telNum =="") {
        alert("Please enter your cellphone number");
        myForm["phone"].focus();
        return false;
    } else if(telNum.length < 11) {
        alert("Phone number should be maximum of 11 digits")
        return false;
    } else if(isNaN(telNum)) {
        alert("Contact number should be in digits.");
        myForm["phone"].focus();
        return false;
    } else if (!services.checked) {
        alert("Select at least one service");
        return false;
    }else if(textBox =="") {
        alert("Please type a brief message");
        return false;
    }  else {
        confirm("You are about to send your message. Do you want to continue?")
    }
    
}

const cForm = document.forms["contactForm"];
document.getElementById("btn").addEventListener("click", save);  
const save=(event)=> {
    event.preventDefault();
    let obj = {
        id: Date.now(),
        // firstname: cForm["fname"].value,
        // lastname: cForm["lname"],
        // email: cForm["emailAdd"],
        // tel: cForm["phone"],
        // service: document.getElementById("#box"),
        // message: cForm["message"]
    }
    console.log(JSON.stringify(obj, null, 2));
    localStorage.setItem("cForm", JSON.stringify(obj));
}

