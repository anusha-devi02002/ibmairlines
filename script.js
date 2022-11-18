const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginButton1 = document.getElementById("login-form-submit1");

var valid={"ad":"ad123","admin":"admin123","ibm":"ibm123"}
function login(){
    event.preventDefault();
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    console.log(u);
    console.log(p);
    if(u=="" && p==""){
        alert("Enter username and password")
    }
    else if(u==""){
        alert("Enter username")
    }
    else if(p==""){
        alert("Enter password")
    }
    f=0
    for (let x in valid){
      if(x==u){
          if(valid[x]==p){
           location.replace("index.html")
          f=1;
          break;
          }
          else{
            document.getElementById("login-error-msg").innerHTML='Invalid password';
            document.getElementsByName("username").value="";
            document.getElementsByName("username").value="";
          }
        }
    }
    if(f==0){
        document.getElementById("login-error-msg").innerHTML='Invalid username';
        document.getElementsByName("username").value="";
        document.getElementsByName("username").value="";
    }
}

function signup(){
    event.preventDefault();
    var un = document.getElementById("uname").value;
    var ps = document.getElementById("pass").value;
    var rps = document.getElementById("rpass").value;
    var i=1;
    for (let x in valid) {
        if(x==un) {
            i=0;
            document.getElementById("login-error-msg1").innerHTML='User already exists';
            document.getElementsByName("username").value="";
            document.getElementsByName("username").value="";
        }
    }
    if(i==1) {
        if(ps!=rps) {
            document.getElementById("login-error-msg1").innerHTML='Password Mismatch';
            document.getElementsByName("uname").value="";
            document.getElementsByName("username").value="";
        }
        else {
            valid[un]=ps;
            console.log(valid)
            window.alert("Signup successful") 
            event.preventDefault();
            location.replace("main.html")
        }
    }
}
