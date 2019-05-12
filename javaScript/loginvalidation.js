function loginValidation(){
	var uname=document.forms.LoginForm.username.value;
	var pass=document.forms.LoginForm.password1.value;
	var robot=document.forms.LoginForm.robot.value;
	var remember=document.forms.LoginForm.remember.checked;
	var patt=/["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/;
	var patt1=/[0-9]/;
	if(uname==null || uname==""){
		alert("Please Enter Your User Name !");
		document.forms.LoginForm.username.focus();
		return false;
	}
	if(uname.length<5){
		alert("Minimum Length of User Name is 5 characters !");
		document.forms.LoginForm.username.focus();
		return false;
	}
	if(patt.test(uname)==true){
		alert("Please Don't Use Special Characters in Your User Name !");
		document.forms.LoginForm.username.focus();
		return false;
	}
	if(patt1.test(uname)==true){
		alert("Please Don't Use Any Numbers in Your User Name !");
		document.forms.LoginForm.username.focus();
		return false;
	}
	if(pass==null || pass==""){
		alert("Please Enter Your Password !");
		document.forms.LoginForm.password1.focus();
		return false;
	}
	if(pass.length<6){
		alert("Minimum Password Lenght is 6 Characters !");
		document.forms.LoginForm.password1.focus();
		return false;
	}
	if(patt.test(pass)!=true){
		alert("Please Use Atleast One Special Character in Your Password !");
		document.forms.LoginForm.password1.focus();
		return false;
	}
	if(patt1.test(pass)!=true){
		alert("Please Use Atleast One Integer Number in Your Password !");
		document.forms.LoginForm.password1.focus();
		return false;
	}
	if(/[A-Z]/.test(pass)!=true){
		alert("Please Use Atleast One Upper Case Letter in Your Password !");
		document.forms.LoginForm.password1.focus();
		return false;
	}
	if(/[a-z]/.test(pass)!=true){
		alert("Please Use Atleast One Lower Case Letter !");
		document.forms.LoginForm.password1.focus();
		return false;
	}
	if(robot==""){
		var cn=confirm("Are You Not A Robot !");
		if(cn==true)
			return true;
		else 
			return false;
	}
}
function check()
{
	if(remember.checked)
	{
		var cn=confirm("Do You Want To Save Your Password? ");
		if(cn==true)
		{
			document.getElementsByClassName("remember")[0].style.color="#0000FF";
			document.getElementsByClassName("remember")[0].style.fontSize="20px"; 
			alert("Your Password Has Been Saved !");
			return true;
		}
		else
		{
			return true;
		}
	}
	else
	{
		document.getElementsByClassName("remember")[0].style.color="black";
		document.getElementsByClassName("remember")[0].style.fontSize="18px";
		return true;
	}
}