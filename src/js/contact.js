export default function (){
    const form = document.getElementById("my-form");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const mail = document.getElementById("mail");
    const tel = document.getElementById("tel");
    const message = document.getElementById("message")

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        const status = document.getElementById("my-form-status");
        const data = new FormData();
        data.append('Our WebSite', 'flowersstudio.com');
        data.append('Messages', `Name: ${name.value}\n Lastname: ${surname.value}\n Email: ${mail.value}\n Telephone: ${tel.value}\n Message: ${message.value}`);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thank you for your application!";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "There was a problem submitting the form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "There was a problem submitting the form"
        });
    })
}