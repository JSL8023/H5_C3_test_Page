window.onload = function(){
	var sing_up = document.getElementById("sing_up");
	sing_up.addEventListener("touchstart",function(){
		var email = document.getElementById("email").value;
		var passWord = document.getElementById("password").value;
		var lpassWord =JSON.parse(window.localStorage.getItem("password"));
	 	var lemail =JSON.parse(window.localStorage.getItem("email"));
		
//		alert(typeof email);
//		alert(typeof lemail);
//		alert("dsa")
		if (email=="") {
			alert("请输入用户名")
		}else if(email!=lemail){
			alert("无此用户，请重新输入")	;
			document.getElementById("email").value = null;
		}else if(email==lemail){
			if (passWord=="") {
				alert("请输入密码")
			}else if(passWord==lpassWord) {
				alert("页面跳转中，请稍后");
				location.href="home_page.html"
			}else{
				alert("密码输入错误，请重新输入");
				document.getElementById("password").value ="";
			}			
		}



	},false)
	
}
