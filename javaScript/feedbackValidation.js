function feedbackValidation(){
	var uname=document.getElementById('uname').value;
	var address=document.getElementById('email').value;
	var mobile=document.getElementById('phone').value;
	var area=document.getElementById('area').value;
	var patt=/["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/;
	var patt1=/[0-9]/;
	if(uname==null||uname==""){
		alert("Please Enter Your User Name !");
		document.getElementById('uname').focus();
		return false;
	}
	if(uname.length<5){
		alert("Minimum Lenght of User Name is 5 Characters !");
		document.getElementById('uname').focus();
		return false;
	}
	if(patt.test(uname)==true){
		alert("Please Don't Use Special Characters in Your User Name !");
		document.getElementById('uname').focus();
		return false;
	}
	if(patt1.test(uname)==true){
		alert("Please Don't Use Numbers in Your User Name !");
		document.getElementById('uname').focus();
		return false;
	}
	if(address==""){
		alert("Please Enter Your Email Address !");
		document.getElementById('email').focus();
		return false;
	}
	var atindex=address.indexOf('@');
	var dotindex=address.lastIndexOf('.');
	if(atindex<1 || dotindex>=(address.length)-2 || (dotindex-atindex)<3){
		alert("Invalid Email Address !");
		document.getElementById('email').focus();
		return false;
	}
	var reg=/@/g;
	var count=address.match(reg);
	var c=count.length;
	if(c>=2){
		alert("Please Don't Use Double '@' !");
		document.getElementById('email').focus();
		return false;
	}
	var patt2=/^\w+([\.-]?\w+)*@[^0-9]\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(patt2.test(address)==false){
		alert("It is Not a Format Of Valid Email Id !\nAnd Please Don't Use Any Special Characters !");
		document.getElementById('email').focus();
		return false;
	}
	if(/[A-Z]/.test(address)==true){
		alert("Please Don't Use Any Upper Case Letters in Your Email !");
		document.getElementById('email').focus();
		return false;
	}
	if(mobile==null||mobile==""){
		alert("Please Enter Your Mobile Number !");
		document.getElementById('phone').focus();
		return false;
	}
	if(/^[0-6]/.test(mobile)==true){
		alert("Please Don't Use [0-6] Numbers in Your Mobile Number !");
		document.getElementById('phone').focus();
		return false;
	}
	if(mobile.length<=9|| mobile.length>10){
		alert("Please Enter 10 Digits Mobile Numbers !");
		document.getElementById('phone').focus();
		return false;
	}
	if(area==""){
		alert("Please Share Your Vauable Experiance Regarding This Site.");
		document.getElementById('area').focus();
		return false;
	}
	if(area.length<20){
		alert("Please Use Atleast 10 Characters in Your Thoughts.");
		document.getElementById('area').focus();
		return false;
	}
}