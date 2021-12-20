var email1 = document.getElementById("email");
var password1 = document.getElementById("password");

function loginBtn(){
    // console.log(email1.value);
    // console.log(password1.value);

    if ((email1.value == "anuja@gmail.com")&&(password1.value == "123")){
        location.href = "./homepage.html";
    }
    else{
        location.reload();
    }
}