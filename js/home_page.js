window.onload=function(){
//	alert("jj")
	var name = document.getElementsByClassName("name")[0];
	var email = document.getElementsByClassName("email")[0];
	
//	var deta = JSON.parse(window.localStorage.getItem("deta"));
//	name.value=window.localStorage.getItem("name");
	name.innerHTML= JSON.parse(window.localStorage.getItem("name"));
	email.innerHTML= JSON.parse(window.localStorage.getItem("email"));
//	email.innerHTML=window.localStorage.getItem(localStorage.key(email))
}
