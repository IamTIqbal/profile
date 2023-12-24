const form = document.querySelector("form");
const fullName = document.getElementById("name");
const emailAddress = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const textMessage = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value} <br>Email: ${emailAddress.value} <br>Phone Number: ${phoneNumber.value} <br>Message: ${textMessage.value}`;

    Email.send({
        SecureToken : "e2e06980-e673-4d21-90c6-a08e3dd05f9f",
        Host : "smtp.elasticemail.com",
        Username : "email@tamimiqbal.com",
        Password : "281DBC5AB4284FFDDC5416BA0B0EF0AEEB74",
        To : 'info.mtamim@gmail.com',
        From : "email@tamimiqbal.com",
        Subject : "Email From Website",
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})