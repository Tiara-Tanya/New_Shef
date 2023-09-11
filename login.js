

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.forms['loginForm']["email"].value;
    const password = document.forms['loginForm']["pass"].value;

    const loginData = {
        userEmail: email,
        userPassword: password,
    };

    fetch("http://3.16.152.50:8000/api/users/login", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    }).then(function (response) {
        if(response.status===200 || response.status===201)
        {
            alert("Login Successful");
            window.location.href="home.html"
        }
        else
        {
            alert("Login UnSuccessful");
        }
        return response.json(); // Assuming the API returns JSON response
    }).then(function (data) {
        // Handle the API response data
        console.log(data); // For example, you can log the data
       
    }).catch(function (error) {
        console.error(error);
    });
});
