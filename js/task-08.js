const form = document.querySelector(".login-form")
form.addEventListener("submit", handSubmit)
function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, passvord }
    } = event.currentTarget
    if (email.value === "" || passvord.value === "") {
        return alert("Заповни всі поля!")
    }
    const userInfo = {
        email: email.value,
        passvord: passvord.value,
    }
    console.log(userInfo)
    event.currentTarget.reset()
}