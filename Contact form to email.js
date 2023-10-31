function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
    var messages = document.getElementById('messages').value;
	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
    "<br/> Email " + email +
    "<br/> Messages " + messages;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hatejeanbosco2@gmail.com",
    Password : "1E646222634995F36555C1A5C56491B5DF86",
    To : 'hategekimanajeanbosco22@gmail.com',
    From : "hatejeanbosco2@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Message Secussfully Sent!!.", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}