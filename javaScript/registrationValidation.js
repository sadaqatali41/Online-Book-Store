function registrationValidation(){
	var fname=document.forms.RegistrationForm.firstname.value;
	var lname=document.forms.RegistrationForm.lastname.value;
	var uname=document.forms.RegistrationForm.username.value;
	var mobile=document.forms.RegistrationForm.phone.value;
	var passwrd=document.forms.RegistrationForm.password1.value;
	var passwrd1=document.forms.RegistrationForm.password2.value;
	var gender=document.forms.RegistrationForm.gender.value;
	var date=document.forms.RegistrationForm.date.value;
	var month=document.forms.RegistrationForm.month.value;
	var year=document.forms.RegistrationForm.year.value;
	var hobby=document.forms.RegistrationForm.hobby.value;
	var hobby1=document.forms.RegistrationForm.hobby1.value;
	var termm=document.getElementById("term").checked;
	var address=document.forms.RegistrationForm.address.value;
	var patt=/["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/;
	var patt1=/[0-9]/;
	if(fname==null||fname==""){
		alert("Please Enter Your First Name !");
		document.forms.RegistrationForm.firstname.focus();
		return false;
	}
	if(patt.test(fname)==true){
		alert("Please Don't Use Special Characters in Your First Name !");
		document.forms.RegistrationForm.firstname.focus();
		return false;
	}
	if(patt1.test(fname)==true){
		alert("Please Don't Use Numbers in Your First Name !");
		document.forms.RegistrationForm.firstname.focus();
		return false;
	}
	if(fname.length<2){
		alert("First Name Should Have Atleast 2 Characters !");
		document.forms.RegistrationForm.firstname.focus();
		return false;
		}
	if(lname==null||lname==""){
		alert("Please Enter Your Last Name !");
		document.forms.RegistrationForm.lastname.focus();
		return false;
	}
	if(patt.test(lname)==true){
		alert("Please Don't Use Special Characters in Your Last Name !");
		document.forms.RegistrationForm.lastname.focus();
		return false;
	}
	if(patt1.test(lname)==true){
		alert("Please Don't Use Numbers in Your Last Name !");
		document.forms.RegistrationForm.lastname.focus();
		return false;
	}
	if(lname.length<3){
		alert("Last Name Should Have More Than 2 Characters !");
		document.forms.RegistrationForm.lastname.focus();
		return false;
	}
	if(uname==null||uname==""){
		alert("Please Enter Your User Name !");
		document.forms.RegistrationForm.username.focus();
		return false;
	}
	if(uname.length<5){
		alert("Minimum Lenght of User Name is 5 Characters !");
		document.forms.RegistrationForm.username.focus();
		return false;
	}
	if(patt.test(uname)==true){
		alert("Please Don't Use Special Characters in Your User Name !");
		document.forms.RegistrationForm.username.focus();
		return false;
	}
	if(patt1.test(uname)==true){
		alert("Please Don't Use Numbers in Your User Name !");
		document.forms.RegistrationForm.username.focus();
		return false;
	}
	if(mobile==null||mobile==""){
		alert("Please Enter Your Mobile Number !");
		document.forms.RegistrationForm.phone.focus();
		return false;
	}
	if(/^[0-6]/.test(mobile)==true){
		alert("Please Don't Use [0-6] Numbers in Your Mobile Number !");
		document.forms.RegistrationForm.phone.focus();
		return false;
	}
	if(mobile.length<=9|| mobile.length>10){
		alert("Please Enter 10 Digits Mobile Numbers !");
		document.forms.RegistrationForm.phone.focus();
		return false;
	}
	if(passwrd==null||passwrd==""){
		alert("Please Enter Your Password !");
		document.forms.RegistrationForm.password1.focus();
		return false;
	}
	if(passwrd.length<6){
		alert("Minimum Password Lenght is 6 Characters !");
		document.forms.RegistrationForm.password1.focus();
		return false;
	}
	if(patt.test(passwrd)!=true){
		alert("Please Use Atleast One Special Character in Your Password !");
		document.forms.RegistrationForm.password1.focus();
		return false;
	}
	if(patt1.test(passwrd)!=true){
		alert("Please Use Atleast One Integer Number in Your Password !");
		document.forms.RegistrationForm.password1.focus();
		return false;
	}
	if(/[A-Z]/.test(passwrd)!=true){
		alert("Please Use Atleast One Upper Case Letter in Your Password !");
		document.forms.RegistrationForm.password1.focus();
		return false;
	}
	if(/[a-z]/.test(passwrd)!=true){
		alert("Please Use Atleast One Lower Case Letter !");
		document.forms.RegistrationForm.password1.focus();
		return false;
	}
	if(passwrd1==null || passwrd1==""){
		alert("Please Enter Your Confirmation password !");
		document.forms.RegistrationForm.password2.focus();
		return false;
	}
	if(passwrd!=passwrd1){
		alert("Mismatch Password !");
		document.forms.RegistrationForm.password2.focus();
		return false;
	}
	if(address==null || address==""){
		alert("Please Enter Your Email Address !");
		document.forms.RegistrationForm.address.focus();
		return false;
	}
	var atindex=address.indexOf('@');
	var dotindex=address.lastIndexOf('.');
	if(atindex<1 || dotindex>=(address.length)-2 || (dotindex-atindex)<3){
		alert("Invalid Email Address !");
		document.forms.RegistrationForm.address.focus();
		return false;
	}
	var reg=/@/g;
	var count=address.match(reg);
	var c=count.length;
	if(c>=2){
		alert("Please Don't Use Double '@' !");
		document.forms.RegistrationForm.address.focus();
		return false;
	}
	var patt2=/^\w+([\.-]?\w+)*@[^0-9]\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(patt2.test(address)==false){
		alert("It is Not a Format Of Valid Email Id !\nAnd Please Don't Use Any Special Characters !");
		document.forms.RegistrationForm.address.focus();
		return false;
	}
	if(/[A-Z]/.test(address)==true){
		alert("Please Don't Use Any Upper Case Letters in Your Email !");
		document.forms.RegistrationForm.address.focus();
		return false;
	}
	if(gender==null || gender==""){
		alert("Please Select Your Gender !");
		return false;
	}
	if(date==null || date==""){
		alert("Please Select Your Birthday Date !");
		return false;
	}
	if(month==null || month==""){
		alert("Please Select Your Birthday Month !");
		return false;
	}
	if(year==null || year==""){
		alert("Please Select Your Birthday Year !");
		return false;
	}
	if(hobby==null || hobby==""){
		alert("Please Select Your First Hobby !");
		return false;
	}
	if(hobby1==null || hobby1==""){
		alert("Please Select Your Second Hobby !");
		return false;
	}
	if(termm==""){
		alert("Please Select Term And Conditions !");
		return false;
	}
}