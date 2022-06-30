const contactForm = document.querySelector('.contact-form');
let names = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number')
let message = document.getElementById('message')
let select = document.getElementById('ddlViewBy');
select.addEventListener('change', function () {
    console.log(select.value);
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: names.value,
        email: email.value,
        number: number.value,
        select: select.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            // alert('Email Send');
            names.value = "";
            email.value = "";
            number.value = "";
            select.value = "";
            message.value = "";
        } else {
            window.location.href="./thanks.html"
        }
    }

    xhr.send(JSON.stringify(formData));

    console.log(formData)

})