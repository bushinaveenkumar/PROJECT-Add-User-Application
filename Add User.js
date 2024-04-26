let addUserForm = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsg = document.getElementById("emailErrMsg");
let statusEl = document.getElementById("status");
let genderMale = document.getElementById("genderMale");
let genderFemale = document.getElementById("genderFemale");

let formData = {
    name: "",
    email: "",
    status: "",
    gender: ""
};
nameEl.addEventListener("change", function(event) {
    if (nameEl.value === "") {
        nameErrMsg.textContent = "*Required";
    } else {
        nameErrMsg.textContent = "";
    }

    formData.name = event.target.value;
});
emailEl.addEventListener("change", function() {
    if (emailEl.value === "") {
        emailErrMsg.textContent = "*Required";
    } else {
        emailErrMsg.textContent = "";
    }

    formData.email = emailEl.value;
});
statusEl.addEventListener("change", function() {
    formData.status = statusEl.value;
});
genderMale.addEventListener("change", function() {
    formData.gender = genderMale.value;
});
genderFemale.addEventListener("change", function() {
    formData.gender = genderFemale.value;
});

function validateformdata(formData) {
    let {
        name,
        email
    } = formData;
    if (name === "") {
        nameErrMsg.textContent = "*Required";
    }
    if (email === "") {
        emailErrMsg.textContent = "*Required";
    }
}

function makeHTTPSpostrequest(formData) {
    let url = "https://gorest.co.in/public-api/users";
    let requestconfigobj = {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
            Accept: "Application/json",
            Authorization: "Bearer 505ce208e043df83dd78afe73f6038df5e2306c1536495020cb7fec8a8868f90"
        },
        body: JSON.stringify(formData)
    };

    fetch(url, requestconfigobj)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData)
        })

}


function takedatamakerequest(event) {
    event.preventDefault();
    validateformdata(formData);
    makeHTTPSpostrequest(formData);
}

addUserForm.addEventListener("submit", takedatamakerequest)