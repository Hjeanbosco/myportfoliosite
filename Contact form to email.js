function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var msg = document.getElementById('msg').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email +
	"<br/> Msg " + msg;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hatejeanbosco2@gmail.com",
    Password : "D417A27753BE3EFC7B8571A77FB1908337DA",
    To : 'hategekimanajeanbosco22@gmail.com',
    From : "hatejeanbosco2@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}
