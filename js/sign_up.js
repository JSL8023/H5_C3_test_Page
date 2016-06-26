window.onload = function(){

	var TiJiao = document.getElementsByClassName("iN")[0];

	TiJiao.addEventListener("touchstart",function(){
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var passWord = document.getElementById("password").value;
		
		if (name=="") {
			alert("请输入用户名");
		} else if(email==""){
			alert("请输入邮箱");
		} else if(!/^\w+@[a-zA-Z0-9]+(\.[a-z]{2,}){1,}$/.test(email)){
			alert("邮箱格式不正确");
		}else{
			alert("注册成功");
			window.localStorage.setItem("name",JSON.stringify(name));
			window.localStorage.setItem("email",JSON.stringify(email));
			window.localStorage.setItem("password",JSON.stringify(passWord));
			/*var deta = {a:name,b:email};
			window.localStorage.setItem("key",JSON.stringify(deta));*/
			location.href="home_page.html";
		}
		
		
		
	},false)
}
