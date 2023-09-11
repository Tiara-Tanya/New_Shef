
// function clearErrors() {
//     errors = document.getElementsByClassName('formerror');
//     for (let item of errors) {
//         item.innerHTML = "";
//     }
// }

// function seterror(id, error) {
//     element = document.getElementById(id);
//     element.getElementsByClassName('formerror')[0].innerHTML = error;

// }

// function validateForm() {
//     var returnval = true;
//     clearErrors();
//     var name = document.forms['myForm']["fname"].value;


//     if (name.length < 5) {
//         seterror("name", "*Length of name is too short");
//         returnval = false;
//     }

//     if (name.length == 0) {
//         seterror("name", "*Name cannot be blank");
//         returnval = false;
//     }

//     var lastname = document.forms['myForm']["lname"].value;


//     if (lastname.length > 10) {
//         seterror("lastname", "*Last name is too long");
//         returnval = false;
//     }

//     var email = document.forms['myForm']["femail"].value;


//     if (email.length > 30) {
//         seterror("email", "*Email length is too long");
//         returnval = false;
//     }

//     var phone = document.forms['myForm']["fphone"].value;


//     if (phone.length != 10) {
//         seterror("phone", "*Phone number must ne of 10 digits");
//         returnval = false;
//     }

//     var password = document.forms['myForm']["pass"].value;
//     var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

//     if (password.length < 8) {
//         seterror("password", "*Password should be atleast 8 characters long");
//         returnval = false;
//     }

//     if (!password.match(paswd)) {
//         seterror("password", "*Password must be strong");
//         returnval = false;
//     }

//     var cpassword = document.forms['myForm']["cpass"].value;

//     if (cpassword != password) {
//         seterror("cpassword", "*Password and Confirm Password should match");
//         returnval = false;
//     }
//     return returnval;

// }


//     //window.location.href = "login.html";


//     const myForm = document.getElementById("sform");
//     myForm.addEventListener("submit", function (e) {
//         e.preventDefault();


//          const formData = new FormData(this);

//         console.log(formData);
//         const json = {

//             firstname: formData.get("fname"),

//             lastname: formData.get("lname"),

//             userEmail: formData.get("femail"),

//             userPassword: formData.get("pass"),

//             contactNumber: formData.get("fphone"),

//         };

//         console.log(json);

//         fetch("http://3.16.152.50:8000/api/users/signup",
//             {
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/json', // Set the content type to JSON
//                 },
//                 body: JSON.stringify(json),
//             }).then(function (response) {
//                 return response.text();
//             }).then(function (text) {
//                 console.log(text);
//             }).catch(function (error) {
//                 console.error(error);
//             })


//     })

function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();
    var name = document.forms['myForm']["fname"].value;

    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Name cannot be blank");
        returnval = false;
    }

    var lastname = document.forms['myForm']["lname"].value;

    if (lastname.length > 10) {
        seterror("lastname", "*Last name is too long");
        returnval = false;
    }


    var email = document.forms['myForm']["femail"].value;


        if (email.length > 30) {
            seterror("email", "*Email length is too long");
            returnval = false;
        }
    
        var phone = document.forms['myForm']["fphone"].value;
    
    
        if (phone.length != 10) {
            seterror("phone", "*Phone number must ne of 10 digits");
            returnval = false;
        }
    
        var password = document.forms['myForm']["pass"].value;
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    
        if (password.length < 8) {
            seterror("password", "*Password should be atleast 8 characters long");
            returnval = false;
        }
    
        if (!password.match(paswd)) {
            seterror("password", "*Password must be strong");
            returnval = false;
        }
    
        var cpassword = document.forms['myForm']["cpass"].value;
    
        if (cpassword != password) {
            seterror("cpassword", "*Password and Confirm Password should match");
            returnval = false;
        }

    return returnval;
}

const myForm = document.getElementById("sform");
console.log(myForm);
myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    const formData = new FormData(myForm);
    console.log(formData);
    const json = {
        firstname: formData.get("fname"),
        lastname: formData.get("lname"),
        userEmail: formData.get("femail"),
        userPassword: formData.get("pass"),
        contactNumber: formData.get("fphone"),
    };

    console.log(json);

    fetch("http://3.16.152.50:8000/api/users/signup", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
    }).then(function (response) {
        if(response.status===200 || response.status===201)
        {
            alert("SignUp Successful");
        }
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.error(error);
    });
});





