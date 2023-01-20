

let username1= /^[a-zA-Z]+$/;
let email1= /^[a-zA-Z]+$/;
let password1=/^[a-zA-Z]+$/;
function submitreg(){

    if(document.getElementById("username").value.match(username1)){


        if(document.getElementById("email").value.match(email1)){

            if(document.getElementById("password").value.match( password1)){

                window.open("file:///C:/Users/HP/loginpage/index.html");
            }
            else
            {
                alert("please enter correct password");
            }
            



        }
        else{
            alert("please enter correct email");
        }
    

    }
    else{
        alert("please enter username");
    };



    
    }




let username=document.getElementById("username").value;
let email=document.getElementById("email").valu;
let pass=document.getElementById("password").value;


let user={

    username:username,
    email:email,
    password:pass,

    };

    let json=JSON.stringify(user);
    localStorage.setItem(username,json);
    console.log('user added');

        
