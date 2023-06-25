'use strict '

const menuBtn = document.querySelector('.menu_btn');
const menuOption = document.querySelector('.menu_options');
const overlay = document.querySelector('.overlay');
const menuOptions = document.querySelectorAll('.menu_options a');

menuBtn.addEventListener('click', () => {
    menuOption.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});

overlay.addEventListener('click', () => {
    menuOption.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});


menuOptions.forEach(btn => btn.addEventListener('click', () => {
    menuOption.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}))


// Email.send({
//     Host : "smtp.yourisp.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
//
 const form=document.querySelector('.contact-form');

  form.addEventListener('submit', e => {
      e.preventDefault()
          let name = document.querySelector('.name').value;
          let email = document.querySelector('.email').value;
          let content = document.querySelector('.content').value;

          if(name.length > 0 && email.length > 0 && content.length > 0){
              form.reset();
              sendEmail(name, email, content)
          }else{
              alert('Complete the form to send a message to ManojEngineering')
          }
  })

  function sendEmail(name, email, content){
  Email.send({
        Host : "smtp.elasticemail.com",
        Username : "janakiramjack@gmail.com",
        Password : "940028A71C342DC0EAA6CB4A87A1C5F58779",
        To : 'manoj@manojengineering.in',
        From : "janakiramjack@gmail.com",
        Subject : `${name} just messaged you from the website form`,
        Body : `Name : ${name} <br/> Email : ${email} <br/> Message : ${content}`
    }).then((success)=>{
      alert("Email successfully sent to ManojEngineering")
    }).catch((error) => {
    alert('Error sending an email!')
    })
    } 
