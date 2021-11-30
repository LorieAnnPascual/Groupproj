//Validation and saving to local storage
const Submit = document.getElementById('btn');

Submit.addEventListener('click', () => {
   clientForm();
});

let Data = localStorage.getItem('client')
   ? JSON.parse(localStorage.getItem('client'))
   : [];

clientForm = () => {
   const firstName = document.getElementById('fName').value.trim();
   const lastName = document.getElementById('lName').value.trim();
   const emailAdd = document.getElementById('email').value.trim();
   const num = document.getElementById('phone').value.trim();
   const message = document.getElementById('message').value.trim();
   let service = document.querySelectorAll("input[name='checkbox']:checked");
   let selected = [...service].map((checked) => checked.value);

   if (firstName == '') {
      alert('First name is required.');
      contactForm.fName.focus();
      return false;
   }
   if (lastName == '') {
      alert('Last name is required.');
      contactForm.lName.focus();
      return false;
   }
   if (emailAdd == '') {
      alert('Email is required.');
      contactForm.email.focus();
      return false;
   }
   if (num == '') {
      alert('Phone number is required.');
      contactForm.phone.focus();
      return false;
   }
   if (num.length < 11) {
      alert('Phone number has a minimum of 11 digits.');
      contactForm.phone.focus();
      return false;
   }
   if (message == '') {
      alert('Write your message');
      return false;
   }
   

   let client = {
      id: Date.now(),
      firstname: firstName,
      lastname: lastName,
      email: emailAdd,
      telNum: num,
      service: selected,
      message: message,
   };
   Data.push(client);
   localStorage.setItem('client', JSON.stringify(Data));
   document.contactForm.reset();
   alert('Form submitted.');
};
