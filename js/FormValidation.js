var NameInput = document.getElementById("Name");
var submitBtn = document.getElementById("submit");
var nameVal = document.getElementById("name-vald");
var gender = document.getElementsByName('gender');
var gender_vald = document.getElementById("gender-vald")
var sports = document.getElementsByName("sports");
var Sports_vald = document.getElementById("Sports-vald")
var country = document.getElementsByName("country");
var country_vald =document.getElementById("country-vald");


/*=============== Sumbit Button checks all the validation =================*/

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    valdiationname();
    valdiationgender();
    validationEmail();
    validationpassword();
    valdiationgsports();
    valdiatiOnCountry();



});
/*=============== Validation on Name =================*/


function valdiationname() {
    if (NameInput.value.length < 3 ) {
        nameVal.classList.remove("d-none");
        NameInput.classList.add('is-invalid')
        NameInput.classList.remove('is-valid')
    }
    else {
        nameVal.classList.add("d-none");
        NameInput.classList.remove('is-invalid')
        NameInput.classList.add('is-valid')

    }
}


/*=============== Validation on Email =================*/
var Email = document.getElementById('Email')
var email_vald = document.getElementById('email-vald');
function validationEmail() {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(Email.value) == true) {
        email_vald.classList.remove('d-none');
        Email.classList.remove('is-invalid')
        Email.classList.add('is-valid')
        email_vald.classList.add('d-none')
        email_vald.classList.remove('d-block')
    }
    else {
        email_vald.classList.add('d-none');
        Email.classList.remove('is-valid')
        Email.classList.add('is-invalid')
        email_vald.classList.remove('d-none')
        email_vald.classList.add('d-block')
    }
}


/*=============== Validation on Password =================*/
var password = document.getElementById('password');
var pass_vald = document.getElementById("pass-vald")
function validationpassword() {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(password.value) == true) {
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
        pass_vald.classList.add('d-none')
        pass_vald.classList.remove('d-block')
    }
    else {
        password.classList.remove('is-valid')
        password.classList.add('is-invalid')
        pass_vald.classList.remove('d-none')
        pass_vald.classList.add('d-block')
    }
}

/*=============== Validation on gender =================*/

function valdiationgender() {
    if (gender[0].checked == false && gender[1].checked == false) {
        gender_vald.classList.remove("d-none")
    }
    else {
        gender_vald.classList.add("d-none")

    }

}

/*=============== Validation on Sports =================*/

function valdiationgsports() {
    if (sports[0].checked == false && sports[1].checked == false || sports[0].checked == false && sports[2].checked == false || sports[1].checked == false && sports[2].checked == false) {
        Sports_vald.classList.remove("d-none")

    }
    else {
        Sports_vald.classList.add("d-none")

    }


}
/*=============== Validation on Country =================*/

function valdiatiOnCountry() {
    for (let i = 0; i < country.length; i++) {
        if (country[i].checked == false ) {
            country_vald.classList.remove("d-none");
            console.log("dsf")
        }
        else {
            country_vald.classList.add("d-none");

        }
    }

}


/*=============== Resest Button =================*/

function resetForm() {
    NameInput.value = "";
    password.value = "";
    Email.value = "";
    gender[0].checked = false;
    gender[1].checked = false;
    nameVal.classList.add("d-none");
    NameInput.classList.remove('is-invalid')
    email_vald.classList.add('d-none');
    Email.classList.remove('is-invalid');
    password.classList.remove('is-invalid')
    pass_vald.classList.add('d-none')
    gender_vald.classList.add("d-none")
    Sports_vald.classList.add("d-none")

}


var eye = document.getElementById("eye"); 
console.log(eye)
eye.addEventListener("click", function() {
password.setAttribute("type" , "text")
console.log(password)
})
